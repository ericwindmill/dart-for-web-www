---
title: "Simple Todo 2"
chapter: 0
lesson: 05
type: "lesson"
context: "dart30"
---

```
cd 05/start
pub get
pub serve
```

It's time to take that extremely simple todo list and refactor it into a slightly more complex but still simple todo list. Now, we'll be able to delete todos when we're done with them:

![lesson gif](http://res.cloudinary.com/ericwindmill/image/upload/v1517156137/Dart%20for%20Web%20Developers/05-lesson-gif.gif)

Not only this, but we'll refactor our code into a more 'Dart-y' way of doing things.

### The HTML / CSS

The HTML is the same as it was for the earlier Todos lesson. Super simple:

```html
<body>
    <h1>Simple To-dos:</h1>
    <div class="form">
        <input type="text" placeholder="Add to todo list...">
        <button id="submit">Add Todo</button>
    </div>
    <ul id="todos"></ul>
</body>
```

### Step One: The Previous Code

This lesson starts off a bit differently. In your main.dart file, you start out with both the finish code from the previous lesson, as well as some new code that should guide you in the direction of doing this in the OOP fashion.

This post will walk you through using the OOP API. Start by deleting the previous code and uncommenting the second `main` function.

This is what you have now:

```dart
import 'dart:html';
void main() {
  var todoList = new TodoList(querySelector('#todos'));
}

class TodoList {
  addTodo() {}
  deleteTodo() {}
}

class Todo {
  createTodoListItem() {}
}
```

### OOP Aside

This bare minimum API has an important lesson in OOP baked in.

It's important to decide which classes will carry out which actions in OOP. For example, should `deleteTodo()` be a function of the List or the Todo itself? First, there isn't really a right answer, it comes down to your preference and reasoning. But there is a more-correct answer in this simple case:

Classes should only be aware of themselves and child classes, not parent classes. A Todo object has no idea of the TodoList. It's only aware of itself.

Therefor, a Todo object isn't aware of _other_ Todos.

Another classic example is Chess. A chess piece knows _what_ move it's allowed to make (i.e. Rook can move straight in any direction), but a parent class (perhaps the Player class) is the class that actually calls `move()`.

In our app, the TodoList is the list that actually calls `delete` when a todo is completed.

Any logic that relies on more than just the class itself should be moved to a parent class.

### Step 2: Todo Class

Another OOP principal that I helps me is starting with the 'smallest' pieces. In chess, I'd build the pieces before the board. Here, the Todos before the Todolist.

Let's think about the functionality that a TodoClass would need:

1. It needs to create the actual DOM html element that will be rendered.
2. In order to do that, it needs to know what the todo text is (i.e. 'Clean room')
3. It needs to be able to remove itself when the todo list tells it to go away.

That's pretty much all I can think of. The Todo is a somewhat 'dumb class' in the sense that it's controlled by greater classes. It doesn't have much logic baked in. That means it'll take in a bunch parameters when it's created. Here's the code you end up with:

```dart
class Todo {
  final String innerText; // The Todo text
  final Function deleteTodo; // The callback to delete the LI from the DOM
  Element listItem; // This is the <li> that we'll create

    // This is a basic constructor. Constructors don't *have* to perform any additional methods.
  Todo(this.innerText, this.deleteTodo);

  // Getters and Setters so that other classes have the ability to reference this Todo.
  // See explanation below.
  Element get li => listItem;
  void set li(Element listItem) => li = listItem;

  // This is the main functionality.
  createTodo() {
    // create the <li> for the DOM
    listItem = new LIElement()
      // using the cascade operator (..) to chain on method calls to our new LIElement
      ..append(new ParagraphElement()..text = innerText) // append a Text node
      ..append(new ButtonElement() // append a button to the LI
        ..text = 'x' // This is just the text that appears on the button
        ..style.background = 'palevioletred' // style
        ..onClick.listen((Event e) { // Add an event listener to the button, which is the delete button.
          deleteTodo(e, this); // on click, call the delete callback
        }));

    return li;
  }
}
```

There's a lot packed in there that we have to at least briefly touch:

#### Aside: Getters and Setters

Getters and Setters are core in OOP, and JS _isn't_ an OOP.

In short, a getter is needed in order for an outside class to access the properties on a class. In a hypothetical TodoList class:

```dart
class TodoList {
  var newTodo = new Todo();

 printTodoStatus() {
   print(newTodo.completed);
 }
}
```

If, in the Todo class, there was a property called completed that **didn't** have a getter, that print statement would fail. A getter exposes properties to the outside. This is a core concept of OOP, not just dart.

Setters allow outside classes to set a property. For example, with a setter on the Todo class for `completed` we could do this:

```dart
class TodoList {
  var newTodo = new Todo();

 updateTodoStatus() {
   newTodo.completed = true;
 }
}
```

Without a setter, trying to reassign that `compeleted` variable from outside the class would fail.

> ##### Resources:
>
> I don't want to spend too much time on syntax, but I encourage you to checkout some of these resources:
>
> [Getters and Setters in Dart](https://www.dartlang.org/resources/dart-tips/dart-tips-ep-10)
>
> [Dart Cascade Operator](https://news.dartlang.org/2012/02/method-cascades-in-dart-posted-by-gilad.html)

### Step 3: Todo List Class

The todo list class, in our case, is responsible for all the logic. What should this class do?

We know from our starting code that I've set it up to handle the creation and deletion of todos.

```dart
class TodoList {
  addTodo() {}
  deleteTodo() {}
}
```

These are the nitty gritty requirements I can think of:

1. It's aware of the DOM list ( a `<ul>` in this case)
2. It's aware of (and controls) the input and submit buttons on the DOM
3. It needs to be aware of the individual todos and have a way to differentiate them from one and other, so that it can know when an individual todo needs to be removed.
4. It needs to know how to create a new Todo class and appended it to the DOM `<ul>`

This is all the logic it needs. If that seems confusing, it'll make sense when we look at the code:

```dart
class TodoList {
  final UListElement list; // this is the list itself, which is passed in from the `main` function.

  ButtonElement submitButton; // we'll create this in this class
  InputElement newTodoInput; // and this

  // constructor
  TodoList(this.list) {
    submitButton = querySelector('#submit'); // grab the submit button from the DOM
    newTodoInput = querySelector('input'); // and the Input
    submitButton.onClick.listen((e) => addTodo()); // when that button that we just grabbed it clicked, we'll want to add a todo to the list.
  }
}
```

This is the basics of the TodoList class. It represents a real `<ul>` on the DOM, and it's aware of the input/button combo that will be used to manipulate the list.

Now, we need to write that addTodo() method so it actually does something.

```dart
class TodoList {
  final UListElement list;
  ButtonElement submitButton;
  InputElement newTodoInput;

  TodoList(this.list) {
    submitButton = querySelector('#submit');
    newTodoInput = querySelector('input');
    submitButton.onClick.listen((e) => addTodo());
  }

    // new
  void addTodo() {
    // This creates the Todo *class*.
    // We pass in the current listLength, which will be used as the LI id.
    // we haven't actually written the deleteTodo method.
    var newTodo = new Todo(newTodoInput.value, deleteTodo, listLength);
    // this creates the actual List Item.
    // If you checkout the Todo Class code, you'll see that the createTodo method returns an actual <li>
    var li = newTodo.createTodo();  
    // so we can just pop that <li> onto the <ul>
    list.append(li);
    // reset the input value because user experience
    newTodoInput.value = "";

  }
}
```

Of course this would actually fail becuase we're attempting to pass deteleTodo into our new Todos, but we haven't written that yet.

To write it, let's consider how the Todo would behave if it did work:

The TodoList handles firing the method, but the Todo object has the eventListener that actually removes the li from the from the list. This is actually by design, although it looks convoluted.

When designing this logic there were two choices:

1. Make the TodoList keep track of Todos using unique ID's, and knowing which Todo to delete using those IDs and query selectors.
2. (What I've done): Passing the callback down the Todo, which has an event listener, so it can tell the List 'Delete me'.

In other words, the method I've gone with requires no tracking. Neither is right or wrong.

Because the Todos have the ability to tell the List they're the onces that need to be deleted, the delete methods just looks like this:

```dart
class TodoList {
  final UListElement list;
  ButtonElement submitButton;
  InputElement newTodoInput;

  TodoList(this.list) {
    submitButton = querySelector('#submit');
    newTodoInput = querySelector('input');
    submitButton.onClick.listen((e) => addTodo());
  }

  void addTodo() {
    var newTodoValue = newTodoInput.value;
    var newTodo = new Todo(newTodoValue, deleteTodo);
    var li = newTodo.createTodo();
    list.append(li);
    newTodoInput.value = "";
  }

    // New
    // This works because it's passed to the Todo, which on click, passes in itself (as 'this').
    // So, todo.li refers to the list item on the Todo.
    // remove is just a method in Dart html that removes an element from the DOM.
    //Additionally, this is why we needed to create a getter.
    // If we didn't have the getter,
    // the TodoList class wouldn't be allowed to access the li created in the Todo class.
  void deleteTodo(Event e, Todo todo) {
    todo.li.remove();
  }
}
```
