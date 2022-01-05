import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo.component';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PhotoComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
  ],
  exports: [PhotoComponent],
})
export class PhotoModule {}
