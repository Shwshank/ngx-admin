import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Camera, SecurityCamerasData } from '../data/security-cameras';

@Injectable()
export class SecurityCamerasService extends SecurityCamerasData {

  private cameras: Camera[] = [
    {
      title: 'Camera #11',
      source: 'assets/images/camera1.jpg',
    },
    {
      title: 'Camera #22',
      source: 'assets/images/camera2.jpg',
    },
    {
      title: 'Camera #33',
      source: 'assets/images/camera3.jpg',
    },
    {
      title: 'Camera #44',
      source: 'assets/images/camera4.jpg',
    },
  ];

  getCamerasData(): Observable<Camera[]> {
    return observableOf(this.cameras);
  }
}
