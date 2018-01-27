---
title: "Create a 'Text Editor'"
chapter: 0
lesson: 3
type: "lesson"
context: "dart30"
---

```
cd 03/start
pub get
pub serve
```

This lesson builds on the last lesson: DOM Manipulation 'basics'. The way that I solved this problem uses OOP, which is what Dart is all about.

You don't need to that. You can do this in the 'JavaScript' way. I encourage you, however, to get familiar with classes. It seem's like overkill now, but it's a good mindset to get into when using Dart.

Here's the end product: a 'Text Editor' that lets you play with CSS Grid. This is a very basic version of my project [On the Grid](https://onthegrid.com)

**You don't need to know a thing about CSS Grid the do this. But, Grid is awesome and you should learn it one day.**

![Lesson gif](http://res.cloudinary.com/ericwindmill/image/upload/v1517078171/Dart%20for%20Web%20Developers/03-finish-gif.gif)

Feel free to checkout that the HTML / CSS. Don't get too bogged down in it, though. The main thing to notice is the classes and ids, because that's what we'll use to manipulate the CSS that gives us all these effects.

Here are some important classes and Ids:

```
In the editor:
.panel-button -> the red buttons that expand the css fields
.panel -> the panels with are expanded and hidden
.closed -> hides the panel
Classes on inputs -> these are exact Css Grid properties, each input corresponds to one property
#grid-*-button -> id to grab specific button
#grid-*-panel -> id that we'll use to connect corresponding buttons and panels

In the Grid display:
All these classes are used to hook up the the editor properties to it's corresponding grid element
```

Don't worry too much about this right now, we'll explain these all as we need them in the code.

Let's start:

### Step 1: Starting Code, Object Oriented Programming

This is the code I've given you to start out with. Some important notes:

1. The `main()` function, in the way I solved this, is finished.
2. I gave you the classes with the functions that I needed so that you can focus on the logic. I wanted to show you an Object Oriented Programming approach to solving this, and these are the classes I used. This isn't a lesson in OOP, but I will take this lesson especially slow in case you're new to OOP.

These are the basic logical steps I followed:

First, we need to be able to open and close those panels:

1. Select all the `panel-buttons`.
2. Build the PanelButtonController, which...
   1. Is aware of it's associated panel, because they have corresponding IDs.
   2. Has the ability to open and close it's associated Panel.
3. Build the PanelController, which is controlled by the PanelButtonController, and...
   1. Is aware of whether it is open or closed.
   2. Build event listeners on it's children that are inputs associated with css properties.
   3. Wire those event listeners to the correct element in the 'display'.

```dart
import 'dart:html';

void main() {
  querySelectorAll('.panel-button').forEach((btn) {
    new PanelButtonController(btn.id);
  });
}

class PanelButtonController {
  PanelButtonController();

  void openAssociatedPanel(e) {}

  String buildPanelId() {}
}

class PanelController {
  PanelController();

  void buildInputEventListeners() {}
}
```

### Step 2: Main( )

The `main` function does two things:

1. Does the minimum amount of work to start the program.
2. Shows off the benefit of OOP

This is what the function looks like:

```dart
// This function is grabbing all the panel buttons,
// And for each button, it's creating a Controller, which only needs an ID to set it apart from the other controllers.
void main() {
  querySelectorAll('.panel-button').forEach((btn) {
    new PanelButtonController(btn.id);
  });
}
```

But what you end up with is a different 'ButtonController' for each button. So now each button has whichever functionality and property that you write in the PanelButtonController, but they're completely unaware of eachother. This is the power of OOP. We need to create the PanelButtonController for this `main` function to run.

### Step 3: Panel Button Controller

The JS to Dart conversion jumps up a few levels here. This is not the way you'd write JavaScript for simple DOM manipulation. The class syntax is similar to that in ES6, though.

This the beginning of the class. All you know is that you need to pass it in a btnId so you can reference the button on the DOM associated with this controller.

```dart
class PanelButtonController {
  final String btnId; // Anything passed in that you don't want to change should be final.
  // ... logic
 }
```

Now we have a PanelButtonController class with our one property we _know_ we need, lets think about what logic this class can perform on itself.

Earlier, we established that the class should: 1. Be aware of it's associated panel, because they have corresponding IDs. 2. Have the ability to open and close it's associated Panel.

In order to accomplish this, the class needs to take it's btnId that we passed in, and use that to find it's associated panel.

We'll take care of the logic that needs to be run right away in the classes 'constructor'.

```dart
class PanelButtonController {
  final String btnId;

  // This is a 'constructor'. You may have seen this in React.
  // This is run as soon as the program calls 'new PanelButtonController()'
  // It must be passed in anything that comes from the outside when 'new' is called.
  // within the constructor call, you can do logic that executes right when the class is created.
  PanelButtonController(this.btnId) {
    // Grab the button that this controller represents
    associatedButton = querySelector('#$btnId');
    // we haven't written this yet, but we know that we need the corresponding panel's id to make our button aware of it.
    associatedPanelId = buildPanelId();  
  }
}
```

Next, let's write that `buildPanelid` method.

We know that the button's Id from our controller is something like `grid-container-button`. And we know from our HTML that the corresponding panel is `grid-container-panel`. We need to build that id from the button's id.

```dart
class PanelButtonController {
  final String btnId;

  PanelButtonController(this.btnId) {
    associatedButton = querySelector('#$btnId');
    associatedPanelId = buildPanelId();  
  }

  // NEW:
  // this method returns the Id we're after, which is a String.
  String buildPanelId() {
    var buttonIdAsArray = btnId.split("-"); // split the id so we can isolate the 'button' portion
    buttonIdAsArray[buttonIdAsArray.length - 1] = "panel"; //change the 'button' portion to panel
    return buttonIdAsArray.join('-'); // rejoin the id and return it.
  }
}
```

This is the first implementation of our PanelButtonController. It definitely does not work, and infact would fail because we're referencing classes that don't exist, but before we can implement the logic to open/close the panel, we need to create the panel's class so our classes can talk to eachother. We'll come back to this class.

### Step 5: Panel Controller Class

For now, let's just set up a simple Panel Controller class like this. For the sake of brevity, I'm including more properties than you'd really know you'd need from the jump:

```dart
class PanelController {
  final String panelId; // passed from PanelButtonController
  Element associatedPanel; // the panel that the button controls.

  // constructor
  PanelController(this.id) {
    associatedPanel = querySelector('#$panelId');
  }
 }
```

Here's what we have so far, plus a couple additional lines. (Marked 'new').

With this code, for each button in the HTML there is a corresponding ButtonController and PanelController, and button controller is aware of it's corresponding panel.

```dart
import 'dart:html';

void main() {
  querySelectorAll('.panel-button').forEach((btn) {
    new PanelButtonController();
  });
}

class PanelButtonController {
  final String btnId;
  PanelController panel;

  PanelButtonController(this.btnId) {
    associatedButton = querySelector('#$btnId');
    associatedPanelId = buildPanelId();
    panel = new PanelController(associatedPanelId); // new
  }

  String buildPanelId() {
    var buttonIdAsArray = btnId.split("-");
    buttonIdAsArray[buttonIdAsArray.length - 1] = "panel";
    return buttonIdAsArray.join('-');
  }
}

class PanelController {
  final String panelId;
  Element associatedPanel;

  PanelController(this.id) {
    associatedPanel = querySelector('#$panelId');
  }
 }
```

# Step 6: Opening and Closing the Panels

With just this, you can now do things like `this.panel.style.display = none` in the ButtonPanelController class, and it'll actually add that CSS to the panel. We're going to do something very similar to that.

The next step that I took was to make the PanelController aware of wether or not the panel it represents is open or closed:

```dart
class PanelController {
  final String panelId;
  Element associatedPanel;
  bool isOpen; // new

  PanelController(this.id) {
    associatedPanel = querySelector('#$panelId');
    isOpen = false; // new
      // All of the panels start out closed, according the the HTML/CSS, so we set this to false in the constructor.
  }
 }
```

That's all there is to that. Now, in the PanelButtonController, we can wire the buttons up to actually do the damn thing:

```dart
class PanelButtonController {
  final String btnId;
  PanelController panel;

  PanelButtonController(this.btnId) {
    associatedButton = querySelector('#$btnId');
    associatedPanelId = buildPanelId();
    panel = new PanelController(associatedPanelId);
    associatedButton.onClick.listen((e) => openAssociatedPanel(e)); // New
      // We need to write the method that this calls!
  }
   // New Method:
  void openAssociatedPanel(MoustEvent e) { // event listeners pass an 'event' into the method
    if (panel.isOpen) { // ask our panel if it's open
      panel.associatedPanel.classes.add("closed"); // add the class
      panel.isOpen = false // change the panels isOpen setting
    } else {
      panel.associatedPanel.classes.remove("closed");
      panel.isOpen = true;
    }
}

  String buildPanelId() {
    var buttonIdAsArray = btnId.split("-");
    buttonIdAsArray[buttonIdAsArray.length - 1] = "panel";
    return buttonIdAsArray.join('-');
  }
}
```

That's all there is to making the button work. Click those panel buttons and watch 'em open and close.

The cool thing here, if you're coming from JS, is the Object Oriented aspect. It can be a bit to wrap your head around, but because of the way we've set this up, we look at each 'PanelButtonController' and 'PanelController' as sort of a generic blueprint, so we know that whichever button we click, it knows of its panel counterpart.

That's a major part of the functionality. In fact, I'd say that's the hard part. The CSS part is simpler.

### Step 7: Manipulate CSS with the panel inputs.

All we have left to do is wire up the inputs so that they know which HTML element in the display they represent, and make sure the adjust the proper CSS properties on those HTML elements.

I handled all of that logic in the PanelController. This is what we need to do in English:

1. Grab the inputs that are children of our current panel.
2. Add event listeners to those inputs that are aware of their corresponding HTML/CSS in the display.

Here's the final code, with some blurbs about how we got there.

```dart
import 'dart:html';

void main() {
  querySelectorAll('.panel-button').forEach((btn) {
    new PanelButtonController(btn.id);
  });
}

class PanelButtonController {
  final String btnId;
  String associatedPanelId;
  Element associatedButton;
  PanelController panel;

  PanelButtonController(this.btnId) {
    associatedPanelId = buildPanelId();
    associatedButton = querySelector('#$btnId');
    panel = new PanelController(associatedPanelId);
    associatedButton.onClick.listen((e) => openAssociatedPanel(e));
  }

  void openAssociatedPanel(e) {
    if (panel.isOpen) {
      panel.associatedPanel.classes.add("closed");
      panel.isOpen = false;
    } else {
      panel.associatedPanel.classes.remove("closed");
      panel.isOpen = true;
    }
  }

  String buildPanelId() {
    var buttonIdAsArray = btnId.split("-");
    buttonIdAsArray[buttonIdAsArray.length - 1] = "panel";
    return buttonIdAsArray.join('-');
  }
}

class PanelController {
  final String panelId;
  bool isOpen;
  Element associatedPanel;
  String baseId; // New (Convenience property)
  ElementList<InputElement> childrenInputs; // New

  PanelController(this.panelId) {
    baseId = panelId.split("-").sublist(0, 2).join("-"); // New. This is just used later. It's sole purpose to easier to read code.
    associatedPanel = querySelector('#$panelId');
    childrenInputs = associatedPanel.querySelectorAll('input'); // Grab all the inputs that are children of this panel
    isOpen = false;
    buildInputEventListeners(); // Split some logic out into another method.
  }

  buildInputEventListeners() {
    var htmlEl = querySelector('.$baseId'); // the baseId is an id on the HTML element in the display.
    childrenInputs.forEach((input) {
      input.onKeyUp.listen((KeyboardEvent e) {
        if (e.keyCode == 13) { // 13 is the keycode for the 'enter' key
          // the class on the input that represents the true CSS grid property.
          // This only works because we wrote our HTML/CSS that way.
          var cssProp = input.classes.first;
          // Change the htmlEl's css.
          htmlEl.style.setProperty(cssProp, input.value);
        }
      });
    });
  }
}
```

And that's all there is to it. That last method is pretty similar to how you'd do it in JavaScript / jQuery. That's one of the great things about Dart for web development. If you know JavaScript and jQuery, then you get to keep all the great things about DOM manipulation, but you get the safety and productive output of a more opinionated OOP language like Dart.
