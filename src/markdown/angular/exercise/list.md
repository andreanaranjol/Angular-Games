```ts
// ver archivo src/app/angular/starwars.service.ts
@Injectable({ providedIn: 'root' })
export class StarwarsService {
  list: Character[] = [...];

  getList(): Character[] {
    return this.list;
  }
}
```

```html
<!--ver archivo src/app/angular/list/list.component.html-->
<ul class="list-decimal list-inside">
  <li>Luke Skywalker</li>
  <li>C-3PO</li>
  <li>R2-D2</li>
</ul>
```
