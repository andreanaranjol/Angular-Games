```ts
interface Person {
  name: string;
  age: number;
}
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}
const writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};
const readonlyPerson: ReadonlyPerson = writablePerson;
writablePerson.age++;
console.log(readonlyPerson.age);
```
