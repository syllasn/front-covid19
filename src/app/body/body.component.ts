import { Component,ViewChild,ElementRef, OnInit } from '@angular/core';
import { CovidserviceService } from '../covidservice.service';
//import * as Plotly from 'plotly.js';

declare var Plotly: any;
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  image;
  url;
  @ViewChild("Graph", { static: true })
private Graph: ElementRef; 
typeDeCas:string;
date ={
  dateDebut:'',
  dateFin:''

}



  constructor(private covid:CovidserviceService  ) { }

  ngOnInit() {
    this.get_graph()

    this.date={
      dateDebut:'',
      dateFin:''
    };

  }


  get_graph(){
  
   
    let plotData$ =this.covid.get_graph().subscribe(response => {
   console.log(response)
   this.image = JSON.parse(response.data)
   this.plotGraph();

   plotData$.unsubscribe();
  

  },
  error => {
    console.log('error', error);
  })


  }
  showGraph(){
  this.typeDeCas = localStorage.getItem('typecas');
  console.log("le type de cas ",this.typeDeCas)
  console.log("date debut ",this.date.dateDebut)
  console.log("date fin ",this.date.dateFin)
  this.url = {
    date_deb :this.date.dateDebut,
    date_fin:this.date.dateFin,
    option:this.typeDeCas
  }
  let plotData$=this.covid.get_graph_by_option(this.url).subscribe(response => {
    console.log(response)
    this.image = JSON.parse(response.data)
    this.plotGraph();

    plotData$.unsubscribe();
   
    // this.plotGraph();
 
    // plotData$.unsubscribe();
 
 
   
    
 
   },
   error => {
     console.log('error', error);
   })
 

}


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

  // plotGraph(){
  //   this.Graph = Plotly.plot('tester',{{this.image | safe}},{})
  //   };
}




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