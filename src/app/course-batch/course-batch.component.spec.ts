import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBatchComponent } from './course-batch.component';

describe('CourseBatchComponent', () => {
  let component: CourseBatchComponent;
  let fixture: ComponentFixture<CourseBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
