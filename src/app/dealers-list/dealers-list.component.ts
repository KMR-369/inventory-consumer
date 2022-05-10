import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Dealer } from '../dealer';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-dealers-list',
  templateUrl: './dealers-list.component.html',
  styleUrls: ['./dealers-list.component.css']
})
export class DealersListComponent implements OnInit {

  dealers: Observable<Dealer[]> | any;

  constructor( 
    private as: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.dealers = this.as.getDealersList();
  }
}
