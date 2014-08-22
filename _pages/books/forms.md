---
layout: default
title: Forms
id: books
permalink: /books/forms/
---

<style>
    ol {
        counter-reset: section;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    ol li {
        counter-increment: section;
        margin-left: 10px;
        margin-bottom: 10px;
    }

    ol li:before {
        content: counters(section, ".") ". ";
    }

    ol li ol {
        padding-top: 10px;
        margin-bottom: 30px;
    }
    ol li li {
        margin-left: 30px;
    }
</style>

# Forms

Blah lorem ipsum blah

1. [Controls](/)
    1. Input text
    1. Input hidden
    1. Input password
    1. Input checkbox
    1. Input radio
    1. Input submit
    1. Input image
    1. Button
    1. Textarea
    1. Select
2. [New controls](/)
    1. Input number
    1. Input range
    1. Input email
    1. Etc.
3. [Responsive](/)
    1. Labels above forms
4. [Native and mobile behaviour](/)
5. [Product lists](/)
    1. A common problem
    1. checkbox
    1. One add all to basket
6. Multi page forms, wizards, dependent form controls
7. Scripting and validation
8. Enhancement?
9. Misc
    1. Placeholder
