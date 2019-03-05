import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAlumnoComponent } from './data-alumno.component';

describe('DataAlumnoComponent', () => {
  let component: DataAlumnoComponent;
  let fixture: ComponentFixture<DataAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
