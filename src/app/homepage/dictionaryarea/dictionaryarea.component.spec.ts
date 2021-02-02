import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryareaComponent } from './dictionaryarea.component';

describe('DictionaryareaComponent', () => {
  let component: DictionaryareaComponent;
  let fixture: ComponentFixture<DictionaryareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
