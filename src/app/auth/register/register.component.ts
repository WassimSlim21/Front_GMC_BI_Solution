import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  invalid = false; // custom validator for password comfirmation
  files: any[] = [];

  isShown: boolean = true ; // hidden by default
  userName: string;
  password: string;
  constructor(private apiService: ApiService, private router:Router,private toastr: ToastrService) {
    this.registerForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      phone:new FormControl(null, [Validators.required, Validators.minLength(8)]),
      cpassword: new FormControl(null, [Validators.required])    });
  }
  passwordConfirming(c: any) {
    if (c.password !== c.cpassword) {
      this.invalid = true;
    } else {
      this.invalid = false;
    }
  }
  ngOnInit(): void {
    
    setTimeout(()=>{
      this.isShown=false;    
    }, 
      2000);
      if (localStorage.getItem('token')) {
        this.router.navigate(['/pages/dashboard']);
      }
      // this.registerForm.valueChanges.subscribe(value => {
      //   console.log('value', value);
      //   this.passwordConfirming(value);
      //   console.log('invalid', this.invalid);
  
      // });
    }



    // uploadFile() {
    //   const formData = new FormData();
    //   formData.append('user', (this.registerForm.value));
    //   this.files.forEach(file => {
    //     formData.append('files', file, file.name);
    //   });
    //   console.log('aaaa', formData.getAll('files'));
    //   this.apiService.apiPostWithOptions('file/add', formData).subscribe(response => {
    //     console.log(response);
    //   });

    // }
  
    
  register(){
    if (this.registerForm.invalid){
      this.toastr.error('please verify the form', 'Major Error', {
        timeOut: 3000,
      });
    } else
    if (this.invalid) {
      this.toastr.error('recomfirm your password', 'Major Error', {
        timeOut: 3000,
      });
    } else {
    console.log(JSON.stringify(this.registerForm.value));
    this.apiService.register(this.registerForm.value).subscribe((reponse: any) => { // sends post request to the apiService
      this.toastr.success(reponse.msg);
     this.registerForm.reset();
     this.router.navigate(['/login'])

    });
  }
  }
  cancel(){
    this.router.navigate(['/home'])

  }
}
