import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiances } from './experiances';

describe('Experiances', () => {
  let component: Experiances;
  let fixture: ComponentFixture<Experiances>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experiances]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Experiances);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
