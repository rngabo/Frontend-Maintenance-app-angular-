import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: '../home/home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  globalstatus: any;
  totalluminaire: any;
  offline: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/globalstatus').subscribe((response) => {
      this.globalstatus = response;
    });
    this.http.get('http://127.0.0.1:8000/api/totalluminaire').subscribe((response) => {
      this.totalluminaire = response;
    });
    this.http.get('http://127.0.0.1:8000/api/offline').subscribe((response) => {
      this.offline = response;
    });


  }
}