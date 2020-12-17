import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { HttpClientService, User } from '../service/httpclient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public static usuario = new User("","","")
  username = ''
  password = ''
  invalidLogin = false

  @Input() error: string | null;

  constructor(private router: Router,
    private loginservice: AuthenticationService, private httpClient: HttpClientService) { }

  ngOnInit() {
  }

  checkLogin() {
    if(this.username != "" && this.password != ""){

      (this.loginservice.authenticate(this.username, this.password).subscribe(
        data => {
          this.httpClient.getUser(this.username).subscribe(
            info => {
              LoginComponent.usuario.id = info.id;
              LoginComponent.usuario.userName = info.userName;
              sessionStorage.setItem("id", info.id);
              this.router.navigate(['']);
              this.invalidLogin = false;
          });

        },
        error => {
          this.invalidLogin = true
          this.error = "Usuario o contraseña Incorrecta."//error.message;

        }
      )
      );

    }else{

      this.error = "Completar los campos requeridos."

    }


  }

}
