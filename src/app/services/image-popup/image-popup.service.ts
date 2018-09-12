import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Image } from '../../models/image.model';

@Injectable({
  providedIn: 'root'
})

export class ImagePopupService {
   /**TODO
    * ENHANCE IMAGE FOR MOBILE DEVICES
    */
  private dataSource = new BehaviorSubject<Image>(new Image());
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeImage(img: Image) {
    this.dataSource.next(img);
  }
}
