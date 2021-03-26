import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PolyproteinSectionComponent } from './polyprotein-section/polyprotein-section.component';
import { MolstarDialogComponent } from './molstar-dialog/molstar-dialog.component';
import {MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PolyproteinSectionComponent,
    MolstarDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
