---
title: "Function Definitions"
chapter: 4
lesson: 1
type: "lesson"
---

Functions share a lot of characteristics with functions in JavaScript, but they aren't exactly the same.

You've seen how to define a basic function:
```dart
void printHello() {
  print('hello');
}
```

A few things to note: 

All Dart functions return *something*. If you don't return anything, `return null` is implicitly added to the end of your function.

Types, as of Dart 2.0, are no longer optional: 

```dart
// not okay:
printHello() {
 // code 
}
```

But, you can get around this by using `dynamic`. I recommend only using this if you don't know what the function will return. 

```dart
dynamic printHello() {
  // code
}
```

Dart also has fat-arrow functions (like ES6), but they don't work exactly the same way. You only use these in Dart if the function can be condensed to one line:

```dart
// implicitly returns:
void printHello => print('hello');
```

In JS, the scoping changes with FA functions. Not so in Dart.


