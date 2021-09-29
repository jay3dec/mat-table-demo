import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dataSource: any = [];

  @ViewChild('paginator') paginator!: MatPaginator;

  columnsToDisplay = ['name', 'username', 'email', 'website'];
  
  constructor(private service: DataService) {}

  ngOnInit() {
    this.service.getUsers().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
    })
  }
}
