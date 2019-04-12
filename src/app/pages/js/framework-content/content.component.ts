import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { OutlineData } from '../../../@core/data/visitors-analytics';

@Component({
  selector: 'ngx-framework-content',
  styleUrls: ['./content.component.scss'],
  templateUrl: './content.component.html',
})

export class FrameworkContentComponent implements OnInit  {

  map : any = [];
  mapLoaded = false;
  option1: any;
  option2: any;
  treeData: any;

  constructor() {}
  ngOnInit(){}

}
