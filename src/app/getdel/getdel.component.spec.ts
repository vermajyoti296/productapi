import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdelComponent } from './getdel.component';

describe('GetdelComponent', () => {
  let component: GetdelComponent;
  let fixture: ComponentFixture<GetdelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
