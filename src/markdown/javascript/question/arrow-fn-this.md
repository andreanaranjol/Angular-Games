```js
// Diameter: 20 & 2 = 40
// Perimeter: 2 * Math.PI * 20 = 125.66
const circle = {
  radius: 20,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};
console.log(circle.diameter(), circle.perimeter);
```
