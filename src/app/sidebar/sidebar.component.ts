import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from '../covidservice.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  typeDecas:string;
  image;
  choice = {
    confirmes:'',
    contact:'',
    communautaire:'',
    importes:'',
    recovered:'',
    dead:''
  }
  url={
    date_deb:'',
    date_fin:'',
    option:{}

  }
  date={
    dateDebut:'',
    dateFin:''
  };

  constructor(private covid:CovidserviceService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.choice = {
      confirmes:'',
      contact:'',
      communautaire:'',
      importes:'',
      recovered:'',
      dead:''
    }
    this.date={
      dateDebut:'',
      dateFin:''
    };
    
  
  }
  get_choice(){
    this.ngOnInit()
    this.image = ''
    console.log("les choix",this.choice)
    console.log("les choix",this.date)
    this.url = {
      date_deb:this.date.dateDebut,
      date_fin:this.date.dateFin,
      option:this.choice
    }
    console.log("les choix",this.url)
    this.covid.get_graph_by_option(this.url).subscribe(response => {
      console.log(response)
      this.image = JSON.parse(response.data)
      localStorage.setItem('data' ,JSON.stringify(response.data));

     // this.router.navigate(['./data'], { relativeTo: this.route })
      console.log('arive ou pas')

    },
    error => {
      console.log('error', error);
    })

  }
  getCaseConfirmes(){
    this.typeDecas = 'Confirme'
    localStorage.setItem('typecas' ,this.typeDecas);
  }

}
