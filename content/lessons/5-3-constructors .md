---
title: "Class Constructors"
chapter: 5
lesson: 3
type: "lesson"
context: "language-tour"
---

Defining basic class constructors is easy in Dart. You only need to define the properties that it expects from outside itself, and then call the name of the class like a function.

```dart
class Employee {
  // Define the property. 
  final String name;
  
  // Define the constructor
  Employee(this.name);
}
```

This allows you to create an *instance* of the class like this:


```dart
var Engineer = new Employee('Eric');
``` 

Like a function, trying to create a new `Employee` without passing it what it expects in it's constructor will make Dart mad. 

A more robust example:

```dart
class Employee {
  final String name;
  final String department;
  final int salary;
  
  // Salary is 5, unless you explicity pass in a different int.
  Employee(this.name, this.department, {this.salary = 5});
  
  // define methods and stuff on this class
}

var Engineer = new Employee('Eric', 'engineering', 999999999999999); 
```

### Named Constructors

Dart allows for multiple constructors, which would be named. 


```dart
class Employee {
  final String name;
  final int salary;
  
  Employee.chef(this.name, {this.salary = 12})
  Employee.cook(this.name, {this.salary = 10})
}
```

Create instances of employees like this:

```dart
var newCook = new Employee.cook('Eric');
```


