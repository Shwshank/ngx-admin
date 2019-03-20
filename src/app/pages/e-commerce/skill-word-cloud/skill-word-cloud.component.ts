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

  map : any = [];
  mapLoaded = false;
  option1: any;
  option2: any;
  treeData: any;

  constructor() {

    this.getGraph();
  }

  ngOnInit(){}

  getGraph() {
    this.option1 = {

          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },

          visualMap: {
              show: false,
              min: 80,
              max: 600,
              inRange: {
                  colorLightness: [0, 1]
              }
          },
          series : [
              {
                  name:'Pie Chart',
                  type:'pie',
                  radius : '85%',
                  center: ['50%', '50%'],
                  data:[
                      {value:335, name:'value 1'},
                      {value:310, name:'value 2'},
                      {value:274, name:'value 3'},
                      {value:235, name:'value 4'},
                      {value:400, name:'value 5'}
                  ].sort(function (a, b) { return a.value - b.value; }),
                  roseType: 'radius',
                  label: {
                      normal: {
                          textStyle: {
                              color: 'rgba(255, 255, 255, 0.3)'
                          }
                      }
                  },
                  labelLine: {
                      normal: {
                          lineStyle: {
                              color: 'rgba(255, 255, 255, 0.3)'
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
