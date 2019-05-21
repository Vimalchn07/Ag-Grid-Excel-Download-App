import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgGridModule} from 'ag-grid-angular';

import {ExcelService} from './excel.service';
import { AppComponent } from './app.component';
import { ExcelDownloadComponent } from './excel-download/excel-download.component';
import { AgGridDisplayComponent } from './ag-grid-display/ag-grid-display.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ExcelDownloadComponent,
    AgGridDisplayComponent
  ],
  imports: [
    BrowserModule, AgGridModule.withComponents([AppComponent]), RouterModule.forRoot(routes)
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
