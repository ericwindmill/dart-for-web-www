---
title: "Void"
lesson: 3
chapter: 0
type: "lesson"
---

> For now, I suggest opening [Dartpad](https://dartpad.dartlang.org/) to code along.

One of the biggest hurdles of switching from plain ol' JavaScript to Dart is that Dart is *optionally* typed. Technically, you don't have to use types, but it's a useful language feature. 

We've already seen an example of using types in the previous lesson.

When writing a function, you begin by specifying the return type of the function. Typing lets  the code ensure that your moving data around correctly, so your brain doesn't have to keep track of it.

Sometimes, especially in object oriented programming, we don't want functions to return anything. Their purpose is their *side effect*. In Dart, these functions return `void`.
 
```dart
 // the purpose of this function is to log, not to return a value.
 void main() {
   print('Hello world!');
 }
```

A return type of `int`:

```dart
int double(num) {
  return num * 2; 
}
```

All functions need return types, but you can set the return type to `dynamic` if you don't want to set types.