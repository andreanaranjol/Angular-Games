```ts
interface Checkable {
  check(name: string): boolean;
}
class NameChecker implements Checkable {
  check(name): boolean {
    return name.toLowerCase() === "ok";
  }
}
const checker = new NameChecker();
console.log(checker.check("ok"));
```
