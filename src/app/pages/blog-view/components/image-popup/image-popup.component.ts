import { Component, OnInit } from '@angular/core';
import { ImagePopupService } from '../../../../services/image-popup/image-popup.service';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.scss']
})
export class ImagePopupComponent implements OnInit {

  image: any;

  constructor(
    public imgPopupSvc: ImagePopupService
  ) { }

  ngOnInit() {
    this.imgPopupSvc.currentData.subscribe(
      res => {
        console.log('from observable: ', res);
        this.image = res.image;
      })
      .unsubscribe();
  }
}
