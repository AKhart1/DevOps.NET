import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Asteroid {

  name: string;
  absolute_magnitude_h: number;
  distance: number;
  relative_velocity: number;
  is_potentially_hazardous_asteroid: boolean;
  orbiting_body: string;

}

@Component({
  selector: 'app-nasa-asteroids',
  templateUrl: './nasa-asteroids.component.html',
  styleUrls: ['./nasa-asteroids.component.css']
})
export class NasaAsteroidsComponent implements OnInit {

  asteroids: Asteroid[] = [];
  newAsteroid: any = {};
  showForm = false;
  showData = false;
  editingAsteroid: any = null;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.fetchAsteroidsData();
  }

  addAsteroid(): void {
    this.asteroids.push(this.newAsteroid);
    this.newAsteroid = {};
    this.showForm = false;
  }

  deleteAsteroid(asteroid: Asteroid): void {
    const index = this.asteroids.indexOf(asteroid);
    if (index !== -1) {
      this.asteroids.splice(index, 1);
    }
  }

  editAsteroid(asteroid: Asteroid): void {
    this.editingAsteroid = asteroid;
  }

  saveAsteroid(): void {
    this.editingAsteroid = null;
  }

  getNearestAsteroid(): any | string{
    if (this.asteroids && this.asteroids.length > 0) {
      const sortedArray = this.asteroids.sort((x, y) => x.distance - y.distance);

      return sortedArray[0];
    }

    return "No data available ";
  }

  toggleData() {
    this.showData = !this.showData;
  }


  sortBy(column: keyof Asteroid) {

    this.asteroids.sort((x, y) => {
      if (x[column] < y[column]) {
        return -1;
      }
      if (x[column] > y[column]) {
        return 1;
      }
      return 0;
    })
  }

  fetchAsteroidsData(): void {

    this.http.get<Asteroid[]>('/api/Asteroid').subscribe(data => {
      this.asteroids = data;
    },
      (error) => {
        console.log('An error occurred while fetching the data:', error);
      }
    );
  }
}
