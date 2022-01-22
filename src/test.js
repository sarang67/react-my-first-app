export let number1 = 10;
export let number2 = 20;

export let obj = { name: "sarang jain", age: 30 };

export function test() {
  console.log("test fn");
}

export const jsxelement = () => <span>I am jsx element</span>;

const arr = [1, 2, 3, 4, 5];

export default arr;

/*
This will go to the app.js for tetimg import and export

import React from "react";
// import arr, { number1, number2, obj, test, jsxelement } from "./test";
// syntax import {name} from 'file location'

const App = () => {
  console.log(number1);
  console.log(number2);
  console.log(obj);
  console.log(test());
  console.log(jsxelement());
  console.log(arr);
  return <p>This is first App component</p>;
};

export default App;


*/
