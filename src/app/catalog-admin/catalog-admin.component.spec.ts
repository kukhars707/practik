import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogAdminComponent } from './catalog-admin.component';

describe('CatalogAdminComponent', () => {
  let component: CatalogAdminComponent;
  let fixture: ComponentFixture<CatalogAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
