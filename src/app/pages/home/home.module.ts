import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartModule } from 'angular2-chartjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { HomeComponent } from './home.component';
import { ThemeModule } from '../../@theme/theme.module';
import { IntroParaComponent } from './intro-para/intro-para.component';
import { PicsComponent } from './pics/pics.component';

@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations:[
    HomeComponent,
    IntroParaComponent,
    PicsComponent
  ],
  providers: [

  ]
})
export class HomeModule { }
