---
title: "Aside: OOP vs JavaScript"
chapter: 5
lesson: 1
type: "lesson"
context: "language-tour"
---

JavaScript *isn't* an Object Oriented Language, despite the fact that ES2015 added a 'Class' syntax. JavaScript actually uses prototypal inheritance, and Es2015 classes are simply wrappers over JS prototypes. With that in mind, OOP can be a bit different then what you may be used to.

**If you're familiar with Object Oriented Programming, feel free to skip this. This is an intro to classes that's language agnostic for absolute beginners.**

Classes are the building blocks of a big project. When your application grows, organizing your code into classes is necessary. They're basically blocks of code that represent an 'object' in the real world. (Whether it be abstract or physical). You can then re-use the classes to make your code cleaner, scalable and modular.

The easiest way to think about Classes is as blueprints. They don't do anything on their own, but they provide a way to build objects which will be used later. Think about a car factory. First you layout exactly how to contruct a bunch of different cars, then you can reuse those plans to make many cars.

```dart
class Car {
  String make = 'Volkswagen';
  int gasoline = 100;
  // ...

  driveCar (key) {
    gasoline -= 10;
  }
}
```

This is helpful because now every time you need a car, you can just type `var myCar = new Car ()`, and it automatically has those features.

And objects can inherit from other classes. In our VW factory, Jettas and GTI's will have similar features, but also some unique features.

```dart
class Jetta extends Car {
  String color = 'black';
  int topSpeed = 100;
}

class GTI extends Car {
    int topSpeed = 120;
    String bodyType = 'hatchback';
}
```

Now, you can do this:

```dart

var newJetta = new Jetta();
print(newJetta.make);
print(newJetta.topSpeed);

/* =>
Volkswagen
100
*/

var newGTI - new GTI();
print(newGTI.make);
print(newGTI.topSpeed);

/* =>
Volkswagen
120
*/
```


This is Dart code, but this is the idea of OOP in all languages. A blueprint is used to make reusable code, and the classes work in a hierarchy.

This is a very basic explanation.
