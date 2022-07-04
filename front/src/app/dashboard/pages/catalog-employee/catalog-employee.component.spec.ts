import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogEmployeeComponent } from './catalog-employee.component';

describe('CatalogEmployeeComponent', () => {
  let component: CatalogEmployeeComponent;
  let fixture: ComponentFixture<CatalogEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
