import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProductComponent } from './modifier-product.component';

describe('ModifierProductComponent', () => {
  let component: ModifierProductComponent;
  let fixture: ComponentFixture<ModifierProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
