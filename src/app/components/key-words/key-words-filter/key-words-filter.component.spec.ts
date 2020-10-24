import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyWordsFilterComponent } from './key-words-filter.component';

describe('KeyWordsFilterComponent', () => {
  let component: KeyWordsFilterComponent;
  let fixture: ComponentFixture<KeyWordsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyWordsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyWordsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
