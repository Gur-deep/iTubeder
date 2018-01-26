import { Component, Input } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {
  @Input('data') data
  constructor() { }

}
