import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuperUserComponent } from './add-super-user.component';

describe('AddSuperUserComponent', () => {
  let component: AddSuperUserComponent;
  let fixture: ComponentFixture<AddSuperUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSuperUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSuperUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
