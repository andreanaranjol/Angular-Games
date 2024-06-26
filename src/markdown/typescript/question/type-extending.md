```ts
type Animal = {
  name: string;
};
type Bear = Animal & {
  honey: boolean;
};
const roar: Bear = { name: "Teddy", honey: true };
console.log(roar.name);
```
