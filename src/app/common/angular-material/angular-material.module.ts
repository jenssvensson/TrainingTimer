import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, FlexLayoutModule, MatToolbarModule, MatCardModule, MatIconModule],
  exports: [MatButtonModule, FlexLayoutModule, MatToolbarModule, MatCardModule, MatIconModule]
})
export class AngularMaterialModule { }
