```js
function welcome(name) {
  var getMessage = function (message) {
    console.log(message + " " + name);
  };
  return getMessage;
}
var sayHello = welcome("Luis");
sayHello("Bienvenido");
sayHello("Buenos días Sr.");
```
