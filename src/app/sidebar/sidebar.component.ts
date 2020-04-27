import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  typeDecas:string;

  constructor() { }

  ngOnInit() {
  }
  getCaseConfirmes(){
    this.typeDecas = 'Confirme'
    localStorage.setItem('typecas' ,this.typeDecas);
  }

}
