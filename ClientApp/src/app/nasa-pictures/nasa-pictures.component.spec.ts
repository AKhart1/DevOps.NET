import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaPicturesComponent } from './nasa-pictures.component';

xdescribe('NasaPicturesComponent', () => {
  let component: NasaPicturesComponent;
  let fixture: ComponentFixture<NasaPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaPicturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NasaPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
