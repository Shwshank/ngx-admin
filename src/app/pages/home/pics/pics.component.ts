import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'ngx-pics',
  styleUrls: ['./pics.component.scss'],
  templateUrl: './pics.component.html',
})
export class PicsComponent implements OnDestroy {

  private alive = true;

  cameras: any;
  selectedCamera: any;
  isSingleView = false;

  cam: any = [
    {title: "", source: "assets/images/sam0.jpeg"},
    {title: "", source: "assets/images/sam1.jpg"},
    {title: "", source: "assets/images/sam2.jpg"},
    {title: "", source: "assets/images/sam3.jpg"}
  ];

  constructor() {
        this.cameras = this.cam;
        this.selectedCamera = this.cam[0];
  }

  selectCamera(camera: any) {
    this.selectedCamera = camera;
    this.isSingleView = true;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
