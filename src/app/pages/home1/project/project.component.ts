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
    {title: "Mobile First Web Apps", source: "assets/images/project/pwa1.jpg"},
    {title: "Progessive Web Apps", source: "assets/images/project/pwa.png"},
    {title: "Coal India Project", source: "assets/images/project/coal1.png"},
    {title: "Blockchain based project", source: "assets/images/project/nabl1.png"}
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
