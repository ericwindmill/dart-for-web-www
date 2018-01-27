---
title: "If / Else"
chapter: 3
lesson: 3
type: "lesson"
context: "language-tour"
---

`If / Else` logic is exactly the same:

```dart
var x = 5;

if (x < 10) {
  print('x is less than 10');
} else {
  print ('x is not less than 10')
}
```

You can also use the `else if`:

```dart
int x = 10;

if (x < 10) {
  print('x is less than 10');
} else if (x == 10) {
  print ('x is exactly 10')
} else {
  print ('x is greater than 10');
}

// => x is exactly 10
```

You can also use logical `or` and `and` anywhere you're evaluating an expression:

```dart
var x = 'bird';
List animals = ['bird', 'dog', 'lion'];
// contains is the JS equivelent of includes
if (x.runtimeType == String && animals.contains(x)) {
  print('this is an animal called $x');
}


// => this is an amimal called bird
``` 