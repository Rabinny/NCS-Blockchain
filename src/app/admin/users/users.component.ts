import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

declare interface TableData {
  headerRow: string[];
    dataRows: string[][];
}

declare interface OfficerData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
    selector: 'users-cmp',
    moduleId: module.id,
    templateUrl: 'users.component.html'
})

export class UsersComponent{
  public tableData1: TableData;
  public officerData1: OfficerData;
 
  ngOnInit() {
    this.tableData1 = {
      headerRow: ['ID', 'Company Name', 'Address', 'Business Purpose', 'Status', 'Action'],
      dataRows: [
                  ['1', 'British American Tobacco', 'Uhuru Estate, Uyo',  "Ciggarette Production", "Excise Trade Licence"],
                  ['2', 'Sona Brewries', 'Jeje Street, Ota Ogun State', 'Alcholic drinks Production', 'Revised Entry of Premise Licence']
                ]
    }

    this.officerData1 = {
      headerRow: ['ID', 'Name', 'Rank'],
      dataRows: [
       ['1', "Bala Kolo", 'Inspector'],
       ['2', 'Jadesimi Lolade', 'Seagent']
      ]
    }

  }
}
