---
title: "Exceptions"
chapter: 6
lesson: 1
type: "lesson"
---

Handling errors is fun in any language. It's simple in Dart. 

To signal an error or exception, use `throw`.

```dart
  driveCar() {
    if (tankEmpty) {
      throw new StateError("there's no gas!");
    }
  }
```

You can throw any non-null object as an exception! But, Dart gives us a bunch of built in objects like 'StateError'. You can also extend Exception class to make specific exceptions.

### Try / Catch

The try block allows you to handle exceptions more gracefully. You can tackle forseeable problems before they occrur.
```dart
try {
  car.start();
  car.drive();
} catch(exception, stackTrace) {
  print(exception);
  print(stackTrace);
}
```
This is pretty standard stuff here. Like JS, if the exception is thrown on line 2 ( `car.start()` ), then `drive()` is never called.


### On

In a `try` block, you can use `on` to specify the type of exception you're trying to catch. 

```dart
try {
  car.start(key);
  car.drive();
} on StateError catch(exception) {
  car.retryStart();
} on ArgumentError catch(exception) {
  print('wrong key!')
} catch(exception) {
  print(exception);
}
```

### Finally
The finally clause makes sure that no matter what, something runs at the end.

```dart
try {
  car.start(key);
  car.drive();
  // ...
} catch(exception) {
  // ...
} finally {
  car.exit();
}
```

Whether the car starts or not, you're eventually going to get out of the car and get on with your day. 
