```ts
class Base {
  greet() {
    console.log("Hello, world!");
  }
}
class Derived extends Base {
  greet(name: string = "planet") {
    console.log(`Hello, ${name}!`);
  }
}
const d = new Derived();
console.log(d.greet());
```
