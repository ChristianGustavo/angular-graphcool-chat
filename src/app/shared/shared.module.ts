import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatLineModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

import { AvatarComponent } from './components/avatar/avatar.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { NoRecordComponent } from './components/no-record/no-record.component';

@NgModule({
  declarations: [
    AvatarComponent,
    FromNowPipe,
    ImagePreviewComponent,
    NoRecordComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    AvatarComponent,
    CommonModule,
    FormsModule,
    FromNowPipe,
    ImagePreviewComponent,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatLineModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    NoRecordComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
