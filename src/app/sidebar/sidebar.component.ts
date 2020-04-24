import { Component, OnInit } from '@angular/core';
import 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  close(){
    $('#exampleModal').modal('show');
   
  }

}
