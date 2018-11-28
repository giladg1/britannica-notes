import { NgModule } from '@angular/core';
import {MatButtonModule, MatDialogModule, MatInputModule, MatFormFieldModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
})
export class CustomMaterialModule { }
