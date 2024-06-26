```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
const a = identity<string>("myString1");
const b = identity("myString2");
```
