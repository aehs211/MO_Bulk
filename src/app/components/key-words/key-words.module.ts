import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {KeyWordsRoutingModule} from './key-words-routing.module';
import {KeyWordsComponent} from './key-words.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
import {KeyWordsFilterComponent} from './key-words-filter/key-words-filter.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [KeyWordsComponent, KeyWordsFilterComponent],
  imports: [
    CommonModule,
    KeyWordsRoutingModule,
    MatTableModule,
    MatSortModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatNativeDateModule,
    MatStepperModule,
    MatCheckboxModule,
    MatPaginatorModule
  ]
})

export class KeyWordsModule {
}
