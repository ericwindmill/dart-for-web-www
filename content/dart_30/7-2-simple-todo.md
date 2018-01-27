---
title: "Simple Todo"
chapter: 0
lesson: 2
type: "lesson"
context: "dart30"
---

```
cd 02/start
pub serve
```

If you haven't checked out the end product, this is what you're building:

![Lesson](http://res.cloudinary.com/ericwindmill/image/upload/v1517077535/Dart%20for%20Web%20Developers/02-finish-gif.gif)

This is most simply a lesson in DOM manipulation. At the beginning, you'll start out with all the HTML and CSS you need, so you can focus on Dart.

In the HTML you'll notice that we already have an `<input>`, `<button>` and <`ul`>. Your job is to decide what steps we need to take to make those three elements work together to add todos to that `<ul>`.

Forget dart for a second, because the steps are exactly the same as in JavaScript. What are those steps:

1. Wire up button to listen for a click
2. On click, grab the value from the input
3. create a new `<li>` with innerText equivalent to that value
4. Append new `<li>` to the `<ul>`

And that's all there is to it.

By the way, the title of this lesson could be: 'Dart Dom Manipulation is Very Similar to JavaScript'.

So let's start.

**NB:** I've done this for you in these lessons, but you'll always need to import `dart:html` library! Dart is made to be useful everywhere (although it has a heavy focus on the client side), so you'll often have to cherry pick the functionality you need.

### Step 1. Create Element References

In your `main.dart` file, you'll want to create variables to represent and hook into all your current relevant HTML elements.

```dart
void main() {
  var todo = querySelector('input');
  var submit = querySelector('button');
  var todoList = querySelector('#todos');

  // more code ...
 }
```

Two important notes here:

1. QuerySelectors are exactly the same as JavaScript.
2. The `main()` function runs automatically when a Dart program is run. So you no longer have to wrap your JavaScript code in a jQuery `$()` and then have a function that runs on `Document.ready`.

### Step 2. Create Event Listener

In that same function, create your event listener:

```dart
void main() {
  var todo = querySelector('input');
  var submit = querySelector('button');
  var todoList = querySelector('#todos');

  submit.onClick.listen((e) => {
    // callback here
  });
 }
```

Again, the code looks very similar. One thing you'll learn about Dart manipulation is that
You could just go ahead and write your logic right there in the callback. For the purpose of showing off Dart/JS differences, I'll create a new function in the next step.

### Step 3. Create Your Callback

```dart
void main() {
  //.. querySelectors
  submit.onClick.listen((e) => handleSubmit(e, todoList, todo));
}

void handleSubmit(MouseEvent e, Element todoList, InputElement todo) {
  // ... logic
}
```

This hopefully shows a big fundamental difference between JavaScript and Dart: Static types. If this looks completely insane to you, checkout this lesson about Types in Dart.

This was my first big hurdle with Dart. Types are easy to understand, and incredibly useful, but it can take a while to learn all the Types. With that in mind, I'd recommend you don't try to learn any, because you'll learn by using them. There's no need to sit around and try to memorize all the different `Event` types, for example.

**NB**: I can't recommend Intellij IDE, WebStorm IDE, or VS Code Text Editor enough. All three have amazing plugins that will recommend Types for you.

### Step 4. Callback Logic

Finally, let's fill in that Callback, which is the only piece of logic we need to write to make this work:

```dart
// the return type is 'void' because it doesn't return anything
// All event listeners in dart provide an 'event', much like Javascript
void handleSubmit(MouseEvent e, Element todoList, InputElement todo) {
  // grab the value out of the todo input
  var newTodoValue = todo.value;
  // Create a new LIElement
  var newTodo = new LIElement();
  // element.text sets the InnerText of an element
  newTodo.text = newTodoValue;
  // call append on the parent, and pass it the child you want to append
  todoList.append(newTodo);
  // reset the value for a good user experience
  todo.value = "";
}
```

That's it. As you can see, it's basically JavaScript with types.
