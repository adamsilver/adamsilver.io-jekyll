---
layout: post
title:  "Javascript inheritance"
date:   2014-01-02 09:00:59
categories: forms dom js
---

Javascript inheritance is useful with regard to code reuse. Douglas Crockford says it best [[0](#ref0)]. Unfortunately, ECMAScript doesn't provide an inherit function natively so we will need to create one. 

In this article a simple but powerful technique is documented. This article consists of two parts: Creating the inherit function and then utilising it to demonstrate one object inheriting the features of another.

## Creating an inherit function

This will consist of defining a namespace for the library (which we will call `lib`) containing two functions: `cloneObject` and `inherit` both taken from Jessie [[1](#ref1)]. The namespace bit is optional but good practice [[2](#ref2)].

    var lib = {};

This will contain the two library functions.

### Defining *cloneObject*
    
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
    
### Defining *inherit*

Then we define an `inherit` function. Under the hood, this uses the `cloneObject` function. See inline comments for further explanation.
    
    lib.inherit = function(Sub, Super) {
        // Clone the parent's prototype object and assign to child's prototype object
        Sub.prototype = lib.cloneObject(Super.prototype);
        
        // Assign reference to super constructor onto the child constructor
        Sub.superConstructor = Super;
        
        // Assign child as the child constructor
        Sub.prototype.constructor = Sub;
    };
    
That's the first part complete. Now we can demonstrate its usage.

## Example usage
    
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
    <dt class="citation" id="ref2">[2]</dt>
        <dd><a href="/articles/javascript-namespacing/">Javascript namespacing</a></dd>
	
</dl>