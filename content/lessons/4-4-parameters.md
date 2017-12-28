---
title: "Parameters"
chapter: 4
lesson: 4
type: "lesson"
---

Parameters are different in Dart.

First and most importantly, you can't just pass in an arbitrary number of arguments into a function. JS compiler won't throw an error if there are more or less parameters passed to a function than it expects. This seems insane to me now. 

When writing a function, it's recommended that you type your parameters:

```dart
int doubler(int x) {
  return x * 2;
}

void main() {
  doubler(2);
}
```

You can also make optional named parameters by wrapping them in `{ }`. 

```dart
int doubler({int number}) {
  if (number) {
    return number * 2;
  }
}

// Call this by specifying your argument: 
doubler(number: 2);
// returns 4;
```

There's also optional positional parameters. I recommend using named parameters where possible, but this can be useful.

The args wrapped in `[ ]` are optional and positional: 

```dart
int doMath(int x, int y, [inx z]) {
  if (z != null) {
    return x + y * z;
  } else {
    return x + y; 
  }
}

// Both of these are fine. 
// call this without a name:
doMath(5, 3, 1); 
// Or, without a third param:
doMath(5, 3); 
```

Finally, Dart supports default params: 

```dart
int doMath(int x, int y, {int z = 3}) {
  return x + y * z;
}

doMath(3, 5, z = 2); // returns 16;
doMath(3, 5); // returns 24;
```

