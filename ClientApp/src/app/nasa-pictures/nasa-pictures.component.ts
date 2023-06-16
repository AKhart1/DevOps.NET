import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';


interface Picture {
  title: string;
  url: string;
}

@Component({
  selector: 'app-nasa-pictures',
  templateUrl: './nasa-pictures.component.html',
  styleUrls: ['./nasa-pictures.component.css']
})
export class NasaPicturesComponent implements OnInit {

  picture: Picture = { title: '', url: '' };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPictureofTheDay();
  }

  getPictureofTheDay() {
    const apiKEY = environment.apiKey;
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKEY}`;

    this.http.get<Picture>(apiUrl).subscribe(
      (data: Picture) => {
        this.picture = data;
      },
      (error) => {
        console.log('An error occurred while fetching the data:', error);
      }

    );
  }

}
