```ts
type Property = [string, any];
type UserArr = Property[];
type UserObj = {
  [key: string]: any;
};

export const input: UserArr[] = [
  [
    ["id", 1],
    ["name", "John Brown"],
  ],
  [
    ["id", 2],
    ["name", "David Smith"],
  ],
  [
    ["id", 3],
    ["name", "James Wilson"],
  ],
];

export default function convertArrayToObject(arr: UserArr[]): UserObj[] {
  // Cada propiedad de un usuario es representado con un arreglo [propiedad, valor]. Ejemplo: ["id", 1].
  // Cada usuario esta compuesto por multiples propiedades [[propiedad, valor]. [propiedad, valor], ...].
  // Se espera como resultado un arreglo de objetos con el siguiente formato:
  //
  // [{ id: 1, name: 'John Brown' }, { id: 2, name: 'David Smith' }, { id: 3, name: 'James Wilson' }]
  //
  // Recomendación: utiliza los métodos Array.prototype.map y Array.prototype.reduce
  return [];
}
```
