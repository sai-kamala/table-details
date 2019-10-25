import { Component, OnInit } from '@angular/core';
import {AdventureTimeService} from '../adventure-time.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
tableDataRes:any;
  constructor(private service:AdventureTimeService) { }

  ngOnInit() {
    this.service.getJSON().subscribe(
      data => {
        this.tableDataRes = data;
        console.log(data);
    })

    }

}
