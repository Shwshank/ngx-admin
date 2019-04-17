import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-js',
  templateUrl: './js.component.html',
})
export class JsComponent {

  constructor(){}
  tree_pie_data_emitter = new EventEmitter<any>();

}
