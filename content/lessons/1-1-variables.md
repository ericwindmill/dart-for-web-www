---
title: "Variables and Consts"
lesson: 1
chapter: 1
type: "lesson"
context: "language-tour"
---

Variables work about like they do in Javascript: 

```dart
// establishes  a variable in memory called a.
var a;

// assigns the value 1 to a.
a = 1;

// all in one step:
var a = 1;
```

There's one difference for those of you who don't use 'strict mode' in JavaScript.

In JavaScript, manipulating a variable that hasn't been declared *doesn't throw an error*, it creates that variable in the global scope. 

Dart does what JS 'strict mode' does, and what you'd expect.
 
```dart
// beginning of code
x = 2;
// => throws error
```

All uninitialized variables are are initially `null` (opposed to `undefined` in JavaScript).

```dart
var a;
if (a == null) {
  print('it's null');
}

// => it's null
```

### Variable Types

Dart is *optionally* typed. If you establish variables with `var`, they work just like in JS, Ruby or any non-typed language. 

```dart
    // acceptable
    void main() {
      var x = 1;
      x = 'Dart';
      print(x);
    }
```

Typing your code is a good feature and a best practice, though. It prevents many mistakes, and it helps with language speed.

When establishing a variable, rather than using the keyword `var` (or in ES6 `const` and `let`), you use the type of the variable to declare it:

```dart
    void main() {
      int x = 2;
      print(x);
    }
```

If you then try to redeclare  x as a String, Dart complains.

```dart
    // throws an error when trying to re-assign x.
    void main() {
      int x = 2;
      x = 'Dart';
      print(x);
    }
```

### Static, Final, Const

These three variable 'types' aren't really types, but modifiers for variables.

* `final` variables are variables that once assigned, can never be reassigned. There are used as properties on classes.
* `static` variables are 'member' variables. They are properties on the class itself, rather than instances of the class.
* `const` objects are deeply immutable. i.e. A Map and *all it's values* are immutable. Also, a constant's entire value must be established at compile time, rather than run-time. 


The differences between `final` and `const` are subtle.





### Fundamental Types in Dart

| Type         |Description |
| -------------|------------ |
| int          | whole number |
| double       | floating-point number |
| num          | int or double |
| bool         | Boolean |
| String       | string of 0 or more chars |
| List         | List of values (like array) |
| Map          | Map of key value-pairs |
| dynamic / var     | any type (detault)|

There are a few more that won't be covered here. 

Types are the biggest difference between JS and Dart, but types are super helpful. This code now 4 points of failure that prevent developer mistakes and bugs. *Spend less time debugging* 🤠.

```dart
    String doubleAndTransform(int num) {
      return (num * 2).toString();
    }
    
    void main() {
      String returnVal = doubleAndTransform(5);
      print(returnVal);
    }
```
