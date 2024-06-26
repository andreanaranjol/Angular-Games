```js
var promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});
Promise.all([promise1, promise2]).then(function (value) {
  console.log(value);
});
```