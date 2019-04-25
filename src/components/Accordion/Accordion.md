```html
<ul is="hc-accordion" ref="accordion" multiple>
  <li is="hc-accordion-item">
    <span slot="header">Header</span>
    Content
  </li>
</ul>

<button @click="$refs.accordion.showAll()">Expand All</button>
<button @click="$refs.accordion.hideAll()">Collapse All</button>
```
