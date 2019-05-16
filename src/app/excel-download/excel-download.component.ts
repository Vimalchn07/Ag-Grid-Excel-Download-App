import { Component, OnInit } from '@angular/core';
import { ExcelService } from './../excel.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-excel-download',
  templateUrl: './excel-download.component.html',
  styleUrls: ['./excel-download.component.css']
})
export class ExcelDownloadComponent implements OnInit {

  constructor(private excelService: ExcelService, public router: Router) { }

  ngOnInit() {
  }

  generateExcel() {
    this.excelService.generateExcel();
  }

}
