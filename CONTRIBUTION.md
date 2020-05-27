### CONTRIBUTION
After creating a fork and cloning locally:

1. Install dependencies in the root(`/`) directory with: `npm install`
2. Install dependencies in the `/demo` directory with `cd demo && npm install`
3. Open two terminal tabs, In the first run: `npm run watch` and in the second run: `npm run develop`
4. Edit/Create the css files in `/src` folder in the root dir to add new classes.
5. Open the `/demo/src/assets/animations.js` file and add details about the newly added animation. eg:
```js
// in /demo/src/assets/animations.js
export default [
  ...
  {
    name: 'Fade', // the title of the animation to display on the demo page
    class: 'fade', // the value that will set to the name prop of the transition wrapper
  }
  ...
]
```

#### Notes
* When working on your own fork, be sure to create a new branch and work on.
* When submitting a PR, be sure to submit to the `develop` branch. PRs to `master` will be closed please. 