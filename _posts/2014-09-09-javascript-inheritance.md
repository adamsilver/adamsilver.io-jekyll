---
layout: post
title:  "Javascript inheritance"
date:   2014-09-09 09:00:59
categories: js
description: Developers often complicate Javascript inheritance. Here is a powerful, yet simple technique for doing it.
---

ECMAScript doesn't have an *inherit* function. But you can mimic the functionality yourself if you need to.

Here's a ready made inherit function you can use in your project:

	/**** The namespace ****/
    var lib = {};

    /**** The cloneObject function ****/

    // For browsers that have Object.create
    if(Object.create) {
        lib.cloneObject = function(o) {
            return Object.create(o);
        };
    } else {
        lib.cloneObject = (function() {
            var Fn = function() {};

            return function(o) {
                Fn.prototype = o;
                return new Fn();
            };
        })();
    }

	/**** The inherit function which uses cloneObject ****/

    lib.inherit = function(Sub, Super) {
        // Clone the parent's prototype object and assign to child's prototype object
        Sub.prototype = lib.cloneObject(Super.prototype);

        // Assign reference to super constructor onto the child constructor
        Sub.superConstructor = Super;

        // Assign child as the child constructor
        Sub.prototype.constructor = Sub;
    };

As an example you might want a superhero to inherit the features of a regular person. A person constructor might look like this:

    function Person(name) {
        this.name = name;
    }

    Person.prototype.sayName = function() {
        return "My name is:" + this.name;
    };

    var bob = new Person('Bob');
    bob.sayName(); // "My name is Bob"

A superhero constructor is has some differences. First the superhero will not reveal their true identity. Instead they will tell you their alias. The code for this is as follows:

    function Superhero(name, alias) {
        // call parent constructor so that Superheros have a name
        Superhero.superConstructor.call(this, name);
        this.alias = alias;
    }

    // Inherit the features of a Person
    lib.inherit(Superhero, Person);

    // Override method so that Superheros only tell you their alias
    Superhero.prototype.sayName = function() {
        return "Can't tell you that but my alias is: " + this.alias;
    }

    // Call parent method if you need to
    Superhero.prototype.revealIdentity = function() {
        return Superhero.superConstructor.prototype.sayName();
    };

    var batman = new Superhero("Bruce Wayne", "Batman");
    batman.sayName(); // "Can't tell you that but my alias is Batman"
    batman.revealIdentity(); // "My name is Bruce Wayne"