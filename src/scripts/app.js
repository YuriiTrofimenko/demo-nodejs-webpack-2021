import * as helperModule from './my-helper-module'

console.log("Welcome! Greetings from app.js. Let's learn Webpack 4");
const h1 = document.createElement('h1')
h1.innerText = helperModule.greetings
document.getElementsByTagName('my-app')[0].append(h1)
console.log(helperModule.greetings);

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))