---
title: "Navigation Highlight"
chapter: 0
lesson: 4
type: "lesson"
context: "dart30"
---

```
cd 04/start
pub get
pub serve
```

In this lessons, we'll write a couple functions that again show some fun ways to manipulate the dom. This time, we'll use factors like scroll position to tell the DOM when to add and remove classess. (It's actually pretty much that easy.)

**Here's a gif of your goal.**

![lesson gif](http://res.cloudinary.com/ericwindmill/image/upload/v1517086239/Dart%20for%20Web%20Developers/04-finish-gif.gif)

First, checkout the HTML/CSS. There you'll find a left-navigation where each list-item has an ID that corresponds with the links `href` attribute. (If you're new to web development, putting a # sign in the href attribute allows you to use the link to scroll to the element on the page with the that ID.)

In the main content, you'll find `<section>` tags which have id's to match those `href`s.

And finally, you'll find a class called `active-chapter` on the links in the nav. That's the class that does the highlighting that we'll essentailly 'pass around.'

If you play with the finished product, you'll see that the Navigation portion works on scroll and click. Either way, it scrolls to the correct place and the correct link gets highlighted.

The Dart logic you'll need to write is pretty 'basic' in the sense that there are really only two steps that you repeat.

1. Use query selectors to grab the appropriate elements.
2. Add event listeners for both scrolling and clicking.

### Step 1: Query Selectors

So we know that there are two event listeners we need to add, but they're both changing the same elements -- the links in the navigation.

```dart
void main() {
  List<Element> menuChapters = document.querySelectorAll('li > a');
  // You'll need to pass in the event, as well as what's being modified for our purposes.
  window.addEventListener("scroll", (e) => onScroll(e, menuChapters));
  menuChapters.forEach((link) {
    link.addEventListener('click', (e) => handleClick(e, link));
  });
}
```

That's our main function. The rest of our logic lives in those two functions we haven't written yet.

### Step 2: Handle Click

First, we'll write our handleClick function.

The logic here is super simple -- you only need to remove `.active-chapter` from the currently active and add that class to the link that's been clicked.

```dart
void handleClick(MouseEvent e, Element link) {
  var currentActive = document.querySelector(".active-chapter");
  currentActive.classes.remove('active-chapter');
  link.classes.add('active-chapter');
}
```

And that's that.

### Step 3: Handle Scroll

Finally, we'll need to write our method to handle scroll. The idea behind this one is the same -- you need to add and remove the `.active-chapter` class, but you need to do so based on which chapter title was most recently in the window.

This method is called constantly as the user scrolls, so the first thing we're going to do is set a variable that tracks the current scroll position:

```dart
void onScroll(CustomEvent e, List<Element> menuChapters) {
  var scrollPos = window.pageYOffset;
}
```

This method is called, executed and disposed of on every scroll action, so we're _actually_ creating a new scrollPos variable on each scroll. You can see that by putting a `print` in your scroll method:

![scroll gif](http://res.cloudinary.com/ericwindmill/image/upload/v1517155607/Dart%20for%20Web%20Developers/scroll-pos-gif.gif)

There are better, more efficient ways to this. But for our little mini web page there's no advantage to spending time on it. We will however see some of those methods in the Debaser lesson.

The rest of the method is checking to see where we are in the window, and then changing the active-chapter class based on that:

```dart
void onScroll(CustomEvent e, List<Element> menuChapters) {
  var scrollPos = window.pageYOffset;
  menuChapters.forEach((chapter) {
    // So we can remove it later
    var currentActive = document.querySelector(".active-chapter");

    // A section id corresponds with a links 'href'
    // i.e. A section may have an id of chapter-one, and the href of the link is #chapter-one
    var ref = chapter.getAttribute("href");
    // Bonus -- since the href is #chapter-one, it's already primed for querySelector with the # sign leading the id name.
    var correspondingElement = querySelector('$ref');

    // This is new. We get the top position (in pixels) of the section that corresponds with the menuChapter.
    // Because this entire method is a callback, there are *always* one of these functions in living memory for each chapter title.
    // You could put a print statement here and you'd see it print on each scroll and once for every chapter!
    var eleTopPos = correspondingElement.documentOffset.y;
    // The bottom position just takes a bit of addition.
    var eleBottomPos = eleTopPos + correspondingElement.offsetHeight;

    // and finally, we see if our window position is within this sections positions.
    if (scrollPos > eleTopPos && scrollPos < eleBottomPos) {
      // If so, highlight this chapter.
      currentActive.classes.remove('active-chapter');
      chapter.classes.add('active-chapter');
    }
  });
}
```

That's the entire page. This is the final code that I came up with:

```dart
import 'dart:html';

void main() {
  var menuChapters = document.querySelectorAll('li > a');
  window.addEventListener("scroll", (e) => onScroll(e, menuChapters));
  menuChapters.forEach((link) {
    link.addEventListener('click', (e) => handleClick(e, link));
  });
}

void handleClick(MouseEvent e, Element link) {
  var currentActive = document.querySelector(".active-chapter");
  currentActive.classes.remove('active-chapter');
  link.classes.add('active-chapter');
}

void onScroll(CustomEvent e, List<Element> menuChapters) {
  var scrollPos = window.pageYOffset;
  menuChapters.forEach((chapter) {
    var currentActive = document.querySelector(".active-chapter");
    var ref = chapter.getAttribute("href");
    var correspondingElement = querySelector('$ref');
    var eleTopPos = correspondingElement.documentOffset.y;
    var eleBottomPos = eleTopPos + correspondingElement.offsetHeight;
    if (scrollPos > eleTopPos && scrollPos < eleBottomPos) {
      currentActive.classes.remove('active-chapter');
      chapter.classes.add('active-chapter');
    }
  });
}
```

### Improvements

This code isn't very dry. For example, we're creating currentActive twice. This could be solved with OOP. Also, adding a debaser would make it much more efficient.
