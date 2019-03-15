import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { OutlineData } from '../../../@core/data/visitors-analytics';

@Component({
  selector: 'ngx-skill-summary',
  styleUrls: ['./skill-summary.component.scss'],
  templateUrl: './skill-summary.component.html',
})

export class SkillSummary implements OnInit  {

  constructor() {}

  ngOnInit(){}
}
