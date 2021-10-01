import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from './data.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dataSource: any = [];

  showData : boolean = false;

  @ViewChild('paginator') paginator!: MatPaginator;

  columnsToDisplay = ['name', 'username', 'email', 'website'];
  
  constructor(private service: DataService, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.service.getUserData().subscribe((response : any) => {
      if(response && response.length){
        this.showData = true;
        this.dataSource = new MatTableDataSource(response);
        this.ref.detectChanges();
        this.dataSource.paginator = this.paginator;
      } else{
        this.showData = false;
      }
    })
  }
}
