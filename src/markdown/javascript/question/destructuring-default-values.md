```js
const { a = 2, b = 4, c = 6 } = { a: 10 };
const [x = 2, y = 4, z = 6] = [10];
console.log(a, b, c, x, y, z);
```
