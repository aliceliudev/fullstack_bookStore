import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewbookComponent } from './createnewbook.component';

describe('CreatenewbookComponent', () => {
  let component: CreatenewbookComponent;
  let fixture: ComponentFixture<CreatenewbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenewbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenewbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
