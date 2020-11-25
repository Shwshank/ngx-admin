import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { OutlineData } from '../../../@core/data/visitors-analytics';
import { JsComponent } from '../js.component';

@Component({
  selector: 'ngx-tree-graph',
  styleUrls: ['./tree-graph.component.scss'],
  templateUrl: './tree-graph.component.html',
})

export class TreeGraph implements OnInit  {

  map : any = [];
  mapLoaded = false;
  option1: any;
  option2: any;
  treeData: any;

  constructor(private jsComponent: JsComponent) {
    this.treeData = {
       "name": "JS",
       "id":0,
       "children": [
        {
         "name": "Frontend",
         "collapsed": true,
         "id":1,
         "children":[
           {"name": "Cool Stuffs",
            "id":4,
            "children": [
              {"name": "React"},
              {"name": "Redux"},
              {"name": "TDD"},
              {"name": "Next.JS"},
            ]
            },
           {"name": "HTML5"},
           {"name": "CSS3"},
         ]
        },
        {
         "name": "Backend",
         "collapsed": true,
         "id":2,
         "children":[
           {"name": "Node",
            "id":5,
            "children": [
              {"name": "Express"},
              {"name": "Mongoose"},
              {"name": "Redis"},
            ]
            }
         ]
        },
        {
         "name": "CICD",
         "collapsed": true,
         "id":3,
         "children":[
           {"name": "Jenkins"},
           {"name": "Gitlab"},
         ]
        }
      ]
    }
    this.getTree();
  }

  ngOnInit(){}

  getTree() {
       const xAxisData = []
       this.option2 = {
         /* color:['black'], */
         tooltip: {
           triggerOn: 'mousemove',
           trigger: 'item',
         },
         series: [
           {
             type: 'tree',
             data: [this.treeData],
             top: '0%',
             left: '10%',
             bottom: '0%',
             right: '20%',
             symbolSize: 10,
             label: {
               normal: {
                 position: 'left',
                 verticalAlign: 'middle',
                 align: 'right',
                 fontSize: 14,
                color:'white',
                backgroundColor:'#ff386a',
                borderColor: '#e20f44',
                borderWidth: 3,
                borderRadius: 25,
                padding:8,

               }
             },
             itemStyle:{
               color:'#7C90DB',
               borderColor:'#7C90DB'
             },
             lineStyle:{
               color:'#e20f44',
               type:'dashed',
               curveness:0.6,
               width:3,
               shadowBlur: 10,
               shadowColor: '#7C90DB',
               shadowOffsetY:10,
               shadowOffsetX:10,
             },/*
             tooltip:{
               backgroundColor:'rgba(0,0,0,0.7)',
               borderColor:'#000'
             }, */
             leaves: {
               label: {
                 normal: {
                   position: 'right',
                   verticalAlign: 'middle',
                   align: 'left'
                 }
               }
             },
             expandAndCollapse: true,
             animationDuration: 550,
             animationDurationUpdate: 750
           }
         ]
       }
     }

  onTreeEvent(event: any, type: string) {

    console.log(event)

    let data =[
      {
        title: "JS",
        pie:[
          {value:95, name:'Frontend'},
          {value:80, name:'Backend'},
          {value:75, name:'CICD'}
        ]
      },
      {
        title: "Frontend",
        pie:[
          {value:95, name:'Cool Stuffs'},
          {value:80, name:'HTML5'},
          {value:80, name:'CSS3'},
        ]
      },
      {
        title: "Backend",
        pie:[
          {value:80, name:'Node'},
        ],
      },
      {
        title: "CICD",
        pie:[
          {value:75, name:'Jenkins'},
          {value:65, name:'Gitlab'},
        ]
      },
      {
        title: "Cool Stuffs",
        pie:[
          {value:80, name:'React'},
          {value:85, name:'Redux'},
          {value:70, name:'TDD'},
          {value:75, name:'Next.JS'},
        ],
      },
      {
        title:"Backend",
        pie:[
          {value:80, name:'Express'},
          {value:70, name:'Mongoose'},
          {value:60, name:'Redis'},
        ]
      }
    ]

      if(event.data.id)
        this.jsComponent.tree_pie_data_emitter.emit(data[event.data.id])

  }

}
