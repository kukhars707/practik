import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeleteComponentComponent } from './product-delete-component.component';

describe('ProductDeleteComponentComponent', () => {
  let component: ProductDeleteComponentComponent;
  let fixture: ComponentFixture<ProductDeleteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDeleteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeleteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
