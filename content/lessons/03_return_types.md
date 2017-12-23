---
title: "Return Types"
lesson: 3
chapter: 1
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "01/02/2017"
category: "tech"
type: "lesson"
tags:
    - dart
    - stuff
    - other
---

> For now, I suggest opening [Dartpad](https://dartpad.dartlang.org/) to code along.

One of the biggest hurdles of switching from plain ol' JavaScript to Dart is that Dart is *optionally* typed. Technically, you don't have to use types, but it's a useful language feature.

We've already seen an example of using types in the previous lesson.

When writing a function, you begin by specifying the return type of the function. Typing lets  the code ensure that your moving data around correctly, so your brain doesn't have to keep track of it.

Sometimes, especially in OOP, functions don't return anything, and their purpose is their *side effect*. In Dart, these functions return `void`. 

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