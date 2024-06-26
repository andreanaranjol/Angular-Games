```ts
// En el siguiente arreglo la posición 2 (0 based index) es considerada
// un punto de equilibrio, es decir la suma de la izquierda (3 + 4) es igual
// a la suma de la derecha (1 + 6).
export const input = [3, 4, 8, 1, 6];

export default function getEqIndexes(arr: number[]): number[] {
  // El arreglo puede contener números positivos y negativos
  // Retorna un arreglo con todos los puntos de equilibrio
  // Ejemplo si el arreglo es [3, 4, 8, 1, 6] se espera como resultado [2].
  // Otro ejemplo: [0, -3, 5, -4, -2, 3, 1, 0] --> [ 0, 3, 7]
  return [];
}
```
