import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolstarDialogComponent } from './molstar-dialog.component';

describe('MolstarDialogComponent', () => {
  let component: MolstarDialogComponent;
  let fixture: ComponentFixture<MolstarDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolstarDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolstarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
