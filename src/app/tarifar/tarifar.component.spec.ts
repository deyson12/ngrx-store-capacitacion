import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifarComponent } from './tarifar.component';

describe('TarifarComponent', () => {
  let component: TarifarComponent;
  let fixture: ComponentFixture<TarifarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
