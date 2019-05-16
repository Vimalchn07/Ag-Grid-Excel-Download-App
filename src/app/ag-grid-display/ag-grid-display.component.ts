import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-ag-grid-display',
  templateUrl: './ag-grid-display.component.html',
  styleUrls: ['./ag-grid-display.component.css']
})
export class AgGridDisplayComponent implements OnInit {

  constructor(public router: Router) { }

  columnDefs = [
    {headerName: 'Name', field: 'name'},
    {headerName: 'Email', field: 'email'},
    {headerName: 'DOB', field: 'dob'},
    {headerName: 'Experience', field: 'experience'},
    {headerName: 'Company', field: 'company'}
  ];

  rowData = [
    {name: 'IronMan', email: 'ironman@avengers.com', dob: '15-05-1970', experience: '15', company: 'stark industries'},
    {name: 'StarLord', email: 'starlord@gotg.com', dob: '25-07-1990', experience: '7', company: 'guardians of the galaxy'},
    {name: 'Thor', email: 'thor@asgard.com', dob: '01-01-1950', experience: '25', company: 'asgard corporation'},
    {name: 'CaptainAmerica', email: 'captainamerica@avengers.com', dob: '05-10-1925', experience: '65', company: 'first avenger'},
    {name: 'WandaMaximoff', email: 'wanda@avengers.com', dob: '10-11-1985', experience: '5', company: 'superhuman'}

  ];


  ngOnInit() {
  }


}
