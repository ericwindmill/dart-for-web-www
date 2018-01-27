---
title: "Mixins"
chapter: 5
lesson: 4
type: "lesson"
context: "language-tour"
---

Mixins are another core idea in many OOP languages. Essentially, Mixins are used to to add members to classes without establishing a new class.

For example, let's say you have a Fruit class, some fruits have thick outer skins or shells that must be cut before you can eat them. Other don't. You wouldn't want your apples and grapes to have a function called `removeShell()`, because there is no shell. That should be reserved for Watermelons and Bananas.

``` dart
class Fruit {
  bool tasty = true;

  eatFruit () {
    // ... eat the fruit
  }
}

class Shell {
  removeShell() {
    // ... remove the peel or shell or whatever
  }
}

// no shell...
class Apple extends Fruit {
 // ... apple stuff 
}

// shell... 
class Watermelon extents Fruit with Shell {
    // ... watermelon stuff
}

void main() {
  var tastyTreat = new Watermelon();
  print(tastyTreat.removeShell());
}
```