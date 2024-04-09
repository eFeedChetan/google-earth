import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
// import * as ee from '@google/earthengine';
// const ee = require('@google/earthengine');
declare const google: any;
declare const ee: any;

@Injectable({
  providedIn: 'root',
})
export class GoogleEarthEngineService {
  private apiInitialized = false;

  initializeAPI(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!this.apiInitialized) {
        this.apiInitialized = true;
        resolve();
        // google.load('earth', '1', {
        //   other_params: `key=${environment.earthEngineApiKey}`,
        //   callback: () => {
        //     this.apiInitialized = true;
        //     resolve();
        //   },
        // });
      } else {
        reject('API already initialized');
      }
    });
  }

  fetchSatelliteImage(
    latitude: number,
    longitude: number,
    startDate: string,
    endDate: string
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (this.apiInitialized) {
        // const ee = google.earth.enterprise;
        console.log(ee);

        const request = ee.data.ImageRequest();
        request.setBands(['B4', 'B3', 'B2']); // Example: RGB bands for true color image
        request.setLatLongRegion({
          lat: latitude,
          lon: longitude,
          latDelta: 0.1,
          lonDelta: 0.1,
        }); // Example: Region around a specific point
        request.setDateRange(startDate, endDate); // Example: Date range for the image
        request.send((image: any) => {
          if (image) {
            resolve(image);
          } else {
            reject('Failed to fetch satellite image');
          }
        });
      } else {
        reject('API not initialized');
      }
    });
  }
}
