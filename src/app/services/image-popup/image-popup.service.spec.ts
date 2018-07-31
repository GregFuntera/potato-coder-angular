import { TestBed, inject } from '@angular/core/testing';

import { ImagePopupService } from './image-popup.service';

describe('ImagePopupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagePopupService]
    });
  });

  it('should be created', inject([ImagePopupService], (service: ImagePopupService) => {
    expect(service).toBeTruthy();
  }));
});
