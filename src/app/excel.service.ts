import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import * as logoFile from './carlogo.js';

import { DatePipe } from '../../node_modules/@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  

  constructor() { }


generateExcel() {
    const title = 'Car Sell Report';
    const header = ['Year', 'Month', 'Make', 'Model', 'Quantity', 'Pct'];
    const data = [
  [2007, 1, 'Volkswagen ', 'Volkswagen Passat', 1267, 10],
  [2007, 1, 'Toyota ', 'Toyota Rav4', 819, 6.5],
  [2007, 1, 'Toyota ', 'Toyota Avensis', 787, 6.2],
  [2007, 1, 'Volkswagen ', 'Volkswagen Golf', 720, 5.7],
  [2007, 1, 'Toyota ', 'Toyota Corolla', 691, 5.4],
  [2010, 1, 'Toyota ', 'Toyota Corolla', 691, 5.4]
  ];

    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Car Data');
    //const datePipe: DatePipe = new DatePipe();

    const titleRow = worksheet.addRow([title]);
    titleRow.font = { name: 'Comic Sans MS', family: 4, size: 16, underline: 'double', bold: true };
    worksheet.addRow([]);
    //const subTitleRow = worksheet.addRow(['Date : ' + this.datepipe.transform(new Date(), 'medium')]);

    //Add Image

    const logo = workbook.addImage({
      base64: logoFile.logoBase64,
      extension: 'png',
    });

    worksheet.addImage(logo, 'E1:F3');
    worksheet.mergeCells('A1:D2');
    //Blank Row 

    worksheet.addRow([]);

    //Add Header Row
    const headerRow = worksheet.addRow(header);   

    // Cell Style : Fill and Border
    // tslint:disable-next-line: variable-name
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFF00' },
        bgColor: { argb: 'FF0000FF' }
      };
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    });

    // worksheet.addRows(data);
    // Add Data and Conditional Formatting

    data.forEach(d => {
      const row = worksheet.addRow(d);
      const qty = row.getCell(5);
      let color = 'FF99FF99';
      if (+qty.value < 500) {
        color = 'FF9999';
      }

      qty.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: color }
      };
    }
    );

    worksheet.getColumn(3).width = 30;
    worksheet.getColumn(4).width = 30;
    worksheet.addRow([]);

    //Footer Row
    // tslint:disable-next-line: prefer-const
    let footerRow = worksheet.addRow(['This is system generated excel sheet.']);
    footerRow.getCell(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFCCFFE5' }
    };
    footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };

    //Merge Cells
    worksheet.mergeCells(`A${footerRow.number}:F${footerRow.number}`);
    
    //Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'CarData.xlsx');
    });
  }
}


