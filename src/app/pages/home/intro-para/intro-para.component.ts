import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';

@Component({
  selector: 'ngx-intro-para',
  styleUrls: ['./intro-para.component.scss'],
  templateUrl: './intro-para.component.html',
})

export class IntroParaComponent implements OnDestroy {

  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  user: any;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService,
              private userService: UserData,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.sam);
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  github(){
    window.open("https://www.github.com/Shwshank", "_blank")
  }

  stackoverflow(){
    window.open("https://stackoverflow.com/users/7709912/shashank-b", "_blank")
  }

  linkedin(){
    window.open("https://www.linkedin.com/in/shashank-bhattacharya-58aa6879/", "_blank")
  }
}
