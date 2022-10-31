import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isShown: boolean = true ; // hidden by default

  constructor(private router:Router) {

   }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isShown=false;    
    }, 
    2000);
      if (localStorage.getItem('token')) {
        this.router.navigate(['/pages/dashboard']);
      }
  }


}
