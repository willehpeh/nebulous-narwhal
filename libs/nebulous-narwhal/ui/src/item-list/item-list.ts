import { Component } from '@angular/core';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'narwhal-item-list',
  template: `
    <div cdkDropList>
      <div cdkDrag>Item 1</div>
    </div>
  `,
  imports: [CdkDropList, CdkDrag],
  styles: [],
})
export class ItemListComponent {}
