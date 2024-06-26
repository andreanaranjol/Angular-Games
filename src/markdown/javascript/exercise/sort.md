```ts
interface User {
  id: number;
  name: string;
}

export const input: User[] = [
  {
    id: 1,
    name: "John Brown",
  },
  {
    id: 2,
    name: "David Smith",
  },
  {
    id: 3,
    name: "James Wilson",
  },
  {
    id: 4,
    name: "Daniel Johnson",
  },
  {
    id: 5,
    name: "Michael Miller",
  },
];

export default function sortByName(arr: User[]): User[] {
  // Retorna un arreglo de usuarios ordenados alfabéticamente por nombre.
  // Utiliza la propiedad "name".
  // Recomendación: Puedes utilizar la función Array.prototype.sort().
  return [];
}
```
