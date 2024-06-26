```ts
interface Animal {
  name: string;
}
interface Bear extends Animal {
  honey: boolean;
}
const roar: Bear = { name: "Teddy", honey: true };
console.log(roar.name);
```
