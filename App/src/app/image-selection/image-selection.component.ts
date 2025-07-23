import { Component, EventEmitter, Output, signal } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';
import { imageDimentionsForCard } from '../../utils/image.utils';

@Component({
  selector: 'app-image-selection',
  imports: [ImageCropperComponent],
  templateUrl: './image-selection.component.html',
  styleUrl: './image-selection.component.css'
})

export class ImageSelectionComponent {

  imageChangedEvent: Event | null = null;
  croppedImage = signal<SafeUrl | string>('');
  cardImageDimensions = imageDimentionsForCard;
  askToSelect = true;
  showCropper = false;
  showPreview = false;
  @Output() croppingDoneEvent = new EventEmitter<SafeUrl | string>();

  constructor(private sanitizer: DomSanitizer) { }

  // a method that listens for change even trigged by image selection by users and renders the preview.
  imageSelected(event: Event) {

    this.showCropper = true;
    this.imageChangedEvent = event;
    this.askToSelect = false;
  }

  imageCropped(event: ImageCroppedEvent) {

    if (event.objectUrl)
      this.croppedImage.set(this.sanitizer.bypassSecurityTrustUrl(event.objectUrl));
  }

  clearCropperImage() {

    this.imageChangedEvent = null;
    console.log("PreviewImage data: ", this.croppedImage());
    this.croppedImage.set("");
    setTimeout(() => {

      this.showCropper = false;
      this.askToSelect = true;
    });
  }

  croppingCompleted(){

    this.croppingDoneEvent.emit(this.croppedImage())
  }
}
