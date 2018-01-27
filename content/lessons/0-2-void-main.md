---
title: "Main"
lesson: 2
chapter: 0
type: "lesson"
context: "language-tour"
---

> Open up [Dartpad](https://dartpad.dartlang.org/) to code along!

When Dart is ready to run, it looks for a `main` function to execute. Every Dart program *must* start with the `main` function.

```dart
void main() {
// ... execute program ...
}
```

You may also have noticed the keyword `void`. One of the biggest hurdles of switching from plain ol' JavaScript to Dart is that Dart is typed. 

When writing a function, you begin by specifying the return type of the function. Sometimes, especially in object oriented programming, we don't want functions to return anything. Their purpose is their *side effect*. In Dart, these functions return `void`.

A return type of `int`:

```dart
int doubler(num) {
  return num * 2; 
}
```

All functions need return types, but you can set the return type to `dynamic` if you don't want to set types.