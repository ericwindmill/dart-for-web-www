---
title: "Strings"
lesson: 1
chapter: 1
type: "lesson"
---

String (with a capitol 'S') is the String type in Dart.

```dart
// establish a string
String myString = "Hello";

// escape characters:
var quote = "\"Now cracks a noble heart. Good night sweet prince.\" - Horatio";
// => "Now cracks a noble heart. Good night sweet prince." - Horatio
```

You can user variables and concatination: 
``` dart
void main() {
  String name = 'Orld';
  print(name + 'is hungry.');
}
```

Dart also gives us nice string interpolation that's only slightly different than ES2015. 

```dart
//Interoplate variable: 
String greeting = 'Hello, $name';

// Interpolate expression:
String loudGreeting = 'HELLO, ${firstName.toUppercase()}';
```

Print *raw* strings by preceeding the String with `r`

```dart
print(r"$name is hungry")
// => $name is hungry
```

Finally, Dart will automatically concat two adjacent strings.

``` dart
void main() {
  print("Hellow, " "Orld")
}

// -> `Hellow, Orld`
```