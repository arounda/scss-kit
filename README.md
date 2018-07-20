# SCSS starter kit

## Installation
Put _arounda-scss-kit_ folder inside your project and then import _index.scss_ file into your styles.

## Structure
- **index.scss** - entry point. Main classes are defined there.
- **__mixins.scss** - all mixins including container and fluid font size.
- **__variables.scss** - variables used in mixins.
- **reset.scss** - basic reset inspired by Eric Meyer’s "Reset CSS" and own experience.

## Play around
If you want to try out the kit, you can clone the repo, install dependencies and then use ```npm start``` to launh dev server with sandbox

## Grid
We use custom flex-based grid system.

### Classes for grid components
1. `.container` - content zone of the page. Contains grid rows.
2. `.grid-row` - contains grid columns.
3. `.col` - general column. It takes places in relation to number of columns in a row. If there are just a single `.col` element, it will take all the space, if more - the space will be divided equally.
4. `.col-*breakpoint*-*columns number*`
5. `.col-margin-*breakpoint*-*columns number*`
6. `.hide-*breakpoint*`

### How to create/change/remove breakpoints
Breakpoints used may vary from project to project. Therefore, the starter kit includes solution for modifying existing breakpoints and adding new ones.<br>
File ___variables.scss_ contains variable _$breakpoints_. It is SASS Script's map which acts almost like an object in Javascript.
```scss
$breakpoints: (
  "desktophd": (
    min: $minDesktopHD
  ),
  "desktop": (
    max: $maxDesktop,
    min: $minDesktop
  ),
  "laptop": (
    max: $maxLaptop,
    min: $minLaptop
  ),
  "tablet": (
    max: $maxTablet,
    min: $minTablet
  ),
  "mobile": (
    max: $maxMobile,
    min: $minMobile
  ),
  "mobilesm": (
    max: $maxMobileSm
  )
)
``` 
As you can see, _$breakpoints_ has several named items, each having "max" or "min" properties, or both of them, which represents values for media quaries for max-width and min-width. While parsing SCSS, those items will be used by the function in _index.scss_ file to generate classes for breakpoint.<br>
For example, if you'd add new item to that map like this
```scss
$breakpoints: (
  ...
  "tablet-small": (
    max: 900px,
    min: 768px
  ),
  ...
)
```
following classes would be created
```scss
.col-tablet-small-*columns number*
.col-margin-tablet-small-*columns number*
.hide-tablet-small
```

## Flexible font
SCSS starter-kit includes ```fluid-font``` mixin, that can be inspected in ___mixins.scss_ file. It takes 4 arguments: maximal font-size, minimal font-size, maximal screen width and minimal screen width. Basically, it changes font size form maximal to minimal between two designated resolutions according to the formula. 

## Naming convention

We use light version of BEM to optimise class names.

1. Blocks and elements names with several words use dashes. Example: `.timeline-widget`.
2. Blocks and elements are separated by **_single_** underscore. Example: `.timeline-widget_empty-line`.
3. Modificators are set by the pattern `-*modificator-name*`. Example: `.-filled`, `.-hidden`.  
   Therefore in scss code we use class chaining to define modificators. Example:

```scss
.contact-form_btn-submit {
    background-color: grey;
    &.-active {
        background-color: blue;
    }
}
```

## `z-index` usage

Use no more than 10 levels when needed.

1 - additional background and everything that should be below content;  
2 - content;  
...  
8 - secondary dropdowns;  
9 - primary dropdowns;  
10 - modals, popups etc.

That's preferred structure though it can vary depending on the project needs.




