# vue-transitions-css
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
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
Be sure to set the [mode](https://vuejs.org/v2/guide/transitions.html#Transition-Modes) of the transition so it doesn't appear janky:
```html
  <transition name="fade" mode="out-in">
    <Content v-if="show" />
  </transition>
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/bemijonathan"><img src="https://avatars3.githubusercontent.com/u/34762800?v=4" width="100px;" alt=""/><br /><sub><b>jonathan</b></sub></a><br /><a href="https://github.com/Edmund1645/vue-transitions-css/commits?author=bemijonathan" title="Code">💻</a> <a href="#maintenance-bemijonathan" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
