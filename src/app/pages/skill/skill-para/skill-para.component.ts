import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { OutlineData } from '../../../@core/data/visitors-analytics';

@Component({
  selector: 'ngx-skill-para',
  styleUrls: ['./skill-para.component.scss'],
  templateUrl: './skill-para.component.html',
})

export class SkillPara implements OnInit  {

  constructor() {}

  ngOnInit(){}
}
