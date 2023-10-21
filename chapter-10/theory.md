## Explore all the ways for writing css 
- creating css file and linking it to our js file
- inline css
- using css-modules
- CSS-IN-JS 
- styled components
- tailwindCSS
- Component libraries
## How do we configure tailwind
- Install tailwindCSS and postCSS as a dev dependencies and then run init command 
```
npm install -D tailwindcss postcss
npx tailwindcss init
```
- Configure postCSS 
```
{
  "plugins": {
    "tailwindcss": {}
  }
}
```
- Configure template paths in tailwind.config.js file
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- Add the tailwind directives to the css file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- start the build process
```
npx parcel index.html
```
## In tailwind.config.js What does all the keys means (content,theme,extend,plugins)
# Content
It is place where we configure the path to our html templates or javascript components or any other files that contains tailwind classnames
# Theme
It is place where we define colors, font size, borders, type scale anything that is related to the visual design of the website
# Plugins
The `plugins` section allows you to register plgins with tailwind that can be used to generate extra ultities, components, base styles or custom variants
# Extend
if you'd like to extend the default spacing scale , you can do so using `theme.extend.spacing` section of your `tailwind.config.js` file 
## Why do we have .postcssrc file ?
postCSS is a library that transforms css into javascript .CSS code is transpiled into Abstract Syntax Tree which is then represented as javascript objects Then we can use javascript plugin to transform the code and produces a valid css file

`.postcssrc` is a js module name, a path to a javascript file that is relative to the directory of postCSS config file or an absolue path to a javascript file 



### REFERENCES

## PROS AND CONS OF TAILWINDCSS


# CONS
- SETUP AND LEARNING CURVE
- TAILWIND CAN'T DO EVERYTHING 
- HTML AND STYLING ARE MIXED

# PROS
- EASY TO USE
- BETTER CSS STYLING PROCESS
- HIGHLY  CUSTOMIZABLE