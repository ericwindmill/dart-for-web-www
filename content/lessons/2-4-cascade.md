---
title: "Cascade Operator"
chapter: 2
lesson: 4
type: "lesson"
---

The cascade operator lets you perform a series of operations on the same object. It's basically syntactic sugar:

```dart
class Human {
  final firstName;
  final lastName;
  final age;
  final job;
  final home;
}

class Job {
  final title;
  final company;
}

Person eric = new Person()
    ..firstNAme = 'Eric'
    ..lastName = 'Windmill'
    ..age = 27
    ..job = new Job()
      ..title = 'Engineer'
      ..company = 'InternetAppCompany'
    ..home = 'Louisville, KY';
```

The cascade operator will be heavily used when playing with the DOM.


