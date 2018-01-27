---
title: "Maps"
lesson: 6
chapter: 1
type: "lesson"
context: "language-tour"
---

`Maps` in Dart are the same as JavaScript:

There are two ways to create maps: 

```dart
Map fruit = new Map();
fruit['appale'] = 'red';
```

Or, map literals:

```dart 
Map fruit = {
    'apple' : 'red',
    'banana' : 'yellow'
}
```

Maps can be strongly typed, which is super helpful: 

```dart
Map<String, String> fruit = new Map();
Map['apple'] = 12; // throws error
```

Maps have quite a bit of built in methods as well:

#### Properties

`keys`
`values`
`length`
`isEmpty` & `isNotEmpty`

#### Methods

`forEach`
`addAll`
`clear` 

Check out the docs for all the properties and methods:
[Map Class](https://api.dartlang.org/stable/1.24.3/dart-core/Map-class.html)