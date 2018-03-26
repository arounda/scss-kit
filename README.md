# Arounda CSS Guidlines

## SCSS starter kit

- **index.scss** - entry point. Main classes are defined there.
- **grid.scss** - grid-related mixins.
- **mixins.scss** - all other mixins including container and fluid font size.
- **variable.scss** - variables used in mixins.
- **reset.scss** - basic reset inspired by Eric Meyer’s "Reset CSS" and own experience.

## Grid

Until wider support of CSS Grid among browser users (flexbox rate) we use custom flex-based grid system.
Он
### Classes for grid components

1. `.container` - content zone of the page. Contains grid rows.
2. `.grid-row` - contains grid columns.
3. `.col-*breakpoint*-*columns number*`
4. `.col-margin-*breakpoint*-*columns number*`
5. `.hide-*breakpoint*`

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




