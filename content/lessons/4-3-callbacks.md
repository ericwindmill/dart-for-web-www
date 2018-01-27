---
title: "Higher Order Functions"
chapter: 4
lesson: 3
type: "lesson"
context: "language-tour"
---

Functions in Dart are classes, just like everything else. This means that, like in JS, Ruby and some other languages, you can pass functions around as variables, use anonymous functions, return functions, etc.

Here's a function being used as an argument.

 ```dart 
 List animals = ['zebra', 'dog', 'salmon'];
 void printAnimals(element) {
    print(element);
 } 
 
 // forEach expects a function which excpects an element of an Iterable
 animals.forEach(printElement)
 
 /* =>
 `zebra`
 `dog`
 `samlon`
 */
 ```
 
 That's the same funcationality as writing the function in the forEach argument directly. That's called an anonymous function, and it's acceptable as well:
 
 
 ```dart
 List fruit = ['apple', 'kiwi', 'blackberry'];

fruit.forEach((element) {
  print(element);
})

/* =>
'apple'
'kiwi'
'blackberry'
*/
```

Finally, functions can be assigned to variables and called later:

```dart
var doubler = (num) => num * 2;
doubler(4); 

// => 8
```

