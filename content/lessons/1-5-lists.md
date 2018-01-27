---
title: "Lists"
lesson: 5
chapter: 1
type: "lesson"
context: "language-tour"
---

Lists are JavaScript's Arrays.

This is the literally syntax, which creates a *dynamic* list, which just means its the same as JavaScript arrays. You can add to it, look-up variables, and remove variables freely. 

```dart
List names = ['Albert', 'Alyssa', 'Andrew'];
```

You can also establish fixed-length Lists, which are optimized for performance *if you know how many values it should have*. 

```dart
List names = new List(3);
// => [ null, null, null]

names[1] = 'Alyssa';

// => [ null, Alyssa, null ]
```

Looking up values in a List uses bracket notation:
```dart
print(names[1]);
// => 'Alyssa'
```

Lists can be strongly typed:

```dart
List names<String> = [];
List.add('Albert');
List.add(12); // throws error
```

List's extend the `iterable` class, which gives it a lot of nice methods we know from JavaScript and other languages:

#### Properties:
`length`
`reversed`
`first`
`isEmpty`
`isNotEmpty`
`last`

#### Methods:
`add`
`addAll`
`clear`
`indexOf`
`insert`
`remove`
`shuffle`
`sort`
`any`
`contains`
`every`
`firstWhere`
`forEach`
`join`
`map`
`reduce`
`toSet`
`toString`

There are a lot of methods, and variations of many...
[Dart Lang List class API](https://api.dartlang.org/stable/1.24.2/dart-core/List-class.html)
