import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { OutlineData } from '../../../@core/data/visitors-analytics';

@Component({
  selector: 'ngx-org-list',
  styleUrls: ['./org-list.component.scss'],
  templateUrl: './org-list.component.html',
})

export class OrgListComponent implements OnInit  {

  constructor() {}

  ngOnInit(){}
}
