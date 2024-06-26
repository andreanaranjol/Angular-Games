```js
const arr = [
  { id: 1, name: "Luis" },
  { id: 2, name: "Juan" },
];
console.log(
  arr.find((obj) => obj.id === 1),
  arr.some((obj) => obj.id === 1),
  arr.find((obj) => obj.id === 3),
  arr.some((obj) => obj.id === 3)
);
```
