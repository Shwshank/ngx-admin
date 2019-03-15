import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { OutlineData } from '../../../@core/data/visitors-analytics';

@Component({
  selector: 'ngx-skill-word-cloud',
  styleUrls: ['./skill-word-cloud.component.scss'],
  templateUrl: './skill-word-cloud.component.html',
})

export class SkillWordCloud implements OnInit  {

  constructor() {}

  ngOnInit(){}
}
