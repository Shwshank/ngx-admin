import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { OutlineData } from '../../../@core/data/visitors-analytics';

@Component({
  selector: 'ngx-skill-graph',
  styleUrls: ['./skill-graph.component.scss'],
  templateUrl: './skill-graph.component.html',
})

export class SkillGraph implements OnInit  {

  constructor() {}

  ngOnInit(){}
}
