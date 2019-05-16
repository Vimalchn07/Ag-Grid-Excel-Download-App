import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ExcelDownloadComponent} from './excel-download/excel-download.component';
import {AgGridDisplayComponent} from './ag-grid-display/ag-grid-display.component';

export const routes: Routes = [
  {
    path: '',
    children: [
  {
    path: 'excel',
    component: ExcelDownloadComponent
  },
  {
    path: 'aggrid',
    component: AgGridDisplayComponent
  },
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
