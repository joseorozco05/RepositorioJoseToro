import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionAddComponent } from './avion-add.component';

describe('AvionAddComponent', () => {
  let component: AvionAddComponent;
  let fixture: ComponentFixture<AvionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
