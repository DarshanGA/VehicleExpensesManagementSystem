import { VehicleTypes } from "../app/models/vehicle-type.model";

export type DefaultImageType = {

    imageFor: VehicleTypes;
    imageLocalPath: string;
}

export const defaultImages: DefaultImageType[] = [
    { imageFor: VehicleTypes.BIKE, imageLocalPath: "BikeDefaultImage.jpg" },
    { imageFor: VehicleTypes.CAR, imageLocalPath: "CarDefaultImage.jpg" },
    { imageFor: VehicleTypes.EXCAVATOR, imageLocalPath: "ExcavatoryDefaultImage.jpg" },
    { imageFor: VehicleTypes.OTHERS, imageLocalPath: "OtherVehiclesDefaultImage.jpg" },
    { imageFor: VehicleTypes.PICKUP, imageLocalPath: "PickupTruckDefautImage.jpg" },
    { imageFor: VehicleTypes.TRACTOR, imageLocalPath: "TractorDefaultImage.jpg" },
    { imageFor: VehicleTypes.TRUCK, imageLocalPath: "TruckDefaultImage.jpg" }
]

export const imageDimentionsForCard = {

    widthInPx: 286,
    heightInPx: 286,
    ratioNuma: 1,
    ratioDeNoma: 1
}

export class ImageUtils {


    public static resizeImage(image: HTMLImageElement, maxWidth: number, maxHeight: number): HTMLCanvasElement {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Keep aspect ratio
        let width = image.width;
        let height = image.height;

        if (width > height) {
            if (width > maxWidth) {
                height *= maxWidth / width;
                width = maxWidth;
            }
        } else {
            if (height > maxHeight) {
                width *= maxHeight / height;
                height = maxHeight;
            }
        }

        canvas.width = width;
        canvas.height = height;

        ctx?.drawImage(image, 0, 0, width, height);
        return canvas;
    }

}