import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageareaComponent } from './stagearea.component';

describe('StageareaComponent', () => {
  let component: StageareaComponent;
  let fixture: ComponentFixture<StageareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
