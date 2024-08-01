import { ComponentFixture, TestBed } from '@angular/core/testing';

import { singleOffreComponent } from './single-offre.component';

describe('OffreComponent', () => {
  let component: singleOffreComponent;
  let fixture: ComponentFixture<singleOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [singleOffreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(singleOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
