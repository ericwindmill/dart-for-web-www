---
title: "Ternary"
chapter: 3
lesson: 4
type: "lesson"
---

Dart uses the exact `ternary` syntax as javascript. Very useful when in modern, component-based apps that conditionally render elements. I get a ton of use out of this in Flutter.

```dart 
bool bullseye = true
var gameOver = bullseye ? 'Game over, you win!' : 'throw again'
```

```dart
var formInput = form.isEditable 
  ? return (/* DOM Input Element */)
  : return (/* Disabled Input Element*/) 
```