---
title: "Scoping and Closures"
chapter: 4
lesson: 2
type: "lesson"
---

Like JavaScript, Dart is lexically scoped. Every new code block establishes a new scope. But, JS's lexical scoping isn't exactly 'right'. Scoping in Dart is like using `let` instead of var in JavaScript. 

I've never seen lexical scoping explained this way, but it makes sense: The scoping is established simply by the layout of the code.

```dart
void nestedPrint() {
  var x = 'Hello, ';
  
  void innerPrint() {
    var y = 'World';
    
    void finallyPrint() {
      // this is a-okay
      print (x + y);
    }
  }
  
  // y is null here.
  print(x + y);
}

// => 'Hello World'
```

Another example taken from [DartByExample](http://jpryan.me/dartbyexample/examples/lexical_scope/), that makes the problem with JS scoping clear:

```dart
main() {
  var functions = [];

  for (var i = 0; i < 3; i++) {
    functions.add(() => i);
  }

  functions.forEach((fn) => print(fn()));

}

/* =>
1
2
3
*/
```

The equivilent in JS would log `3 3 3` to the console. In JS, `var i` is the same variable being rewritten over and over. By the time the call back runs, `i` is equal to 3, and every function points to that `i`. In Dart (and using `let`  in JavaScript), each `i` lives in its own scope, and hasn't bled out into the window.


