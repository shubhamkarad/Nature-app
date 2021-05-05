import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductsByCategoryComponent } from './products-by-category.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductsByCategoryComponent', () => {
  let component: ProductsByCategoryComponent;
  let fixture: ComponentFixture<ProductsByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsByCategoryComponent],
      imports: [HttpClientModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
