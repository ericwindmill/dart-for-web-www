---
title: "Null-Aware Operators"
lesson: 2
chapter: 2
type: "lesson"
---

Null aware operators are super handy. In English, you're telling your code to 'Do this unless the variable is null'; 

There are three null-aware operators in Dart.

## ??

```dart
// assign newValue to x, unless newValue is null, then assign it to 1;
int x = newValue ?? 1;
```


## ??=

The second operator is kind of the opposite. In a way, it accomplishes a very similar problem.

```dart
// assign newValue to x, but only if x is currently null. Otherwise, ignore.
var x; 
x ??= newValue;

// this is literally just syntactic sugar for:
x = x ?? newValue;
```

So in both cases, we're protecting ourselves against null values.

## ?.

This last one is pretty handy. It's used to call a method or getter only if the expression you're calling it on isn't null.

```dart
// if parent is null, don't even try to call method, just return null.
parent?.method();

// these can be chained:
// if parent is null, return, then check child. is it null? finally call the getter.
parent?.child?.getter;
```
