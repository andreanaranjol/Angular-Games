```js
const obj1 = {
  a: "value1",
};
const obj2 = {
  a: "value2",
};
Object.freeze(obj1);
Object.seal(obj2);
obj1.a = "update1";
obj2.a = "update2";
console.log(obj1.a, obj2.a);
```
