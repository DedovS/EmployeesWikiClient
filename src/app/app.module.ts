import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { WikiComponent } from './wiki/wiki.component'; 
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, 
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, 
  MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, 
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, 
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
  MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule } 
  from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DialogBoxComponent } from './wiki/dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    WikiComponent,
    DialogBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule, 
    FormsModule 
  ],
  entryComponents: [DialogBoxComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
