import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PrimeNumbersComponent } from './prime-numbers/prime-numbers.component';
import { NasaPicturesComponent } from './nasa-pictures/nasa-pictures.component';
import { NasaAsteroidsComponent } from './nasa-asteroids/nasa-asteroids.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PrimeNumbersComponent,
    NasaPicturesComponent,
    NasaAsteroidsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'prime-numbers', component: PrimeNumbersComponent },
      { path: 'nasa-pictures', component: NasaPicturesComponent },
      { path: 'nasa-asteroids', component: NasaAsteroidsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
