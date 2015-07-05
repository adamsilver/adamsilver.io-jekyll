---
layout: post
title:  "Javascript inheritance"
date:   2014-09-09 09:00:59
categories: js
---

Javascript inheritance is useful with regard to code reuse [[0](#ref0)]. Unfortunately, ECMAScript doesn't provide an *inherit* function natively, so we will need to create one. This article documents a simple and powerful technique and consists of two parts: 1) creating the inherit function and 2) utilising it to demonstrate one object inheriting the features of another.

## Creating the *inherit* function

This consists of defining a namespace for the library (which we will call *lib*) containing two functions: *cloneObject* and *inherit* both taken from Jessie [[1](#ref1)]. The namespace bit is optional but good practice [[2](#ref2)].

    var lib = {};

### Defining *cloneObject*

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

You will notice this function utilises the *cloneObject* function.

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

The example will demonstrate a Superhero inheriting the features of a normal Person. Let's start with the Person constructor:

    function Person(name) {
        this.name = name;
    }

    Person.prototype.sayName = function() {
        return "My name is:" + this.name;
    };

Creating an instance of a Person is as follows:

    var bob = new Person('Bob');
    bob.sayName(); // returns "My name is Bob"

Defining a Superhero is very similar to defining a Person. The difference being that a Superhero will not tell you his true identity. So we define an *alias* property on the Superhero and when a Superhero says their name, they will instead say their alias:

    function Superhero(name, alias) {
        // call Parent constructor so that Superheros also have names like a regular Person
        Superhero.superConstructor.call(this, name);
        this.alias = alias;
    }

    // Superhero inherits the features of a Person
    lib.inherit(Superhero, Person);

    // Override sayName method so that Superheros keep their true identity a secret
    Superhero.prototype.sayName = function() {
        return "Can't tell you that but my alias is: " + this.alias;
    }

Creating an instance of a Superhero is as follows:

    var batman = new Superhero("Bruce Wayne", "Batman");
    batman.sayName(); // returns "Can't tell you that but my alias is Batman"

In order to show another important aspect of the *inherit* function let's create another scenario for our Superhero. The scenario entails a situation where the Superhero is forced to back down in order to save humanity, and in doing so must reveal their name to their enemy. We can define a method on the Superhero called *backDownAndRevealTrueIdentity*.

    Superhero.prototype.backDownAndRevealTrueIdentity = function() {
        return Superhero.superConstructor.prototype.sayName();
    };

Using the previously defined `batman` instance above we run the scenario:

    batman.backDownAndRevealTrueIdentity(); // returns "My name is Bruce Wayne"

The takeaway from this scenario is that you can call and reuse the Parent methods.

## Citations

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://javascript.crockford.com/inheritance.html">Douglas Crockford on inheritance</a></dd>
    <dt class="citation" id="ref1">[1]</dt>
        <dd><a href="http://www.github.com/rassie/jessie/">Jessie Javascript library</a></dd>
    <dt class="citation" id="ref2">[2]</dt>
        <dd><a href="/articles/javascript-namespacing/">Javascript namespacing</a></dd>

</dl>