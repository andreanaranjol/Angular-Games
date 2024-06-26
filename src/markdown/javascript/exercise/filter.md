```ts
interface User {
  id: number;
  name: string;
  age: number;
}

export const input: User[] = [
  {
    id: 1,
    name: "John Brown",
    age: 18,
  },
  {
    id: 2,
    name: "David Smith",
    age: 24,
  },
  {
    id: 3,
    name: "James Wilson",
    age: 30,
  },
  {
    id: 4,
    name: "Daniel Johnson",
    age: 20,
  },
  {
    id: 5,
    name: "Michael Miller",
    age: 33,
  },
];

export default function searchByAge(arr: User[]): User[] {
  // Filtra los usuarios que su edad sea >=20 y < 30.
  // Ordena el resultado por edad de manera descendente. Utiliza la propiedad "age".
  // Recomendación: utiliza el método Array.prototype.filter and Array.prototype.sort
  return [];
}
```
