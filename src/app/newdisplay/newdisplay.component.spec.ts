import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdisplayComponent } from './newdisplay.component';

describe('NewdisplayComponent', () => {
  let component: NewdisplayComponent;
  let fixture: ComponentFixture<NewdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
