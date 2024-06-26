```js
let a = function () {
  console.log(arguments);
};
const x = new a(1, 2, 3);

let b = () => {
  console.log(arguments);
};
const y = new b(1, 2, 3);
```
