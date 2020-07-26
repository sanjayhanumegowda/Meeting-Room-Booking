import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomStatusByTimeComponent } from './room-status-by-time.component';

describe('RoomStatusByTimeComponent', () => {
  let component: RoomStatusByTimeComponent;
  let fixture: ComponentFixture<RoomStatusByTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomStatusByTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomStatusByTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
