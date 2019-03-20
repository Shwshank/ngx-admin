import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { OutlineData } from '../../../@core/data/visitors-analytics';

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

  constructor() {
    this.treeData = {
 "name": "flare",
 "children": [
  {
   "name": "analytics",
   "collapsed": true,
   "children": [
    {
     "name": "cluster",
     "children": [
      {"name": "AgglomerativeCluster", "value": 3938},
      {"name": "CommunityStructure", "value": 3812},
      {"name": "HierarchicalCluster", "value": 6714},
      {"name": "MergeEdge", "value": 743}
     ]
    },
    {
     "name": "graph",
     "collapsed": true,
     "children": [
      {"name": "BetweennessCentrality", "value": 3534},
      {"name": "LinkDistance", "value": 5731},
      {"name": "MaxFlowMinCut", "value": 7840},
      {"name": "ShortestPaths", "value": 5914},
      {"name": "SpanningTree", "value": 3416}
     ]
    },
    {
     "name": "optimization",
     "collapsed": true,
     "children": [
      {"name": "AspectRatioBanker", "value": 7074}
     ]
    }
   ]
  },
  {
   "name": "animate",
   "collapsed": true,
   "children": [
    {"name": "Easing", "value": 17010},
    {"name": "FunctionSequence", "value": 5842},
    {
     "name": "interpolate",
     "children": [
      {"name": "ArrayInterpolator", "value": 1983},
      {"name": "ColorInterpolator", "value": 2047},
      {"name": "DateInterpolator", "value": 1375},
      {"name": "Interpolator", "value": 8746},
      {"name": "MatrixInterpolator", "value": 2202},
      {"name": "NumberInterpolator", "value": 1382},
      {"name": "ObjectInterpolator", "value": 1629},
      {"name": "PointInterpolator", "value": 1675},
      {"name": "RectangleInterpolator", "value": 2042}
     ]
    },
    {"name": "ISchedulable", "value": 1041},
    {"name": "Parallel", "value": 5176},
    {"name": "Pause", "value": 449},
    {"name": "Scheduler", "value": 5593},
    {"name": "Sequence", "value": 5534},
    {"name": "Transition", "value": 9201},
    {"name": "Transitioner", "value": 19975},
    {"name": "TransitionEvent", "value": 1116},
    {"name": "Tween", "value": 6006}
   ]
  },
  {
   "name": "data",
   "collapsed": true,
   "children": [
    {
     "name": "converters",
     "collapsed": true,
     "children": [
      {"name": "Converters", "value": 721},
      {"name": "DelimitedTextConverter", "value": 4294},
      {"name": "GraphMLConverter", "value": 9800},
      {"name": "IDataConverter", "value": 1314},
      {"name": "JSONConverter", "value": 2220}
     ]
    },
    {"name": "DataField", "value": 1759},
    {"name": "DataSchema", "value": 2165},
    {"name": "DataSet", "value": 586},
    {"name": "DataSource", "value": 3331},
    {"name": "DataTable", "value": 772},
    {"name": "DataUtil", "value": 3322}
   ]
  },
  {
   "name": "display",
   "collapsed": true,
   "children": [
    {"name": "DirtySprite", "value": 8833},
    {"name": "LineSprite", "value": 1732},
    {"name": "RectSprite", "value": 3623},
    {"name": "TextSprite", "value": 10066}
   ]
  },
  {
   "name": "flex",
   "collapsed": true,
   "children": [
    {"name": "FlareVis", "value": 4116}
   ]
  },
  {
   "name": "physics",
   "collapsed": true,
   "children": [
    {"name": "DragForce", "value": 1082},
    {"name": "GravityForce", "value": 1336},
    {"name": "IForce", "value": 319},
    {"name": "NBodyForce", "value": 10498},
    {"name": "Particle", "value": 2822},
    {"name": "Simulation", "value": 9983},
    {"name": "Spring", "value": 2213},
    {"name": "SpringForce", "value": 1681}
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
             bottom: '2%',
             right: '10%',
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
}
