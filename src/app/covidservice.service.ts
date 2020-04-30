import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CovidserviceService {
 //baseurl = 'http://localhost:5000';
baseurl = 'https://covid-19senegal.herokuapp.com/';
httpHeaders = new HttpHeaders({'Content-Type': 'application/json'  });

  constructor(private http: HttpClient) { }
  get_graph(): Observable<any> {
    // this.url = url.replace(/^.*\\/, '');

    console.log( this.baseurl + '/graph'   , { headers: this.httpHeaders} );

    return this.http.get(this.baseurl + '/graph', { headers: this.httpHeaders });
  }
  get_graph_by_option(url): Observable<any> {
    // this.url = url.replace(/^.*\\/, '');

    console.log( this.baseurl + '/graph' + JSON.stringify(url) + '/'  , { headers: this.httpHeaders} );

    return this.http.post<any>(this.baseurl + '/graph' , JSON.stringify(url)  , { headers: this.httpHeaders});
  }

}
