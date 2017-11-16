import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  imports: [MatButtonModule, FlexLayoutModule, MatToolbarModule],
  exports: [MatButtonModule, FlexLayoutModule, MatToolbarModule]
})
export class AngularMaterialModule { }
