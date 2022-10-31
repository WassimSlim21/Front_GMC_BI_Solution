import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isShown: boolean = true ; // hidden by default
  userName: string;
  password: string;
  constructor(private authService: ApiService,private router: Router) { }



  
  ngOnInit(): void {
    setTimeout(()=>{
      this.isShown=false;    
    }, 
      2000);
      if (localStorage.getItem('token')) {
        this.router.navigate(['/pages/dashboard']);
      }

  }
  register(){

    this.router.navigate(['/register'])
  }
  login(): void {

    this.authService.sendCredential(this.userName, this.password).subscribe(
      data => {
        console.log(this.userName);
        console.log(data);
        
        localStorage.setItem('account', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        // this.snackBar.open();
          this.router.navigate(['/pages/dashboard']);
      },
      error => {
        console.log(error);
        // this.snackBar.open();
      },



    );


  }



}
