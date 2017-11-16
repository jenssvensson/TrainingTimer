import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule, FlexLayoutModule, MatToolbarModule, MatCardModule],
  exports: [MatButtonModule, FlexLayoutModule, MatToolbarModule, MatCardModule]
})
export class AngularMaterialModule { }
