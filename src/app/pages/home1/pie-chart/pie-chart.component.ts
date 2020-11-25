import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { OutlineData } from '../../../@core/data/visitors-analytics';
import { JsComponent } from "../../js/js.component"

@Component({
  selector: 'ngx-pie-chart',
  styleUrls: ['./pie-chart.component.scss'],
  templateUrl: './pie-chart.component.html',
})

export class PieChartComponent implements OnInit  {

  map : any = [];
  mapLoaded = false;
  option1: any;
  option2: any;
  treeData: any;
  data1 : any = [];
  title: any = "";

  constructor(private jsComponent: JsComponent) {
    this.data1 = [
      {value:95, name:'Frontend'},
      {value:80, name:'Backend'},
      {value:75, name:'Devops'}
    ]
    this.title = "JS"
    this.getGraph();
  }

  ngOnInit(){
    this.jsComponent.tree_pie_data_emitter.subscribe(data=>{
      console.log(data)
      this.data1 = data.pie;
      this.title = data.title

      this.getGraph();
    })
  }

  getGraph() {
    this.option1 = {

          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },

          visualMap: {
              show: false,
              min: 10,
              max: 150,
              inRange: {
                  colorLightness: [0, 1]
              }
          },
          series : [
              {
                  name:'Proficiency',
                  type:'pie',
                  radius : '85%',
                  center: ['50%', '50%'],
                  data: this.data1,
                  roseType: 'radius',
                  label: {
                      normal: {
                          textStyle: {
                              color: 'gray'
                          }
                      }
                  },
                  labelLine: {
                      normal: {
                          lineStyle: {
                              color: 'gray'
                          },
                          smooth: 0.2,
                          length: 5,
                          length2: 5
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: '#FFB124'
                      }
                  },

                  animationType: 'scale',
                  animationEasing: 'elasticOut',
                  animationDelay: function (idx) {
                      return Math.random() * 200;
                  }
              }
          ]
      };
  }

}
