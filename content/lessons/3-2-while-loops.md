---
title: "While / Do While"
chapter: 3
lesson: 2
type: "lesson"
---

There are two kinds of `while` loops in Dart.

The classic `while` loop, in which the condition is executed before the code block: 
```dart
var x = 1;
while (x < 5) {
  print(x);
  x *= 2; 
}

/* =>
1
2
4
8
*/
```

Then there's the `do-while` loop, which is common in many languages. It executes the code block *before* it evaluates the expression.

This is useful if you want the code block to run once **no matter what**.

```dart
var x = 1;

do {
  print (x);
  x += 5; 
} while (x == 2);


// prints x once before it even checks if it's equal to 2:
/* =>
1
*/
```

