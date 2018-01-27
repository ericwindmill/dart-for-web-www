---
title: "Numbers"
lesson: 4
chapter: 1
type: "lesson"
context: "language-tour"
---

There are two number classes in Dart: `Integers` and `doubles`. 

#### Int

`int` is the class name for Integer. 

```dart
int age = 35;
```

#### Doubles

Doubles are used for precision.

```dart
double pi = 3.14;
```

Dart automatically converts ints to doubles when necessary:

```dart
void main() {
  int x = 3; 
  double y = 4.4;
  print(x * y);
  // =>  13.200000000000001
}
```
```dart
void main() {
  int x = 3;
  int y = 2;
  print(x / y);
  // => 1.5
}
```

Sometimes, you might want integer math:
```dart
print(15 ~/ 2);
// => 7
```

The `num` class (super of both int and double), has a lot of familiar methods: `ceil`, `floor`, `abs`.

