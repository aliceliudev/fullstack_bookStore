import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidetextComponent } from './sidetext.component';

describe('SidetextComponent', () => {
  let component: SidetextComponent;
  let fixture: ComponentFixture<SidetextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidetextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidetextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
