```js
const handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 100;
  },
};
const proxy = new Proxy({}, handler);
proxy.a = 10;
proxy.b = null;
console.log(proxy.a, proxy.b, proxy.c);
```
