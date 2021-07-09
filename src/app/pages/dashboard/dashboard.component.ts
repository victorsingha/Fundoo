import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  opened = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  toggleSidebar(){
    this.opened = !this.opened
  }
  routeNotes(){
    this.router.navigateByUrl('/dashboard/notes');
  }
  routeTrash(){
    this.router.navigateByUrl('/dashboard/trash');
  }
  routeArchive(){
    this.router.navigateByUrl('/dashboard/archive')
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }
}
