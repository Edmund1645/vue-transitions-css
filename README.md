# vue-transitions-css
A lightweight CSS library for for adding transitions to Vue components :star:

[Demo](https://vue-transitions-css.netlify.app/) | [Contribution](./CONTRIBUTION.md) | [Changelog](./CHANGELOG.md)

## USAGE
Installation via NPM:
```bash
npm install vue-transitions-css
```
In the `main.js` file:
```js
...

import 'vue-transitions-css';

...
```
This imports the minified css distribution file globally, available for use anywhere in the project.

In any `.vue` file:
```html
  <transition name="fade">
    <Content v-if="show" />
  </transition>
```
