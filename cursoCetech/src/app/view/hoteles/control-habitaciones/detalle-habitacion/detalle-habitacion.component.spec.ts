import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHabitacionComponent } from './detalle-habitacion.component';

describe('DetalleHabitacionComponent', () => {
  let component: DetalleHabitacionComponent;
  let fixture: ComponentFixture<DetalleHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
