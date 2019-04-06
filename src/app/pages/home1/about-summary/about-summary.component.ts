import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { OutlineData } from '../../../@core/data/visitors-analytics';

@Component({
  selector: 'ngx-about-summary',
  styleUrls: ['./about-summary.component.scss'],
  templateUrl: './about-summary.component.html',
})

export class AboutSummary implements OnInit  {

  constructor() {}

  ngOnInit(){}
}
