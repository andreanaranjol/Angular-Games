```ts
type User {
  username: string;
}
type User {
  password: string;
}
const credentials: User = {
  username: 'lperez',
  password: '1234',
};
console.log(`${credentials.username}/${credentials.password}`);
```
