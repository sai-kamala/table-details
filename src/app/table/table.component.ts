import { Component, OnInit } from '@angular/core';
import {AdventureTimeService} from '../adventure-time.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
tableDataRes:any;
private newAttribute: any = {name:"SDASDSAD", age:24};
constructor(private service:AdventureTimeService) { }
ngOnInit() {
    this.service.getJSON().subscribe(
      data => 
        this.tableDataRes = data
        )
    }
    deleteRow(index:number){
    this.tableDataRes.splice(index, 1);
    }
   addRow(){
     this.tableDataRes.push(this.newAttribute)
    //  this.newAttribute = {};
   }
}
