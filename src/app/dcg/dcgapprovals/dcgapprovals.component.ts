import { Component,OnInit } from '@angular/core';


declare interface TableData {
    headerRow: string[];
      dataRows: string[][];
  }


@Component({
    moduleId: module.id,
    selector: 'dcgapprovals-cmp',
    templateUrl: 'dcgapprovals.component.html'
})

export class DcgApprovalsComponent implements OnInit {
    public tableData1: TableData;

    ngOnInit() {
        this.tableData1 = {
            headerRow: ['ID', 'Company Name', 'Address', 'Business Purpose', 'Status', 'Action'],
            dataRows: [
                        ['1', 'British American Tobacco', 'Uhuru Estate, Uyo',  "Ciggarette Production", "Site Inspected"],
                        ['2', 'Sona Brewries', 'Jeje Street, Ota Ogun State', 'Alcholic drinks Production', 'Factory Completed']
                      ]
          }
         
     
    }
}