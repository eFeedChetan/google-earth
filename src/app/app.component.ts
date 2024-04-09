import { Component, ElementRef, OnInit } from '@angular/core';
import { GoogleEarthEngineService } from './google-earth-engine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private earthEngineService: GoogleEarthEngineService,
    private ele: ElementRef
  ) {}
  ngOnInit(): void {
    this.earthEngineService
      .initializeAPI()
      .then(() => {
        const latitude = 37.7749; // Example: San Francisco latitude
        const longitude = -122.4194; // Example: San Francisco longitude
        const startDate = '2022-01-01'; // Example: Start date for satellite image
        const endDate = '2022-01-31'; // Example: End date for satellite image
        this.earthEngineService
          .fetchSatelliteImage(latitude, longitude, startDate, endDate)
          .then((image: any) => {
            // Process and use the fetched satellite image data here
            console.log('Satellite image fetched:', image);
          })
          .catch((error: any) => {
            console.error('Error fetching satellite image:', error);
          });
      })
      .catch((error: any) => {
        console.error('Error initializing Google Earth Engine API:', error);
      });
  }
}
