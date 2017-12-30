---
title: "Basic Classes"
chapter: 5
lesson: 2
type: "lesson"
---

Dart is a true Object Oriented language. Everything is a class. If you've worked with an object oriented language (Java, Python, Ruby, etc) before, most of this will feel exactly as it should. 

Dart is *single-inheritance*. Each class has at most one super class (but can have zero).

Defining a simple class: 

```dart
class Person {
  String name;
  int age;
}
``` 

'name' and 'age' are called fields in Dart. Field's values must be compile-time constant (`consts`). 

```dart
class NewbornBaby {
  String name = 'Eric'; // okay
  Date birthday = new Date(); // ERROR!
}
```

Getters and setters are implicitly created for all non-final fields on a class.

```dart
class Person {
    String name = 'Eric';
    // implicity created:
    String get name() = this.name; 
    void set name(String value) => this.name = value;
}

// If you aren't familiar with OOP, this gives you the ability to do this: 
Person eric = new Person();
eric.name = 'eric'; // set name field
print(eric.name); // get name field
```






