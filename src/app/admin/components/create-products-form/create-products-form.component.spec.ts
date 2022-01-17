import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductsFormComponent } from './create-products-form.component';

describe('CreateProductsFormComponent', () => {
  let component: CreateProductsFormComponent;
  let fixture: ComponentFixture<CreateProductsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
