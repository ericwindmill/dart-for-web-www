---
title: "Hello World"
lesson: 2
chapter: 1
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "01/01/2017"
category: "tech"
type: "lesson"
tags:
    - programming
    - stuff
    - other
---

> For now, I suggest opening [Dartpad](https://dartpad.dartlang.org/) to code along.


When Dart is ready to run, it looks for a `main` function to execute.

If you type this into Dartpad, you'll get no output.
```dart
    void sayHello() {
      print('hello world!');
    }
```


This, however, works:
```dart
    void sayHello() {
      print('hello world!');
    }
    
    void main() {
      sayHello();
    }
    
    // => 'hello world!'
```