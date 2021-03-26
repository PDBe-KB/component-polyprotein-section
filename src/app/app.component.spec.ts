import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PolyproteinSectionComponent} from './polyprotein-section/polyprotein-section.component';
import {MolstarDialogComponent} from './molstar-dialog/molstar-dialog.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PolyproteinSectionComponent,
        MolstarDialogComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
