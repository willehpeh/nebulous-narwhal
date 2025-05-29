import { Component } from '@angular/core';
import { ItemListComponent } from '@nebulous-narwhal/nebulous-narwhal-ui';

@Component({
  selector: 'app-root',
  template: `
    <h1>test</h1>
    <narwhal-item-list/>
  `,
  imports: [ItemListComponent]
})
export class AppComponent {}
