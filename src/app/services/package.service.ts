import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Exam, Exercise, Package, Quiz } from '../types/package';

@Injectable()
export class PackageService {
  packages: Package[] = [
    {
      id: 'javascript',
      name: 'JavaScript',
      logo: '/assets/javascript.svg',
      description:
        'Incluye preguntas de opción múltiple y ejercicios prácticos para evaluar tus conocimientos en JavaScript.',
      quizzes: [
        {
          id: 'junior',
          name: 'Nivel Principiante',
          postUrl: 'https://formspree.io/f/xyyowrgo',
          description:
            'Incluye preguntas relacionadas con los tipos de datos, arreglos, objetos, funciones, operadores, flujos de control, etc.',
          questions: [
            {
              id: 'fn-any-args',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Se lanza un error en la línea 5.',
                'Se imprime en console 3.',
                'Nunguna de las alteriores',
              ],
            },
            {
              id: 'equality-comparison',
              question:
                'Tomando en cuenta los tipos de comparación "strict" (===)  y "type-converting" (==), seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea 1 se imprime: true',
                'En la línea 2 se imprime: false',
                'En la línea 3 se imprime: false',
                'En la línea 4 se imprime: false',
                'En la línea 5 se imprime: true',
                'En la línea 6 se imprime: false',
                'Todas las anteriores',
              ],
            },
            {
              id: 'rest-params',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Se imprime 1 en la línea 7.',
                'Se imprime 3 en la línea 8.',
                'Se imprime 15 en la línea 9.',
                'Todas las alteriores',
              ],
            },
            {
              id: 'data-types',
              question:
                'De las siguientes opciones, cúal es un tipo de dato primitivo en JavaScript?',
              options: ['Null', 'Undefined', 'String', 'Todas las anteriores'],
            },
            {
              id: 'regular-fn-args',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Se lanza un error en la línea 3.',
                'Se imprime en consola un arreglo con los valores 1, 2 y 3.',
              ],
            },
            {
              id: 'arrow-fn-args',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Se lanza un error en la línea 3.',
                'Se imprime en consola un arreglo con los valores 1, 2 y 3.',
              ],
            },
            {
              id: 'new-arrow-fn',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Se lanza un error en la línea 4.',
                'Se lanza un error en la línea 9.',
                'Se imprime en cosola un arreglo con los valores 1, 2 y 3, dos veces.',
              ],
            },
            {
              id: 'create-objects',
              question:
                'Seleccione la opción correcta para crear un objeto en JavaScript',
              options: [
                'var object = new Object();',
                'var object = Object.create(null);',
                'var object = {};',
                'Todas las anteriores',
              ],
            },
            {
              id: 'delete-operator',
              question:
                'Tomando en cuenta las siguientes líneas de codigo, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #3 se imprime: { name: "Luis", age: 20 }',
                'En la línea #3 se imprime: { name: "Luis" }',
                'En la línea #3 se imprime: { age: 20 }',
              ],
            },
            {
              id: 'typeof-null',
              question:
                'Tomando en cuenta las siguientes líneas de codigo, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #2 se imprime: Undefined',
                'En la línea #2 se imprime: Null',
                'En la línea #2 se imprime: Object',
              ],
            },
            {
              id: 'call-apply-bind',
              question:
                'Tomando en cuenta las siguientes líneas de código, de qué forma podemos ejecutar la funcion "sayHello"?',
              snippet: true,
              options: [
                `sayHello.call(employee, ['Hello']);`,
                `sayHello.apply(employee, 'Hello');`,
                `sayHello.call(employee, 'Hello');`,
                `sayHello.apply(employee, ['Hello']);`,
                'C. y D. son correctas.',
              ],
            },
            {
              id: 'foreach',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                `Se imprime en consola un arreglo con los valores [2, 4, 6]`,
                `Se imprime en consola un arreglo con los valores [1, 2, 3]`,
                `Se imprime en consola Undefined`,
                `Ninguna de las anteriores`,
              ],
            },
            {
              id: 'map',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                `Se imprime en consola el arreglo [2, 4, 6]`,
                `Se imprime en consola el arreglo [1, 2, 3]`,
                `Se imprime en consola el arreglo Undefined`,
                `Ninguna de las anteriores`,
              ],
            },
            {
              id: 'nan',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #1 se imprime: true',
                'En la línea #2 se imprime: false',
                'En la línea #3 se imprime: true',
                'En la línea #4 se imprime: false',
                'En la línea #5 se imprime: false',
                'Todas las anteriores',
              ],
            },
            {
              id: 'for-of',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Se imprime "a", luego "b" y luego "c"',
                'Se imprime 0, luego 1 y luego 2',
              ],
            },
            {
              id: 'for-in',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Se imprime "a", luego "b" y luego "c"',
                'Se imprime 0, luego 1 y luego 2',
              ],
            },
            {
              id: 'compare-dates',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #3 se imprime: false',
                'En la línea #3 se imprime: true',
              ],
            },
            {
              id: 'not-before',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: ['Se imprime: Verdadero', 'Se imprime: Falso'],
            },
            {
              id: 'not-after',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: ['Se imprime: Verdadero', 'Se imprime: Falso'],
            },
          ],
        },
        {
          id: 'mid-level',
          name: 'Nivel Intermedio',
          postUrl: 'https://formspree.io/f/xyyowrgo',
          description:
            'Incluye preguntas relacionadas con clousures, expresiones regulares, colecciones, clases, prototype, manejo de errores, etc.',
          questions: [
            {
              id: 'closures',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Se imprime en consola "Bienvenido Luis" en la línea 8',
                'Se imprime en consola "Buenos días Sr. Luis" en la línea 9',
                'Todas las anteriores',
              ],
            },
            {
              id: 'regex-search',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #3 se imprime: true',
                'En la línea #3 se imprime: 5',
                'Se lanza un error en la línea #2',
                'Nunguna de las anteriores',
              ],
            },
            {
              id: 'regex-replace',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #3 se imprime: Hola Juan',
                'En la línea #3 se imprime: Hola Luis',
                'Se lanza un error en la línea #2',
                'Nunguna de las anteriores',
              ],
            },
            {
              id: 'regex-test-exec',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #2 se imprime: false',
                'En la línea #2 se imprime: null',
                'En la línea #3 se imprime: false',
                'En la línea #3 se imprime: null',
                'A y D son correctas',
              ],
            },
            {
              id: 'object-assign',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #4 se imprime: { a: 1, b: 2}',
                'En la línea #4 se imprime: { a: 1, b: 3, c: 4}',
                'En la línea #5 se imprime: undefined',
                'En la línea #5 se imprime: { b: 3, c: 4}',
                'En la línea #5 se imprime: { a: 1, b: 3, c: 4}',
                'B y E son correctas',
              ],
            },
            {
              id: 'object-freeze-seal',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #11 se imprime: update1, update2',
                'En la línea #11 se imprime: value1, value2',
                'En la línea #11 se imprime: value1, update2',
                'En la línea #11 se imprime: update1, value2',
              ],
            },
            {
              id: 'destructuring-default-values',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #3 se imprime: 10, 4, 6, 10, 4, 6',
                'En la línea #3 se imprime: 2, 4, 6, 2, 4, 6',
                'En la línea #3 se imprime: 2, 4, 6, 10, 4, 6',
                'En la línea #3 se imprime: 10, 4, 6, 2, 4, 6',
              ],
            },
            {
              id: 'destructuring-swap-values',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #4 se imprime: 10, 10',
                'En la línea #4 se imprime: 20, 20',
                'En la línea #4 se imprime: 20, 10',
                'En la línea #4 se imprime: 10, 20',
              ],
            },
            {
              id: 'spread-operator',
              question:
                'Tomando en cuenta la siguiente línea de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Se imprime: "asdf"',
                'Se imprime: "...asdf"',
                'Se imprime: ["a", "s", "d", "f"]',
                'Nunguna de las anteriores',
              ],
            },
            {
              id: 'find-some',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Se imprime: true, true, false, false',
                'Se imprime: {id: 1, name: "Luis"}, true, undefined, false',
                'Se imprime: {id: 1, name: "Luis"}, true, null, false',
                'Se imprime: true, {id: 1, name: "Luis"}, false, null',
              ],
            },
            {
              id: 'arrow-fn-this',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Se imprime: 40, 125.66',
                'Se imprime: 40, NaN',
                'Se lanza un error en la linea #6',
                'Se lanza un error en la linea #8',
              ],
            },
            {
              id: 'array-flattening',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #2 se imprime: [0, 1, [22, 33], 4, 5, [66, 77], 8, 9]',
                'En la línea #2 se imprime: [0, 1, 22, 33, 4, 5, 66, 77, 8, 9]',
                'En la línea #3 se imprime: [0, 1, [22, 33], 4, 5, [66, 77], 8, 9]',
                'En la línea #3 se imprime: [0, 1, 22, 33, 4, 5, 66, 77, 8, 9]',
                'B y C son correctas',
              ],
            },
            {
              id: 'hoisting',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #1 se imprime: undefined',
                'Se lanza un error en la línea #1',
                'En la línea #1 se imprime: Qué es hoisting?',
              ],
            },
            {
              id: 'hoisting-class',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #7 se imprime: lperez',
                'Se lanza un error en la línea #1',
              ],
            },
          ],
        },
        {
          id: 'senior',
          name: 'Nivel Avanzado',
          postUrl: 'https://formspree.io/f/xyyowrgo',
          description:
            'Incluye preguntas relacionadas con promesas, iteradores, generadores, event loop, módulos, etc.',
          questions: [
            {
              id: 'why-promises',
              question: 'Por qué se utilizan promesas (Promise)?',
              options: [
                'Porque nos permite manejar operaciones asíncronas',
                'Porque es un alternativa a los callbacks y nos permite evitar el problema conocido como "callback hell"',
                'Porque nos permite escribir código más limpio',
                'A, B son correctas',
                'A, B, C son correctas',
              ],
            },
            {
              id: 'promise-status',
              question:
                'Cuáles son los posibles estados de una promesa (Promise)',
              options: [
                'Pending, Rejected.',
                'Pending, Fulfilled, Rejected',
                'Pending, Resolved, Rejected',
              ],
            },
            {
              id: 'promise-chaining',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta.',
              snippet: true,
              options: [
                'Se imprime 1 en la línea #5',
                'Se imprime 1 en la línea #9',
                'Se imprime 1 en la línea #13',
                'Se imprime 2 en la línea #9',
                'A y D son correctas',
              ],
            },
            {
              id: 'promise-all',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta.',
              snippet: true,
              options: [
                'Se imprime en consola "one"',
                'Se imprime en consola "two"',
                'Se imprime en consola ["one", "two"]',
                'Se imprime en consola ["two", "one"]',
              ],
            },
            {
              id: 'promise-race',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta.',
              snippet: true,
              options: [
                'Se imprime en consola "one"',
                'Se imprime en consola "two"',
                'Se imprime en consola "two" y luego "one"',
                'Se imprime en consola "one" y luego "two"',
              ],
            },
            {
              id: 'proxy',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta.',
              snippet: true,
              options: [
                'En la línea #9 se imprime: 10, null, null',
                'En la línea #9 se imprime: 10, null, 100',
                'En la línea #9 se imprime: 10, null, undefined',
              ],
            },
            {
              id: 'generators',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta.',
              snippet: true,
              options: [
                'Se imprime: 1, 2, 3, 3',
                'Se imprime: 1, 2, 3, undefined',
                'Se imprime: 1, 2, 3, null',
                'Se imprime: 1, 2, 3, 0',
              ],
            },
            {
              id: 'timeout-zero',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta.',
              snippet: true,
              options: [
                'Se imprime: A, B, C',
                'Se imprime: A, C, B',
                'Se imprime: B, A, C',
                'Se imprime: A, C',
              ],
            },
          ],
        },
      ],
      exams: [
        {
          id: 'junior',
          name: 'Nivel Principiante',
          description:
            'Incluye ejercicios relacionados con tipos de datos, arreglos, objetos, funciones, operadores, flujos de control, etc.',
          exercises: [
            {
              id: 'sort',
              name: 'Ordernar un arreglo de objectos',
              description:
                'Ordena el siguiente arreglo de objectos alfabéticamente por nombre. Utiliza al propiedad "name" del objeto.',
              code: 'src/app/javascript/exercises/sort.ts',
              snippet: true,
            },
            {
              id: 'sum',
              name: 'Sumar los elementos de un arreglo',
              description:
                'Suma todos los números del arreglo. El arreglo puede incluir números positivos y negativos.',
              code: 'src/app/javascript/exercises/sum.ts',
              snippet: true,
            },
          ],
        },
        {
          id: 'mid-level',
          name: 'Nivel Intermedio',
          description:
            'Incluye ejerccios relacionadas con clousures, expresiones regulares, colecciones, clases, prototype, manejo de errores, etc.',
          exercises: [
            {
              id: 'convert',
              name: 'Convertir un arreglo a un objeto',
              description:
                'Crea un función que reciba un arreglo de arreglos y retorne un arreglo de objetos',
              code: 'src/app/javascript/exercises/convert.ts',
              snippet: true,
            },
            {
              id: 'filter',
              name: 'Buscar usuarios por edad',
              description:
                'Crea una función permita buscar usuarios que su edad sea >= 20 y < 30. Ordena el resultado por edad de manera descendente.',
              code: 'src/app/javascript/exercises/filter.ts',
              snippet: true,
            },
          ],
        },
        {
          id: 'senior',
          name: 'Nivel Avanzado',
          description:
            'Incluye ejerccios relacionadas con promesas, iteradores, generadores, event loop, módulos, etc.',
          exercises: [
            {
              id: 'sort-without-sort',
              name: 'Ordenar un arreglo de 0s, 1s y 2s',
              description:
                'Crear una función que ordene un arreglo de números de manera ascendente. El arreglo solo puede incluir los números: 0, 1 ó 2. No puedes utilizar el método Array.prototype.sort()',
              code: 'src/app/javascript/exercises/sort-without-sort.ts',
              snippet: true,
            },
            {
              id: 'eq-index',
              name: 'Buscar puntos de equilibrio',
              description:
                'Se conoce como punto de equilibro a un indice (posición en un arreglo, index) donde la suma de los números a su izquierda sea igual a la suma de los números a su derecha. Crear un función que retorne todos los puntos de equilibro de un arreglo. Puede existir varios puntos de equilibrio. El arreglo puede incluir números positivos y negativos',
              code: 'src/app/javascript/exercises/eq-index.ts',
              snippet: true,
            },
          ],
        },
      ],
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      logo: '/assets/typescript.svg',
      description:
        'Incluye preguntas de opción múltiple para evaluación tus conocimientos en TypeScript.',
      quizzes: [
        {
          id: 'junior',
          name: 'Nivel Principiante',
          postUrl: 'https://formspree.io/f/xzbornpw',
          description:
            'Incluye preguntas relacionadas con los tipos de datos, enums, arreglos, funciones, etc.',
          questions: [
            {
              id: 'data-type-number',
              question: 'Cómo declarar una variable numérica?',
              options: [
                'const number num = 1;',
                'const num: number = 1;',
                'A y B son correctas',
              ],
            },
            {
              id: 'data-type-string',
              question: 'Cómo declarar un arreglo de elementos tipo string?',
              options: [
                'const arr: Array<string> = ["a", "b", "c"];',
                'const arr: string[] = ["a", "b", "c"];',
                'A y B son correctas',
              ],
            },
            {
              id: 'data-type-string-infer',
              question:
                'Tomando cuenta la siguiente línea de código, qué tipo de dato infiere TypeScript para la variable "name"?',
              snippet: true,
              options: ['string', 'any'],
            },
            {
              id: 'data-type-any',
              question:
                'Tomando cuenta la siguientes líneas de código, qué tipo de dato infiere TypeScript para la propiedad "name" de la variable "user"?',
              snippet: true,
              options: ['string', 'any'],
            },
            {
              id: 'data-type-fun-param',
              question:
                'Cuál la correcta forma de definir el tipo de dato de una paramétro de una función?',
              options: [
                'function getById(string id) {}',
                'function getById(id: string) {}',
                'function getById(id string) {}',
              ],
            },
            {
              id: 'data-type-fun-return',
              question:
                'Cuál la correcta forma de definir el tipo de dato que la función retorna?',
              options: [
                'function string getId() { return "1234"; }',
                'function getId(): string { retun "1234"; }',
                'A y B son correctas',
              ],
            },
            {
              id: 'data-type-fun-optional-param',
              question:
                'Cuál la correcta forma de definir un paramétro opcional de una función?',
              options: [
                'function getValueOrDefault(value: string?) { return value ? value : "1234"; }',
                'function getValueOrDefault(string value?) { return value ? value : "1234"; }',
                'function getValueOrDefault(value?: string) { return value ? value : "1234"; }',
                'function getValueOrDefault(string? value?) { return value ? value : "1234"; }',
              ],
            },
            {
              id: 'data-type-union',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Hay un error de compilación la línea #1',
                'Hay un error de compilación la línea #2',
                'No hay errores de compilación',
              ],
            },
            {
              id: 'data-type-union-infer',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Hay un error de compilación la línea #1',
                'Hay un error de compilación la línea #2',
                'No hay errores de compilación',
              ],
            },
            {
              id: 'type-alias',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Se imprime: 100 100',
                'Hay un error de compilación en línea #5',
                'Hay un error de compilación en línea #6',
              ],
            },
          ],
        },
        {
          id: 'mid-level',
          name: 'Nivel Intermedio',
          postUrl: 'https://formspree.io/f/xzbornpw',
          description:
            'Incluye preguntas relacionadas con tipos, interfaces, módules, clases, etc.',
          questions: [
            {
              id: 'type-extending',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #8 se imprime: Teddy',
                'Hay un error de compilación en la línea #4',
              ],
            },
            {
              id: 'interface-extending',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #8 se imprime: Teddy',
                'Hay un error de compilación en la línea #4',
              ],
            },
            {
              id: 'interface-add-fields',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Hay errores de compilación',
                'En la línea #11 se imprime: lperez/1234',
              ],
            },
            {
              id: 'type-add-fields',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Hay errores de compilación',
                'En la línea #11 se imprime: lperez/1234',
              ],
            },
            {
              id: 'literals-infer',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Se imprime: https://example.com GET',
                'Hay un error de compilación en la línea #2',
              ],
            },
            {
              id: 'literals-const',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Se imprime: https://example.com GET',
                'Hay un error de compilación en la línea #1',
                'Hay un error de compilación en la línea #2',
                'B y C son correctas',
              ],
            },
            {
              id: 'readonly',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #15 se imprime: 42',
                'En la línea #15 se imprime: 43',
                'Hay un error de compilación en la línea #13',
                'Hay un error de compilación en la línea #14',
              ],
            },
            {
              id: 'index-signature',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'Hay un error de compilación en la línea #2',
                'Hay un error de compilación en la línea #3',
                'Hay un error de compilación en la línea #4',
                'No hay errores de compilación',
              ],
            },
          ],
        },
        {
          id: 'senior',
          name: 'Nivel Avanzado',
          postUrl: 'https://formspree.io/f/xzbornpw',
          description:
            'Incluye preguntas relacionadas genéricos, utilitarios, etc.',
          questions: [
            {
              id: 'implements-caution',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccionar la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #10 se imprime: true',
                'En la línea #10 se imprime: false',
                'Hay un error de compilación en la línea #5',
              ],
            },
            {
              id: 'override-methods',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccionar la respuesta correcta:',
              snippet: true,
              options: [
                'Hay un error de compilación en la línea #7',
                'En la línea #12 se imprime: Hello, world!',
                'En la línea #12 se imprime: Hello, planet!',
              ],
            },
            {
              id: 'init-order',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccionar la respuesta correcta:',
              snippet: true,
              options: [
                'Se imprime en consola: base',
                'Se imprime en consola: derived',
              ],
            },
            {
              id: 'member-visibility',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccionar la respuesta correcta:',
              snippet: true,
              options: [
                'En la línea #8 se imprime: 10',
                'En la línea #8 se imprime: 15',
                'Hay un error de compilación en la línea #8',
              ],
            },
            {
              id: 'generics',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccionar la respuesta correcta:',
              snippet: true,
              options: [
                'TypeScript infiere el tipo string para la variable a y el tipo any para la variable b',
                'TypeScript infiere el tipo any para la variable a y el tipo string para la variable b',
                'TypeScript infiere el tipo string para la variable a y tipo el string string para la variable b',
                'TypeScript infiere el tipo any para la variable a y el tipo any string para la variable b',
              ],
            },
          ],
        },
      ],
      exams: [],
    },
    {
      id: 'angular',
      name: 'Angular',
      logo: '/assets/angular.svg',
      description:
        'Incluye preguntas de opción múltiple y ejercicios prácticos para evaluación tus conocimientos en Angular.',
      quizzes: [
        {
          id: 'junior',
          name: 'Nivel Principiante',
          postUrl: 'https://formspree.io/f/xeqngyjw',
          description:
            'Incluye preguntas relacionadas con módulos, componentes, templates, directivas, servicios, inyección de dependencias, etc.',
          questions: [
            {
              id: 'what-is-angular',
              question: 'Qué incluye Angular en su plataforma de desarrollo?',
              options: [
                'Un conjunto de herramientas que ayudan en el proceso de desarrollo y pruebas',
                'Un conjunto de librerías',
                'Un framework basado en componentes para crear aplicaciones web',
                'Todas son correctas',
              ],
            },
            {
              id: 'what-is-a-module',
              question: 'Que es un módulo?',
              options: [
                'Es una clase TypeScript',
                'Utiliza el decorador @NgModule',
                'Todas son correctas',
              ],
            },
            {
              id: 'what-is-a-component',
              question: 'Que es un componente?',
              options: [
                'Es una clase TypeScript',
                'Utiliza el decorador @NgComponent',
                'Todas son correctas',
              ],
            },
            {
              id: 'what-is-a-template',
              question: 'Que es un template?',
              options: [
                'Definir que va a generar (render) el component',
                'Un template puede incluir código HTML',
                'Un template puede incluir sintaxis especial para insertar dinámicamente valores',
                'Todas son correctas',
              ],
            },
            {
              id: 'what-is-a-pipe',
              question: 'Qué es un pipe?',
              options: [
                'Una clase TypeScript',
                'Utiliza el decorator @Pipe',
                'Permite transformar valores utilizados en un template',
                'Todas son correctas',
              ],
            },
            {
              id: 'data-binding',
              question: 'Cuantos tipos de data-binding existen?',
              options: [
                'Property binding',
                'Event binding',
                'Interpolation',
                'Two-way binding',
                'A, B y D son correctas',
                'A, B, C y D son correctas',
              ],
            },
          ],
        },
        {
          id: 'mid-level',
          name: 'Nivel Intermedio',
          postUrl: 'https://formspree.io/f/xeqngyjw',
          description:
            'Incluye preguntas relacionadas con módulos, componentes, templates, directivas, servicios, inyección de dependencias, etc.',
          questions: [
            {
              id: 'css-selector',
              question:
                'Para qué sirve la propiedad "selector" del decorador @Component',
              options: [
                'Es un selector tipo css',
                'Cada vez que se encuentre el selector un template se van a instanciar el componente asociado',
                'Se puede definir multiples selectores para un componente',
                'A, B y C son correctas',
                'A y B son correctas',
              ],
            },
            {
              id: 'di-in-action',
              question: 'Cómo se inyecta una depedencia en una una clase?',
              options: [
                'Se agrega un parámetro al constructor de clase',
                'Se puede utilizar el decorador @Inject',
                'Se puede utilizar decoradores adicionales como: @Optional, @Host, @SkipSelf, @Self',
                'Todas son correctas',
              ],
            },
            {
              id: 'forms',
              question:
                'Cómo podemos manejar formularios HTML? Qué tipos de enfoques nos proporciona Angular?',
              options: [
                'Reactive forms',
                'Template-driven forms',
                'A y B son correctas',
              ],
            },
            {
              id: 'http-client',
              question:
                'Qué necesitamos hacer antes de utilizar la clase HttpClient?',
              options: [
                'Importar el módulo HttpClientModule',
                'Injectar la dependencia de la clase HttpClient agregar un parámetro en el constructor',
                'A y B son correctas',
              ],
            },
            {
              id: 'http-get',
              question:
                'Que tipo de objecto retorna el método HttpClient.get()?',
              options: ['Promise', 'Observable', 'A y B son correctas'],
            },
          ],
        },
        {
          id: 'senior',
          name: 'Nivel Avanzado',
          postUrl: 'https://formspree.io/f/xeqngyjw',
          description:
            'Incluye preguntas relacionadas con módulos, componentes, templates, directivas, servicios, inyección de dependencias, etc.',
          questions: [
            {
              id: 'root-module',
              question:
                'Una aplicación angular puede tener más de un módulo root?',
              options: ['Verdadero', 'False'],
            },
            {
              id: 'root-component',
              question:
                'Una aplicación angular puede tener más de un componente root?',
              options: ['Verdadero', 'False'],
            },
            {
              id: 'input-binding',
              question:
                'Cómo podemos pasar datos desde un componente padre a un componente hijo?',
              options: [
                'Creando un propiedad con el decorador @Input()',
                'Creando un propiedad con el decorador @Param()',
                'Creando un propiedad con el decorador @Argument()',
              ],
            },
            {
              id: 'event-emitter',
              question:
                'Cómo puede un componente padre escuchar eventos emitidos por un componente hijo?',
              options: [
                'Creando un propiedad con el decorador @EventEmitter()',
                'Creando un propiedad con el decorador @Event()',
                'Creando un propiedad con el decorador @Output()',
              ],
            },
          ],
        },
      ],
      exams: [
        {
          id: 'junior',
          name: 'Nivel Principiante',
          description:
            'Incluye ejercicios relacionados con componentes, data binding, inyección de dependencias. etc.',
          exercises: [
            {
              id: 'echo',
              name: 'Echo',
              description:
                'Crear un componente que incluya los tags "input" y "p". Al ingresar un valor en el "input" el contenido del elemento "p" debe ser actualizado automáticamente con el valor del "input".',
              code: 'src/app/angular/echo/',
              snippet: true,
            },
            {
              id: 'list',
              name: 'Lista',
              description:
                'Mostrar los personajes de "starwars" en una lista (ul > li). Utiliza la clase "StarwarsService" para injectar el servicio en el componente y ejecuta la función "getList" para obtener la lista de personajes.',
              code: 'src/app/angular/list/',
              snippet: true,
            },
          ],
        },
        {
          id: 'mid-level',
          name: 'Nivel Intermedio',
          description:
            'Incluye ejercicios relacionados con formularios, observable, validaciones, etc.',
          exercises: [
            {
              id: 'sign-up',
              name: 'Registrarse',
              description:
                'Crear un formulario de registro. Utilizar la clase "AuthService" para injectar el servicio en el componente y ejecutar la función "signUp" para crear un cuenta.',
              code: 'src/app/angular/sign-up/',
              snippet: true,
            },
            {
              id: 'thanks',
              name: 'Routing',
              description:
                'Una vez creado el formulario de registro y utilizar el método "AuthService.signUp(user)" (Ejercicio Anterior). Redireccionar a la ruta "/angular/thanks" cuando el registro haya sido exitoso.',
              code: 'src/app/angular/sign-up/, src/app/angular/thanks/',
              snippet: true,
            },
          ],
        },
        {
          id: 'senior',
          name: 'Nivel Avanzado',
          description:
            'Incluye ejercicios relacionados con formularios, routing, validaciones, http-client, etc.',
          exercises: [
            {
              id: 'games',
              name: 'Juegos',
              description:
                'Esta disponible un API de "juegos". La url base es "/api/games" y permite utilizar los métodos HTTP: GET, POST, PUT, y DELETE. Utilizar los componentes GameListing, GameNew y GameDetail para listar, crear, actualizar y eliminar (CRUD) juegos.',
              code: 'src/app/angular/game-listing/, src/app/game-new, src/app/game-detail',
              snippet: true,
            },
          ],
        },
      ],
    },
    {
      id: 'html',
      name: 'HTML',
      logo: '/assets/html.svg',
      description:
        'Incluye preguntas de opción múltiple y ejercicios prácticos para evaluación tus conocimientos en HTML.',
      quizzes: [
        {
          id: 'junior',
          name: 'Nivel Principiante',
          description:
            'Incluye preguntas relacionadas con tags, elementos block/inline, elementos semantic/non-semantic, atributos tipo data-*. atributo alt, altributo lang, scripts',
          postUrl: 'https://formspree.io/f/moqrwwqk',
          questions: [
            {
              id: 'inline-tags',
              question: 'Selecionar los elementos "inline"',
              options: ['h1, p, ul, ol, li', 'span, a, strong, i, img'],
            },
            {
              id: 'block-tags',
              question: 'Selecionar los elementos tipo "block"',
              options: ['h1, p, ul, ol, li', 'span, a, strong, i, img'],
            },
            {
              id: 'semantic-tags',
              question: 'Selecciona los elementos tipo "semantic"?',
              options: [
                'form',
                'article',
                'table',
                'figure',
                'B y D son elementos tipo "semantic"',
                'Todos son elementos tipo "semantic"',
              ],
            },
            {
              id: 'header-tag',
              question:
                'Cuantos elementos "header" puede/debe tener un documento HTML?',
              options: ['Puede tener más de uno', 'Debe tener sólo uno'],
            },
            {
              id: 'main-tag',
              question:
                'Cuantos elementos "main" puede/debe tener un documento HTML?',
              options: ['Puede tener más de uno', 'Debe tener sólo uno'],
            },
            {
              id: 'script',
              question:
                'Cuál es la manera correcta de utilizar el tag "script"',
              options: [
                '<script href="myscript.js"></script>',
                '<script source="myscript.js"></script>',
                '<script async="myscript.js"></script>',
                '<script src="myscript.js"></script>',
                '<script defer="myscript.js"></script>',
                '<script link="myscript.js"></script>',
              ],
            },
            {
              id: 'img-alt',
              question:
                'Cuándo podemos omitir el uso del atributo "alt" en imagenes?',
              options: [
                'alt es un atributo que podemos omitir siempre',
                'alt es un atributo que podemos omitir cuando la imágen solo sirve para propósitos decorativos',
              ],
            },
            {
              id: 'script-defer',
              question:
                'Cuál es el objetivo del atributo defer en el tag script?',
              snippet: true,
              options: [
                'Pausa el proceso de "parsing" del código HTML hasta que el script se ejecute',
                'Descarga el script luego de que el proceso de "parsing" del código HTML termine',
                'Ejecuta el script luego de que el proceso de "parsing" del código HTML termine',
              ],
            },
            {
              id: 'script-async',
              question:
                'Cuál es el objetivo del atributo async en el tag script?',
              snippet: true,
              options: [
                'Pausa el proceso de "parsing" del código HTML hasta que el script se ejecute',
                'Descarga el script luego de que el proceso de "parsing" del código HTML termine',
                'Ejecuta el script luego de que el proceso de "parsing" del código HTML termine',
              ],
            },
            {
              id: 'css-link',
              question:
                'Cuál es la manera correcta de incluir una hoja de estilos?',
              options: [
                '<link style="style.css">',
                '<style link="style.css">',
                '<link rel="stylesheet" href="style.css">',
              ],
            },
          ],
        },
        {
          id: 'mid-level',
          name: 'Nivel Intermedio',
          description:
            'Incluye preguntas relacionadas con atributos meta tags, responsive, img/picture, elementos de formulario, etc.',
          postUrl: 'https://formspree.io/f/moqrwwqk',
          questions: [
            {
              id: 'input-type',
              question:
                'Qué valor no es válido para el atributo type en un tag input?',
              options: [
                '<input type="week">',
                '<input type="color">',
                '<input type="tel">',
                '<input type="num">',
              ],
            },
            {
              id: 'picture',
              question:
                'Tomando en cuenta las siguientes líneas de código, seleccionar la respuesta correcta:',
              snippet: true,
              options: [
                'Se descargan los dos archivos img-1.jpg y img-2.jpg, pero solo se muestra un archivo dependiendo del tamaño del dispositivo',
                'Se descarga el archivos img-1.jpg si el ancho del dispositivo es menor a 800px',
                'Se descarga el archivos img-2.jpg si el ancho del dispositivo es menor a 800px',
                'Se descarga el archivos img-1.jpg si el ancho del dispositivo es mayor a 800px',
                'Se descarga el archivos img-2.jpg si el ancho del dispositivo es mayor a 800px',
                'C y D son correctas',
                'Todas son incorrectas',
              ],
            },
            {
              id: 'label',
              question:
                'Que atributo se utilizara para definir que una etiqueta (label) esta asociada a otro elemento?',
              options: ['htmlFor', 'for', 'id', 'name'],
            },
            {
              id: 'new-inputs',
              question: 'Qué tag no es válido en HTML?',
              options: ['range', 'meter', 'progress', 'select', 'textarea'],
            },
            {
              id: 'checkbox',
              question: 'Cuál es la forma correcta de crear un checkbox?',
              options: [
                '<input type="checkbutton">',
                '<input type="checked">',
                '<input type="checkbox">',
                '<checkbox >',
              ],
            },
            {
              id: 'novalidate',
              question:
                'Que atributo del tag form podemos utilizar para NO ejecutar las validaciones de un formulario?',
              options: ['formnovalidate', 'skipvalidations', 'novalidate'],
            },
            {
              id: 'formnovalidate',
              question:
                'Que atributo de un button[type=submit] podemos utilizar para NO ejecutar las validaciones de un formulario?',
              options: ['formnovalidate', 'skipvalidations', 'novalidate'],
            },
            {
              id: 'disabled',
              question:
                'Que atributo del tag input podemos utilizar para definir que el valor no puede ser modificado y evitar que el valor sea enviado al servidor?',
              options: ['readonly', 'disabled', 'invalid'],
            },
            {
              id: 'radio-group',
              question:
                'Tomando en cuenta las siguientes líneas de código, cómo podemos crear un radio group en HTML?',
              snippet: true,
              options: [
                'La "Alternativa 1" es correcta',
                'La "Alternativa 2" es correcta',
                'La "Alternativa 1" y "Alternativa 2" son correctas',
                'La "Alternativa 1" y "Alternativa 2" son incorrectas',
              ],
            },
            {
              id: 'select',
              question:
                'Que atributo del tag option podemos para definir la opción pre-seleccionada dentro de un select?',
              options: ['checked', 'default', 'selected'],
            },
          ],
        },
        {
          id: 'senior',
          name: 'Nivel Avanzado',
          description:
            'Incluye preguntas relacionadas con ARIA, rendimiento, rendering, dirección del texto, etc.',
          postUrl: 'https://formspree.io/f/moqrwwqk',
          questions: [
            {
              id: 'hidden-image',
              question:
                'Tomando en cuenta la siguientes líneas de código, seleccione la respuesta correcta:',
              snippet: true,
              options: [
                'El navegador intenta descargar el archivo img-1.jpg cuando la página se carga',
                'El navegador NO intenta descargar el archivo img-1.jpg cuando la página se carga',
                'El navegador intenta descargar el archivo img-2.jpg cuando la página se carga',
                'El navegador NO intenta descargar el archivo img-2.jpg cuando la página se carga',
                'A y C son correctas',
                'B y D son correctas',
              ],
            },
            {
              id: 'search-engine',
              question:
                'Qué utilizan los motores de búsqueda para indexar el contenido de una página?',
              snippet: true,
              options: [
                'El título de la página definido por el tag <title>',
                'El meta tag "description"',
                'Los tags h1, h2, h3, h4, h5 y h6',
                'El atributo "alt" de las imágenes',
                'El meta tag "robots"',
                'Los tags semánticos (semantics) de la página',
                'D es incorrecta',
                'F es incorrecta',
                'Todas son correctas',
              ],
            },
            {
              id: 'attribute-property',
              question:
                'Cuál es la diferencia entre propiedades y atributos en HTML?',
              snippet: true,
              options: [
                'Los atributos son definidos en HTML y las propiedades son definidas por el DOM',
                'El valor de un atributo es constante y el valor de una propiedad es variable',
                'A y B son correctas',
                'A y B son incorrectas',
              ],
            },
            {
              id: 'label',
              question:
                'Tomando en cuenta las siguientes líneas de código, selecciona la respuesta correcta:',
              snippet: true,
              options: [
                'Alternativa 1 y Alternativa 2 son correctas',
                'El atributo "for" en el tag "label" no es necesario en la Alternativa 1',
                'El atributo "for" en el tag "label" no es necesario en la Alternativa 2',
              ],
            },
          ],
        },
      ],
      exams: [
        {
          id: 'forms',
          name: 'Fomularios',
          description: 'Incluye ejercicios relacionados con formularios HTML',
          exercises: [
            {
              id: 'form-inputs',
              name: 'Formulario HTML',
              description:
                'Crear un formulario HTML que incluya los siguientes controles:',
              code: '/src/app/html/form/form.component.html',
              snippet: true,
            },
          ],
        },
      ],
    },
    {
      id: 'css',
      name: 'CSS',
      logo: '/assets/css.svg',
      description:
        'Incluye preguntas de opción múltiple y ejercicios prácticos para evaluación tus conocimientos en CSS.',
      quizzes: [
        {
          id: 'junior',
          name: 'Nivel Principiante',
          description:
            'Incluye preguntas relacionadas con margenes, bordes, colores, jerarquía, etc.',
          postUrl: 'https://formspree.io/f/xgedyyep',
          questions: [
            {
              id: 'selectors',
              question:
                'Tomando en cuenta las siguientes líneas de código, qué color se usa para "Texto 1" y "Texto 2"?',
              snippet: true,
              options: [
                '"Texto 1" es rojo',
                '"Texto 2" es rojo',
                '"Texto 1" es azul',
                '"Texto 2" es azul',
                'A y D',
                'B y C',
              ],
            },
            {
              id: 'home-selector',
              question:
                'Tomando en cuenta las siguientes líneas de código, qué elementos usan color azul?',
              snippet: true,
              options: ['P1 y P3', 'P1, P3 y P4', 'P3 y P4'],
            },
            {
              id: 'rem-unit',
              question: 'En qué se basa la unidad "rem"?',
              options: [
                'La unidad rem es relativa al font-size del tag "p"',
                'La unidad rem es relativa al font-size del tag que contiene el elemento (padre)',
                'La unidad rem es relativa al font-size del elemento root de la página',
              ],
            },
            {
              id: 'margin-vs-padding',
              question:
                'Cuál es la diferencia entre las propiedades "margin" y "padding"?',
              options: [
                'La propiedad "margin" agrega espacio al exterior y al interior del elemento. La prodiedad "padding" agrega espacio solo al interior del elemento.',
                'La propiedad "margin" agrega espacio al exterior del elemento. La prodiedad "padding" agrega espacio al interior del elemento.',
                'La propiedad "padding" agrega espacio al exterior del elemento. La prodiedad "margin" agrega espacio al interior del elemento.',
              ],
            },
            {
              id: 'attribute-selector',
              question:
                'Que regla NO definirá el color rojo para los links cuyo atributo "href" termine con "dominio.com"?',
              options: [
                'a[href$="dominio.com"] { color: red; }',
                'a[href="*dominio.com"] { color: red; }',
                'a[href*="dominio.com"] { color: red; }',
              ],
            },
            {
              id: 'cascading',
              question:
                'Tomando en cuenta las siguientes líneas de código, qué color será utilizado el link?',
              snippet: true,
              options: ['green', 'yellow', 'blue', 'red'],
            },
            {
              id: 'text-spacing',
              question:
                'Qué propiedad se utiliza para ajustar el espacio entre caracteres?',
              options: [
                'letter-spacing',
                'text-transform',
                'font-variant',
                'font-style',
              ],
            },
            {
              id: 'first-type-of',
              question:
                'Tomando en cuenta el siguiente ejemplo, qué color es utizado para "Text 1"?',
              snippet: true,
              options: ['blue', 'green', 'red', 'yellow'],
            },
          ],
        },
        {
          id: 'mid-level',
          name: 'Nivel Intermedio',
          description:
            'Incluye preguntas relacionadas con transformaciones, animaciones, layout, etc.',
          postUrl: 'https://formspree.io/f/xgedyyep',
          questions: [
            {
              id: 'scale',
              question:
                'Que regla permite agrandar la imagen un 50% al pasar con el mouse sobre la imagen (hover)?',
              snippet: true,
              options: [
                'img#photo:hover { scale: 0.5; }',
                'img#photo:hover { transform: scale(0.5); }',
                'img#photo { hover-scale: 0.5; }',
              ],
            },
            {
              id: 'grid-unit',
              question:
                'Tomando en cuenta el siguiente ejemplo, cuál es tamaño de cada columna?',
              snippet: true,
              options: [
                'La primera columna 50px. La segunda columna 50px. La tercera columna 100px',
                'La primera columna 50px. La segunda columna 150px. La tercera columna 300px',
                'La primera columna 50px. La segunda columna 300px. La tercera columna 150px',
                'La primera columna 50px. La segunda columna 500px. La tercera columna 1000px',
              ],
            },
            {
              id: 'flow-direction',
              question:
                'Qué valor debemos usar en la propiedad "flow-direction" para distribuir los elementos en base al siguiente ejemplo?',
              snippet: true,
              options: [
                'Example 1: flex-direction: row; Example 2: flex-direction: row-reverse; Example 3: flex-direction: column; Example 4: flex-direction: column-reverse;',
                'Example 1: flex-direction: row-reverse; Example 2: flex-direction: row; Example 3: flex-direction: column-reverse; Example 4: flex-direction: column;',
                'Example 1: flex-direction: row; Example 2: flex-direction: reverse-row; Example 3: flex-direction: column; Example 4: flex-direction: reverse-column;',
                'Example 1: flex-direction: column; Example 2: flex-direction: column-reverse; Example 3: flex-direction: row; Example 4: flex-direction: row-reverse;',
              ],
            },
            {
              id: 'justify-content',
              question:
                'Cuando usamos flexbox, podemos utilizar la propiedad justify-content para distribuir el espacio disponible entre los elementos a lo largo del eje principal (main axis). Qué valor podemos usar para distribuir los elementos como la siguiente figura?',
              snippet: true,
              options: [
                'justify-content: space-around;',
                'justify-content: center;',
                'justify-content: space-between;',
                'justify-content: auto;',
              ],
            },
            {
              id: 'flex-column',
              question:
                'Cuando usamos flexbox, qué propidad y valor podemos utilizar para mostrar los elementos en una columna?',
              options: [
                'flex-flow: column;',
                'flex-column: auto;',
                'flex-direction: column;',
                'A y C son correctas',
              ],
            },
          ],
        },
        {
          id: 'senior',
          name: 'Nivel Avanzado',
          postUrl: 'https://formspree.io/f/xgedyyep',
          description:
            'Incluye preguntas relacionadas con responsive design, etc.',
          questions: [
            {
              id: 'approach',
              question:
                'Que estratégia es recomendada utilizar para crear sitios web responsivos (responsive websites)?',
              options: ['Mobile First', 'Desktop First'],
            },
            {
              id: 'approach-1',
              question:
                'En el siguiente ejemplo que estrategia se esta utilizando?',
              snippet: true,
              options: ['Mobile First', 'Desktop First'],
            },
            {
              id: 'approach-2',
              question:
                'En el siguiente ejemplo que estrategia se esta utilizando?',
              snippet: true,
              options: ['Mobile First', 'Desktop First'],
            },
            {
              id: 'local-variable',
              question:
                'Tomando en cuenta el siguiente ejemplo, qué color es el background que utiliza el div2?',
              snippet: true,
              options: ['red', 'white', 'black'],
            },
            {
              id: 'global-variable',
              question:
                'Tomando en cuenta el siguiente ejemplo, qué color es el background que utiliza el div2?',
              snippet: true,
              options: ['red', 'white', 'black'],
            },
          ],
        },
      ],
      exams: [
        {
          id: 'general',
          name: 'Responsive Design',
          description: 'Incluye ejercicios relacionados con diseño responsivo',
          exercises: [
            {
              id: 'gallery',
              name: 'Galería de Imágenes',
              description:
                'Tenemos disponibles 10 imágenes. Para "móviles" queremos mostrar las imágenes en una sola columna. Para "tablets" queremos mostrar 2 columnas. Para "Desktop" queremos utilizar 3 columnas.',
              code: 'src/app/css/gallery.component.html, src/app/css/gallery.component.css',
              snippet: true,
            },
          ],
        },
      ],
    },
  ];

  constructor() {}

  getPackages(): Observable<Package[]> {
    return of(this.packages);
  }

  getPackage(packageId: string): Observable<Package | undefined> {
    return of(this.packages.find(({ id }) => id === packageId));
  }

  getQuiz(packageId: string, quizId: string): Observable<Quiz | undefined> {
    return this.getPackage(packageId).pipe(
      map((p) => {
        const quiz = p?.quizzes.find((quiz) => quiz.id === quizId);
        if (quiz) {
          return {
            ...quiz,
            package: p,
          };
        }
        return quiz;
      })
    );
  }

  getExam(packageId: string, examId: string): Observable<Exam | undefined> {
    return this.getPackage(packageId).pipe(
      map((p) => {
        const exam = p?.exams.find((exam) => exam.id === examId);
        if (exam) {
          return {
            ...exam,
            package: p,
          };
        }
        return exam;
      })
    );
  }

  getExercise(
    packageId: string,
    examId: string,
    exerciseId: string
  ): Observable<Exercise | undefined> {
    return this.getPackage(packageId).pipe(
      map((p) => {
        let exam = p?.exams.find((exam) => exam.id === examId);
        let exercise: Exercise | undefined;
        if (exam) {
          exam = {
            ...exam,
            package: p,
          };
          exercise = exam.exercises.find(
            (exercise) => exercise.id === exerciseId
          );
          if (exercise) {
            exercise = {
              ...exercise,
              exam,
            };
          }
        }
        return exercise;
      })
    );
  }
}
