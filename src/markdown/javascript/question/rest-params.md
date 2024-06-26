```js
function add(...args) {
  let result = 0;
  for (let arg of args) result += arg;
  return result;
}

console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3, 4, 5));
```
