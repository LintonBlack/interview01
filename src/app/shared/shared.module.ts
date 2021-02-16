// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';

@NgModule({
  declarations: [PlaceholderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [],
})
export class SharedModule {}
