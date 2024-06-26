```ts
interface User {
  username: string;
}
interface User {
  password: string;
}
const credentials: User = {
  username: "lperez",
  password: "1234",
};
console.log(`${credentials.username}/${credentials.password}`);
```
