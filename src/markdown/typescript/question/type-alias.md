```ts
type Point = {
  x: number;
  y: number;
};
function printCoord(p: Point) {
  console.log(p.x, p.y);
}
printCoord({ x: 100, y: 100 });
```
