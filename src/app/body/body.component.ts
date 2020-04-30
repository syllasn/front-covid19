import { Component,ViewChild,ElementRef, OnInit, Input } from '@angular/core';
import { CovidserviceService } from '../covidservice.service';
// import { NgxSpinnerService } from "ngx-spinner";  
//import * as Plotly from 'plotly.js';

declare var Plotly: any;

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  @ViewChild("Graph", { static: false })
  @Input()
  private Graph: ElementRef; 
 
  image;
  ifSend = false;
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
  
  showGraph =true

// date ={
//   dateDebut:'',
//   dateFin:''

// }



  constructor(private covid:CovidserviceService  ) { 
    // this.image=localStorage.getItem('data')
    // console.log("a la body",this.image)
    // this.image = JSON.parse(this.image)
  }

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
    // this.image=localStorage.getItem('data')
    // console.log("a la body",this.image)
    // this.image = JSON.parse(this.image)
    // this.get_graph()

    this.date={
      dateDebut:'',
      dateFin:''
    };


  }
update(){
  this.ngOnInit()
  this.plotGraph()
}

get_choice(){
  this.ifSend=true
    console.log("les choix",this.choice)
    console.log("les choix",this.date)
    this.url = {
      date_deb:this.date.dateDebut,
      date_fin:this.date.dateFin,
      option:this.choice
    }
    console.log("les choix",this.url)
    
    let plotData$= this.covid.get_graph_by_option(this.url).subscribe(response => {
      this.image = response.data
      console.log(response)
      this.ifSend=false
      this.image = JSON.parse(response.data)
      // localStorage.setItem('data' ,JSON.stringify(response.data));
      this.plotGraph();
     // plotData$.unsubscribe();
   
     

     // this.router.navigate(['./data'], { relativeTo: this.route })
      console.log('arive ou pas')

      this.showGraph=false
      this.update()

    },
    error => {
      console.log('error', error);
    })

  }
  // showvisualisation(){
  //   this.showGraph = true
  // }

  plotGraph(){
    console.log("la fonction plot graphe",this.image)
    this.Graph = Plotly.newPlot( 
    this.Graph.nativeElement, 
    this.image, 
    {
    autoexpand: "true",
    autosize: "true",
    width: window.innerWidth - 200, 
    margin: {
    autoexpand: "true",
    margin: 0
    },
    offset: 0,
    type: "scattergl",
    title: name, //Title of the graph
    hovermode: "closest",
    xaxis: {
    linecolor: "black",
    linewidth: 2,
    mirror: true,
    title: "Time (s)",
    automargin: true
    },
    yaxis: {
    linecolor: "black",
    linewidth: 2,
    mirror: true,
    automargin: true
    // title: 'Any other Unit'
       }
    },
    { 
    responsive: true,
    scrollZoom: true
    });
    }
  }




  // get_graph(){
  
   
  //    this.covid.get_graph().subscribe(response => {
  //  console.log(response)
  //  this.image = JSON.parse(response.data)
  //  this.plotGraph();

  
  

  // },
  // error => {
  //   console.log('error', error);
  // })


  // }
  // showGraph(){
  // this.typeDeCas = localStorage.getItem('typecas');
  // console.log("le type de cas ",this.typeDeCas)
  // console.log("date debut ",this.date.dateDebut)
  // console.log("date fin ",this.date.dateFin)
  // this.url = {
  //   date_deb :this.date.dateDebut,
  //   date_fin:this.date.dateFin,
  //   option:this.typeDeCas
  // }
  // let plotData$=this.covid.get_graph_by_option(this.url).subscribe(response => {
  //   console.log(response)
  //   this.image = JSON.parse(response.data)
  //   this.plotGraph();

  //   plotData$.unsubscribe();
   
    // this.plotGraph();
 
    // plotData$.unsubscribe();
 
 
   
    
 
  //  },
  //  error => {
  //    console.log('error', error);
  //  })
 

// }



  // plotGraph(){
  //   this.Graph = Plotly.plot('tester',{{this.image | safe}},{})
  //   };





// @ViewChild("Graph", { static: true })
// private Graph: ElementRef;
// let plotData$ = this.getRequest.getPlotData(link).subscribe(
// res => {
// this.receivedData = res;
// this.data = {
//   x: this.receivedData.x,
//   y: this.receivedData.y, //keeping the length same
//   name: 'type string, name of the trace',
//   type: 'scattergl', //this very important to activate WebGL
//   mode: 'line' //other properties can be found in the docs.
// }
// plotGraph();
// plotData$.unsubscribe();
// }
// plotGraph(){
// this.Graph = Plotly.newPlot( 
// this.Graph.nativeElement, 
// this.data, 
// {
// autoexpand: "true",
// autosize: "true",
// width: window.innerWidth - 200, 
// margin: {
// autoexpand: "true",
// margin: 0
// },
// offset: 0,
// type: "scattergl",
// title: name, //Title of the graph
// hovermode: "closest",
// xaxis: {
// linecolor: "black",
// linewidth: 2,
// mirror: true,
// title: "Time (s)",
// automargin: true
// },
// yaxis: {
// linecolor: "black",
// linewidth: 2,
// mirror: true,
// automargin: true
// title: 'Any other Unit'
//    }
// },
// { 
// responsive: true,
// scrollZoom: true
// });
// }
// }
// j 