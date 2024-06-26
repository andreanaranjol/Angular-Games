```js
function* sequence() {
  yield 1;
  yield 2;
  yield 3;
}
const seq = sequence();
console.log(
  seq.next().value,
  seq.next().value,
  seq.next().value,
  seq.next().value
);
```
