import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ChartModule } from 'angular2-chartjs';

import { ThemeModule } from '../../@theme/theme.module';
import { JsComponent } from './js.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TreeGraph } from './tree-graph/tree-graph.component';
import { JSStickersComponent } from './js-stickers/js-stickers.component';
import { FrameworkContentComponent } from './framework-content/content.component';


@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,

  ],
  declarations: [
    JsComponent,
    TreeGraph,
    PieChartComponent,
    JSStickersComponent,
    FrameworkContentComponent
  ]
})
export class JsModule { }
