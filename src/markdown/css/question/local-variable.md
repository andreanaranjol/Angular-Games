```css
:root {
}
#div1 {
  --my_bg: red;
  background-color: var(--my_bg, white);
}
#div2 {
  background-color: var(--my_bg, black);
}
```

```html
<div id="div1">Div 1</div>
<div id="div2">Div 2</div>
```
