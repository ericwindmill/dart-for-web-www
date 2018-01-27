---
title: "Set Up Environment"
chapter: 0
lesson: 1
type: "lesson"
context: "dart30"
---

The first exercise is the only boring set-up exercise. It should take you about 30 seconds.

Once you have the repo downloaded, navigate to the `01` directory so we check out whats going on.

This is the file structure you'll see:

#### Bare Bones Dart Web App:

```nohighlight
dart_project
    |- web
        | - index.html
        | - styles.css
        | - main.dart
    pubspec.yaml
```

_NB_: There's no `start` or `finish` for this lesson.

This is the most basic, bare-bones Dart project file structure you can have.

There are a few things to note here:

1. `pubspec.yaml` is the file that sets up the dart environement, and where you list dependencies. This is required in the root of the directory. `pub` is the package manager for Dart (much like yarn or npm in JS world). It looks for the pubspec file.
2. Because Dart can't run natively on browsers, it can't be in `<script>` tags. It needs to be pulled in. `main.dart` is the convention for the top-level Dart file.
3. The `web` directory is required. This is where pub will look to find your app.

### index.html

This is exactly like what you'd be familiar with, you just need to make sure you're pulling in Dart correctly.

```markup
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Dart 30</title>
    <link rel="stylesheet" href="styles.css">

    <!-- Pull in your Dart code and the Dart browser package! -->
    <script defer src="main.dart" type="application/dart"></script>
    <script defer src="packages/browser/dart.js"></script>
</head>
<body>
    <h1> My First Dart App </h1>
    <div id="output"></div>
</body>
</html>
```

### main.dart

An important note here is that you have to import the `html` library. This gives us all the methods we need for DOM manipulation, but they are _not_ part of basis of Dart like in JS. You'll see this a lot in Dart.

```dart
import 'dart:html';

void main() {
    // This should look familiar!
  querySelector('#output').text = 'Your Dart app is running.';
}
```

### pubspec.yaml

Finally, we have the pubspec file. As mentioned, `pub` will look for this file when you spin up a dart project. This file contains dependancies, including the `dart_to_js_script_rewritter`, without which a Dart app can't run in the browser.

```yaml
name: Dart 30
description: Basic Dart web development.

environment:
  sdk: '>=1.20.1 <2.0.0'

#dependencies:
#  path: ^1.4.1

dev_dependencies:
  browser: ^0.10.0
  dart_to_js_script_rewriter: ^1.0.1

transformers:
- dart_to_js_script_rewriter
```

Navigate to `dart_30/01/` in your terminal and run these commands:

```
// Get dependancies:
pub get

// start a test server
pub serve
```

Now open your browser and go to `localhost:8080`, and you should see your app!
