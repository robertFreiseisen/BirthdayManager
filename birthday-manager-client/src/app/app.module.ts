import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialog } from '@angular/material/dialog/dialog';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import  {MatSortModule} from '@angular/material/sort';
import { AppComponent } from './app.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { MatDialogClose, MatDialogContent } from '@angular/material/dialog/dialog-content-directives';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { PersonService } from './person-service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UpdateDialogComponent
  ],
  entryComponents: [UpdateDialogComponent],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
