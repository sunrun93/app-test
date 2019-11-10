import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDemoComponent } from './zone-demo.component';

describe('ZoneDemoComponent', () => {
  let component: ZoneDemoComponent;
  let fixture: ComponentFixture<ZoneDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
