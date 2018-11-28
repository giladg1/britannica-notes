import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPopupNotesComponent } from './modal-popup-notes.component';

describe('ModalPopupNotesComponent', () => {
  let component: ModalPopupNotesComponent;
  let fixture: ComponentFixture<ModalPopupNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPopupNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPopupNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
