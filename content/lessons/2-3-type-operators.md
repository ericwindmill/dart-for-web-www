---
title: "Type Operators"
chapter: 2
lesson: 3
type: "lesson"
context: "language-tour"
---

There are three operators that let you check for types and also assign types.

* `is`
* `is!`
* `as`


`is` and `is!` are for checking for types. 

```dart
int x = 9;
if (x is int) {
  // code here will run
}

if (x is! int) {
  // code here won't run
}
``` 

`as` is for 'typecasting'. Javascript doesn't have types, so it doesn't have typecasting. 

Here are the two ways to 

```dart
class Employee {
  // ... 
}

class Engineer {
  //...
}

class Designer {
  //...
}

void newHire() {
  // This var will have all the properties of Employee
  // But it's type will be an Engineer.
  var emp345 = new Employee() as Engineer;
  
  // This won't run unless emp345 is a Designer
  (emp345 as Designer).team = 'Web Client';
}
```
