import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { HttpClientService, User } from '../service/httpclient.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = ''
  password = ''
  passwordrepeat = ''
  validRegister = true

  @Input() error: string | null;

  constructor(private router: Router,
    private loginservice: AuthenticationService, private httpClientService: HttpClientService) { }

  ngOnInit() {
  }

  checkRegister() {
    if(this.username !="" && this.password != "" && this.passwordrepeat != ""){

      this.httpClientService.getUser(this.username).subscribe(
        data => {
          if(data == null){
            this.validRegister = true;
          }
          else{
            if(this.username == data.userName){
              this.validRegister = false;
              this.error = "El usuario ya se encuentra registrado."
              return;
            }else{
              this.validRegister = true;
            }
          }

          if(this.validRegister){
            this.httpClientService.createUser(new User("",this.username,this.password)).subscribe(data => {
              alert("Usuario Registrado Correctamente!.");
              this.router.navigate([''])
            });
          }
        }, error => {
          this.error = error.message;
        }

      );

    }else{
      this.error = "Completar los campos requeridos."
    }

    // (this.loginservice.authenticate(this.username, this.password).subscribe(
    //   data => {
    //     this.router.navigate([''])
    //     this.invalidLogin = false
    //   },
    //   error => {
    //     this.invalidLogin = true
    //     this.error = error.message;

    //   }
    // )
    //);

  }

}
