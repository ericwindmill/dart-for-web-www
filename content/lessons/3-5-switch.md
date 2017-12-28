---
title: "Switch"
chapter: 3
lesson: 5
type: "lesson"
---

Use `switch` statements when your conditionals are more complicated. They're just like JavaScript as well.

```dart
var animal = 'zebra';

switch (animal) {
  case 'lion':
    print('King of all Animals');
    break;
  case 'Worthog':
    print("Animal kingdom's jester");
    break;
  case 'Zebra':
     print("Heyena food");
     break;
 default:
   print('Not a safari animal');
   break;
}
```

Each `case` in a `switch` statements should end with `break` or a `return` statement.

This is feature, not a bug:

This works, but its ugly and hard to read:
```dart
void main() {
  void evenOrOdd() {
    int myNum = 2;

    if (myNum == 2 || myNum == 4 || myNum == 6 || myNum == 8 || myNum == 10) {
      print('Even!');
    } else if (myNum == 1 || myNum == 3 || myNum == 5 || myNum == 7 ||  myNum == 9) {
      print('Odd!');
    } else {
      print('pick a new number!');
    }
  }
}
```

This is much better:
```dart
void main() {
  void evenOrOdd() {
    myNum = 6;
    switch (myNum) {
      case 2:
      case 4:
      case 6:
      case 8:
      case 10:
        print('Even!');
        break;
      case 1:
      case 3:
      case 5:
      case 7:
      case 9:
        print ('Odd!');
        break;
      default:
        print ('choose a different number!');
    }
  }
}
```

This is a contrived example, but you can see why making the `break` statement necessary is useful. The `switch` statement will execute each line of the block **until** a break or return tells it break out the block.

