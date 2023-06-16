import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaAsteroidsComponent } from './nasa-asteroids.component';

xdescribe('NasaAsteroidsComponent', () => {
  let component: NasaAsteroidsComponent;
  let fixture: ComponentFixture<NasaAsteroidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaAsteroidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NasaAsteroidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
