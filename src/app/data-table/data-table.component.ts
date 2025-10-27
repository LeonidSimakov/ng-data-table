import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'datatables.net-autofill-dt';
import 'datatables.net-buttons-dt';
import 'datatables.net-buttons/js/buttons.colVis.mjs';
import 'datatables.net-buttons/js/buttons.html5.mjs';
import 'datatables.net-buttons/js/buttons.print.mjs';
import 'datatables.net-colreorder-dt';
import 'datatables.net-columncontrol-dt';
import DataTable, { Api } from 'datatables.net-dt';
import jszip from 'jszip';
import pdfmake from 'pdfmake';
// import DateTime from 'datatables.net-datetime';
import 'datatables.net-fixedcolumns-dt';
import 'datatables.net-fixedheader-dt';
import 'datatables.net-keytable-dt';
import 'datatables.net-responsive-dt';
import 'datatables.net-rowgroup-dt';
import 'datatables.net-rowreorder-dt';
import 'datatables.net-scroller-dt';
import 'datatables.net-searchbuilder-dt';
import 'datatables.net-searchpanes-dt';
import 'datatables.net-select-dt';
import 'datatables.net-staterestore-dt';
 
DataTable.Buttons.jszip(jszip);
DataTable.Buttons.pdfMake(pdfmake);

type RowData = {
  col1: { text: '11' }
  col2: { text: '22' }
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @ViewChild('table', {static: true})
  private readonly htmlTableRef!: ElementRef<HTMLTableElement>; 

  private table!: Api<RowData>;
  
  ngOnInit(): void {
    this.table = new DataTable<RowData>(
      this.htmlTableRef.nativeElement,
      { 
        colReorder: true,
        // buttons: true,
        // rowGroup: true,
        select: true,
        // autoWidth: true,
        // scroller: true,
        columns: [
          { data: 'name' },
          { data: 'position' },
          { data: 'office' },
          { data: 'extn' },
          { data: 'start_date' },
          { data: 'salary' }
        ],
        data: [
          { name: 'Tiger Nixon', position: 'System Architect', salary: '$3,120', start_date: '2011/04/25', office: 'Edinburgh', extn: 5421 },
          { name: 'Garrett Winters', position: 'Director', salary: '5300', start_date: '2011/07/25', office: 'Edinburgh', extn: '8422' },
          { name: 'Tiger Nixon', position: 'System Architect', salary: '$3,120', start_date: '2011/04/25', office: 'Edinburgh', extn: 5421 },
          { name: 'Garrett Winters', position: 'Director', salary: '5300', start_date: '2011/07/25', office: 'Edinburgh', extn: '8422' },
          { name: 'Tiger Nixon', position: 'System Architect', salary: '$3,120', start_date: '2011/04/25', office: 'Edinburgh', extn: 5421 },
          { name: 'Garrett Winters', position: 'Director', salary: '5300', start_date: '2011/07/25', office: 'Edinburgh', extn: '8422' },
          { name: 'Tiger Nixon', position: 'System Architect', salary: '$3,120', start_date: '2011/04/25', office: 'Edinburgh', extn: 5421 },
          { name: 'Garrett Winters', position: 'Director', salary: '5300', start_date: '2011/07/25', office: 'Edinburgh', extn: '8422' },
          { name: 'Tiger Nixon', position: 'System Architect', salary: '$3,120', start_date: '2011/04/25', office: 'Edinburgh', extn: 5421 },
          { name: 'Garrett Winters', position: 'Director', salary: '5300', start_date: '2011/07/25', office: 'Edinburgh', extn: '8422' },
          { name: 'Tiger Nixon', position: 'System Architect', salary: '$3,120', start_date: '2011/04/25', office: 'Edinburgh', extn: 5421 },
          { name: 'Garrett Winters', position: 'Director', salary: '5300', start_date: '2011/07/25', office: 'Edinburgh', extn: '8422' },
          { name: 'Tiger Nixon', position: 'System Architect', salary: '$3,120', start_date: '2011/04/25', office: 'Edinburgh', extn: 5421 },
          { name: 'Garrett Winters', position: 'Director', salary: '5300', start_date: '2011/07/25', office: 'Edinburgh', extn: '8422' },
          { name: 'Tiger Nixon', position: 'System Architect', salary: '$3,120', start_date: '2011/04/25', office: 'Edinburgh', extn: 5421 },
          { name: 'Garrett Winters', position: 'Director', salary: '5300', start_date: '2011/07/25', office: 'Edinburgh', extn: '8422' },
          { name: 'Tiger Nixon', position: 'System Architect', salary: '$3,120', start_date: '2011/04/25', office: 'Edinburgh', extn: 5421 },
          { name: 'Garrett Winters', position: 'Director', salary: '5300', start_date: '2011/07/25', office: 'Edinburgh', extn: '8422' },
          { name: 'Tiger Nixon', position: 'System Architect', salary: '$3,120', start_date: '2011/04/25', office: 'Edinburgh', extn: 5421 },
          { name: 'Garrett Winters', position: 'Director', salary: '5300', start_date: '2011/07/25', office: 'Edinburgh', extn: '8422' },
          { name: 'Tiger Nixon', position: 'System Architect', salary: '$3,120', start_date: '2011/04/25', office: 'Edinburgh', extn: 5421 },
          { name: 'Garrett Winters', position: 'Director', salary: '5300', start_date: '2011/07/25', office: 'Edinburgh', extn: '8422' },
          { name: 'Tiger Nixon', position: 'System Architect', salary: '$3,120', start_date: '2011/04/25', office: 'Edinburgh', extn: 5421 },
          { name: 'Garrett Winters', position: 'Director', salary: '5300', start_date: '2011/07/25', office: 'Edinburgh', extn: '8422' },
          { name: 'Tiger Nixon', position: 'System Architect', salary: '$3,120', start_date: '2011/04/25', office: 'Edinburgh', extn: 5421 },
          { name: 'Garrett Winters', position: 'Director', salary: '5300', start_date: '2011/07/25', office: 'Edinburgh', extn: '8422' },
          { name: 'Tiger Nixon', position: 'System Architect', salary: '$3,120', start_date: '2011/04/25', office: 'Edinburgh', extn: 5421 },
          { name: 'Garrett Winters', position: 'Director', salary: '5300', start_date: '2011/07/25', office: 'Edinburgh', extn: '8422' },
          { name: 'Tiger Nixon', position: 'System Architect', salary: '$3,120', start_date: '2011/04/25', office: 'Edinburgh', extn: 5421 },
          { name: 'Garrett Winters', position: 'Director', salary: '5300', start_date: '2011/07/25', office: 'Edinburgh', extn: '8422' },
        ],
      }
    );
  }
}
