import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dataSource : any = [];

  columnsToDisplay = ['name','username','email', 'website'];

  constructor(private service : DataService){}

  ngOnInit(){
    this.service.getUsers().subscribe((response) => {
      this.dataSource = response;
    })
  }
}
