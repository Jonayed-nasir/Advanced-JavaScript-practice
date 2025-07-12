// JavaScript Modules

const name = 'Jonayed';
const age = 18;

export { name, age };

export function greet(name) {
  return name;
}

import { greet } from './app.js';

console.log(greet('Hello, Jonayed!'));
