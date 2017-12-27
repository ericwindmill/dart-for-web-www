---
title: "Basic Operators"
lesson: 1
chapter: 2
type: "lesson"
---

Basic operators in Dart are similar to JavaScript. 

The notable differences are **Int Division**, the **prefix incremement and decrememnt**, and the **compound assignments**.

### Arithmitic

| Operater | JS Equivelent |Description |
|----------|---------------|------------|
| +        | +             | Addition or Concatenation |
| -        | -             | Subtraction |
| *        | *             | Multiplication |
| /        | /             | Division |
| ~/       | n/a           | Integer Division
| %        | %             | Modulo |
| var++    | var++        | Increment |
| var--    | var--        | Decrement |
| ++var     | n/a         | Prefix Increment
| --var     | n/a          | Prefix Decrememnt

### Logic and Equality

| Operater | JS Equivelent | Description |
|----------|---------------|------------|
| !        | !             | Not operator |
| ==        | ==           | equal    |
| !=       | !=            | Not equal |
| <        | <             | less than    |
| <=       | <=            | less than or equal to |
| >        | >              | greater than    |
| >=       | >=            | greater than or equal to |

### Comments

| Operater | JS Equivelent | Description |
|----------|---------------|------------|
| //       | //            | comment    |

### Compound Assignment

The `=` is the assignment operator, just like every other language. This can be combined with many operators for some syntatic sugar. 

You can find something like this in JavaScript:

```dart
var x =1;
void main() {
  x += 1;
  print(x);
}
// => 2
```

Dart gives us quite a few other compound assignments though:


| Operater | Description |
|----------|---------------|
|  +=    |   addition and assign    |
|  -=    |   subtraction and assign    |
|  /=    |   division and assign    |
|  ~/=    |   int division and assign    |
|  %=    |   modulo and assign    |
|  *=    |   multiplication and assign    |
|  ^=    |   bitwise and assign    |
|  &=    |   bitwise AND and assign    |