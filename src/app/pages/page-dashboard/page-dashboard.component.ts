import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiStatData } from 'src/app/models/types';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.css'],
})
export class PageDashboardComponent implements OnInit {
  http: HttpClient;
  recurrence!:number;
  constructor(http: HttpClient, private monService: AuthServiceService) {
    this.http = http;
    this.getStats();
  }

  ngOnInit(): void {}

  getStats() {
    let url =
      'https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/stats/2001/2021';
    let httpHeaders = new HttpHeaders({
      'Authorization': this.monService.token,
      'Content-Type': 'application/json',
    });

    lastValueFrom(
      this.http.get<ApiStatData>(url, { headers: httpHeaders })
    ).then((res) => this.recurrence=res.recurrence
    )
  }
}
