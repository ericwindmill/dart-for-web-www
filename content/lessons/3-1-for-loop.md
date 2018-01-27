---
title: "For Loops"
chapter: 3
lesson: 1
type: "lesson"
context: "language-tour"
---

For loops are the same as in JavaScript:

```dart
for (var i = 0; i < 10; i++) {
  print(i);
}

/* =>  
0
1
2
3
...
*/
```

There are also for-in loops, which can be used by Maps and Lists and anyhting else that implements `Iterable`
```dart
List fruitList = ['apple', 'orange', 'banana'];
for (var fruit in fruitList) {
  print(fruit);
}

/* =>
apple
orange
banana
 */
```

