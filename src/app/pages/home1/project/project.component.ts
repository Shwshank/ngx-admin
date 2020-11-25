import { Component, OnDestroy } from '@angular/core';
import { Camera, SecurityCamerasData } from '../../../@core/data/security-cameras';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-project',
  styleUrls: ['./project.component.scss'],
  templateUrl: './project.component.html',
})
export class ProjectComponent implements OnDestroy {

  private alive = true;

  cameras: Camera[];
  selectedCamera: Camera;
  isSingleView = false;

  projects = [
    {
      title: "Ecommerce",
      desc1:'Next.js based ecommerce platform',
      desc2:'SEO Optimized pages and listing',
      desc3:'GraphQL for database, reduces API calls and DNS lookup time',
      source: "assets/images/project/ecommerce.png"
    },
    {
      title: "Progresive Web Apps",
      desc1:'Native app look & feel ',
      desc2:'Strategies for Low-network/ no-network ',
      desc3:'Never let users face Downasaurs. Delivered fast, responsive, highly engage-able platforms',
      source: "assets/images/project/pwa.png"
    },
    {
      title: "Data Visualization Dashboard",
      desc1:'Extensively worked on data visualization platforms ',
      desc2:'Resolved complicated use cases with interactive graphs and visual components',
      desc3:'Libraries - D3, three.js, Echarts, MS PowerBI platform',
      source: "assets/images/project/dashboard.gif"
    },
    {
      title: "Real time asset tracking",
      desc1:'GPS based live tracking of assets on dashboard',
      desc2:'Real time server-client communication using Socket.io',
      desc3:'Asset health monitoring using Microsoft IOT hub',
      source: "assets/images/project/tracking.gif"
    },
  ]

  constructor(private securityCamerasService: SecurityCamerasData) {
    this.securityCamerasService.getCamerasData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((cameras: Camera[]) => {

        // this.cameras = cameras;
        this.cameras = this.projects;
        console.log(this.cameras)
        this.selectedCamera = this.cameras[0];
      });
  }

  selectCamera(camera: any) {
    this.selectedCamera = camera;
    this.isSingleView = true;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
