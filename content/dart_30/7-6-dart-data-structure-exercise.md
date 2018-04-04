---
title: "List Olympics"
chapter: 0
lesson: 06
type: "lesson"
context: "dart30"
---

```
cd 06/start
pub get
pub serve
```

This lesson will teach you some things about manipulating lists in dart. Lists are basically JS equivelent of Arrays.

This is important. Learning to map over, filter, and otherwise manipulate lists translates to most languages, and it'll make you a much better programmer to know when to map and when to iterate. All of this *can* be done with simple loops, but it shouldn't be. 

This lesson doesn't spend much time on HTML, the DOM, etc. In fact, I've done almost all (if not all) of that for you. The HTML and CSS are completely done, and much of the Dart.

This is what it looks like now:

![lesson finished](http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_600/v1522857316/Dart%20for%20Web%20Developers/Screen_Shot_2018-04-04_at_8.18.57_AM.png)

The idea here is that you have a list in that bottom display, and when you select how you want to change the list, it will implement a built in method for lists that corresponds to the description.

All you have to do is implement the methods. 

### The HTML / CSS

The CSS doesn't matter. It's purely style. The HTML has a couple points of interest:


* The drop down is already set up and wireed up.
* The `pre` tags with class `method-description` is where that blank box is on the screen shot above.
  * It's already wired up to show a mock version of the method when you make a selection.
* The list itself (`span.display-list`) is the list that's being manipulated in the Dart code.
```html
...
<p>I want to
    <select id="dropdown">
        <option value="" selected disabled>change this list.</option>
        <option value="add">add to the list.</option>
        <option value="map">replace every item in the list programmatically.</option>
        <option value="forEach">create a new list or side effects based on this one.</option>
        <option value="toSet">find the unique values in the list.</option>
        <option value="where">filter the list.</option>
    </select></p>
<div class="description-container">
    <pre class="method-description"></pre>
</div>
<div class="display">[<span class="display-list">1,3,5,2,7,4,3,6,8,4</span>]</div>
...
```

### Aside about Lists in Dart

Lists in Dart are *basically* JS Arrays, but its not that simple. Dart is a typed language, and has many different types of data structures, where JS basically has Array, Set, and Object.

The base class of the dart List is `Iterable`, which is **not** a list. That is why this lesson is very important. 

The Map method, for example, returns a `MappedIterable`, *not* a list. This causes problems that can be hard to catch if you're new.

**So here's a hint:** If something doesn't work the way you think it should, you may just need to convert it back into a list with `toList()`.   


### Step One: Read the Dart Code

The Dart looks more complicated than it is. But basically, it does 3 things:

* Initializes the code and grabs the dropdown and attached an eventListener to that code. That's in the `main` function.
* `handleSelect` decides which method should be applied to the list based on your selection in the code.
* Finally, the class ListMethods is where you'll be working. This is where you'll actually call List methods. I've left comments in the code where you should be working.


### Step Two: list.add()

First, I'll show you how to write list.add, so that you have a frame of reference for this.

By the way, `.add()` is just JS `.push()` 

```dart
  void handleAdd() {
    // A helper method just to reset your list to 'list form' after your changes.
    // At this point, 'list' is the list you see on the screen.
    var list = _listHelper();
    // This is all there is to add. You can put anything here. 
    list.add(6);
    // Join the list together, so we can attach it to the DOM as a string.
    list = list.join(',');
    listContainer.text = list;
  }
```

That's all there is to it. And none of them are much harder than that. 

### Step Three: Write the methods!

I *highly* encourage you to spend a few minutes trying to do the rest yourself. There's no wrong answer here, you're just trying to use these methods to do literally anything to the list. For example, maybe use map to double every number. Keep it simple.

Anyways, let's look at the simple examples I made:

#### Map

```dart
handleMap() {
  var list = _listHelper();
  // Map will walk over each element of the element, and change it according to the callback you pass it.
  // My version is basically saying: 'Take each number, and return it doubled.'
  // As you can see, this is a situation where you probably want to convert it back to a list.
  // Otherwise, you get back an Iterable. 
  list = list.map((num) => num * 2).toList();
  list.join(',');
  listContainer.text = list;
  }
 ```

### forEach

`forEach` is different than the rest, because it's all about the *side effects*. That is, it doesn't return anything at all.
 
 ```dart
handleForEach() {
  var list = _listHelper();
  // You have to establish a new list, because forEach doesn't return anything. 
  // You can't simply assign its return
  // value to a var, or that var will be null
  var newList = [];
  // Here, I've just added  2 to each number, but more importantly
  // I'm then adding it to newList.
  list.forEach((num) => newList.add(num + 2));
  list.join(',');
  listContainer.text = newList;
}
```

### toSet

`toSet` is simple. It just turns a List into a Set. In all programming languages, a set is more or less a List that can only have unique values. So calling `toSet` on a list will strip out all repeated values. 

```dart
handleToSet() {
  var list = _listHelper();
  // I'm only calling toList on the set here because the way this exercise is set up.
  // If you were to not convert it, and then try to call a second method, it could break.
  list = list.toSet().toList();
  listContainer.text = list;
}
```

### Where

Where is basically JS `filter`. Create a new Iterable of all the elements *where* the body of the callback evaluates to true;

```dart
handleWhere() {
  var list = _listHelper();
  // The body of the call back must return a boolean.
  // This simple function will remove all elements that aren't
  // even, because a num % 2 that doesn't equal 0 isn't even.
  list = list.where((element) => element % 2 == 0).toList();
  listContainer.text = list;
}
```

