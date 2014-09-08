---
layout: post
title:  "Javascript inheritance"
date:   2014-01-02 09:00:59
categories: forms dom js
---

Douglas Crockford explains why inheritance is useful as a form of code reuse [[0](#ref0)]:
    
> It is very common to have a quantity of objects all implementing exactly the same methods. Classes make it possible to create them all from a single set of definitions. It is also common to have objects that are similar to some other objects, but differing only in the addition or modification of a small number of methods. Classical inheritance is useful for this but prototypal inheritance is even more useful.

In this article a simple but powerful implementation is discussed. ECMAScript doesn't provide an inherit function natively so we will need to create one.

## Creating an inherit function

Firstly, a `lib` namespace is defined to contain library functions. Don't worry it only needs two small functions to enable Javascript inheritance in a simple way.

    var lib = {};
    
Then we create a `cloneObject` function; this function is important, without it, we can't make copies of the same object.
    
    // For browsers that have Object.create
    if(Object.create) {
        lib.cloneObject = function(o) {
            return Object.create(o);
        };
    
    // For browsers that don't have Object.create available
    } else {
        lib.cloneObject = (function() {
            var Fn = function() {};
    
            return function(o) {
                Fn.prototype = o;
                return new Fn();
            };
        })();
    }
    
Then we define a `inherit` function. Under the hood, this uses the `cloneObject` function. See inline comments for further explanation.
    
    lib.inherit = function(Sub, Super) {
        // Clone the parent's prototype object and assign to child's prototype object
        Sub.prototype = lib.cloneObject(Super.prototype);
        
        // Assign reference to super constructor onto the child constructor
        Sub.superConstructor = Super;
        
        // Assign child as the child constructor
        Sub.prototype.constructor = Sub;
    };
    
That's it! Now we can show an example of one object inheriting the features of another.

**Note: code taken from Jessie library [[1](#ref1)]**

## Javascript inheritance example
    
Let's start with an Animal constructor:

    function Animal(name) {
        this.name = name;
    }
    
    Animal.prototype.getName = function() {
        return this.name;
    };
    
Creating an instance of an Animal is as follows:

    var animal = new Animal('Bob');
    var animalName = animal.getName(); // returns "Bob"

A dog is an animal so the Dog inherits from Animal.

    function Dog() {
        // call super constructor so that Dog's also have names
        Dog.superConstructor.apply(this, arguments);
    }
    
    lib.inherit(Dog, Animal);
    
    // modify the super constructor getName method so that it states "Dog name: the name"
    Dog.prototype.getName = function() {
        return "Dog name: " + Dog.superConstructor.prototype.getName();
    }

Creating an instance of a Dog is as follows:

    var dog = new Dog("Benny");
    dog.getName(); // returns "Dog name: Benny"

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://javascript.crockford.com/inheritance.html">Douglas Crockford on inheritance</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
    	<dd><a href="http://www.github.com/rassie/jessie/">Jessie Javascript library</a></dd>
</dl>