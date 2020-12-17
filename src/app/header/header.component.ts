import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../service/httpclient.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuario: User;
  constructor(public loginService:AuthenticationService){ }
  ngOnInit() {
    this.usuario = LoginComponent.usuario;
  }

}
