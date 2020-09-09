import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemModelComponent } from './edit-item-model.component';

describe('EditItemModelComponent', () => {
  let component: EditItemModelComponent;
  let fixture: ComponentFixture<EditItemModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
