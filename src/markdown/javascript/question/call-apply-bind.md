```js
var employee = { firstName: "Luis", lastName: "Pérez" };

function sayHello(greeting) {
  console.log(greeting + " " + this.firstName + " " + this.lastName);
}
```
