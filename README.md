# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @oluwasegun-idowu/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: description => returns the first element of an array. [1,2,3,4] will always return [1]
* `middle(...)`: description => returns the middle part of an array. [1,2,3,4] will return [3,4]
* `tail(...)`: description => returns the last part of an array. [1,2,3,4,5,6] will return [2,3,4,5,6]
* `eqArrays(...)`: description => compares two arrays to each other and return a boolean
* `eqObjects(...)`: description => compares two objects and return a boolean
* `takeUntil(...)`: description => returns the number of times it takes to get the first instance of an item(value)
* `without(...)`: description => returns the elements of an array that is not in the other array
* `findKey(...)`: description => returns the result of the first occurence of an item in an object
* `FindKeyByValue(...)`: description => returns an item if it can be found in an object
* `countOnly(...)`: description => counts the number of times elements of an item are found in the item
* `assertEqual(...)`: description => check whether an expected value is equal to the actual value. used for assertion
* `assertArraysEqual(...)`: description => check whether two arrays are equal
* `assertObjectsEqual(...)`: description => chwecks whether two objects are equal
* `countLetters(...)`: description => count number of times letters in a string occurs
