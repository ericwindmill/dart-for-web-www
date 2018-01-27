---
title: "Booleans"
lesson: 3
chapter: 1
type: "lesson"
context: "language-tour"
---

Boolean values are arguably not like Javascript. In JS, there are multiple values that can evaluate to `true`. In fact, most values are considered 'truthy'.

The 'falsy' values in JS are 0, false, null, '', undefinied, and NaN. Everything else is 'truthy'.

In Dart, true evaluates to true. **Everything** else is false.

```dart
void main() {
  print(true == true); // true
  print('hello' == true); // false
  print(50 == true); // false
  print(50 == false); // false
  print(50 == 50); //true
}
```