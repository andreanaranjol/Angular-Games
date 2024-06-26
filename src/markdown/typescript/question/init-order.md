```ts
class Base {
  name = "base";
  constructor() {
    console.log(`My name is ${this.name}`);
  }
}
class Derived extends Base {
  name = "derived";
}
const d = new Derived();
```
