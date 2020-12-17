import { Component, Input, OnInit } from "@angular/core";
import { HttpClientService, Employee, EjercicioUsuario } from "../service/httpclient.service";
import { Router } from '@angular/router';
import { LoginComponent } from "../login/login.component";
import { isEmpty } from "rxjs/operators";

@Component({
  selector: "app-add-ejercicio",
  templateUrl: "./add-ejercicio.component.html",
  styleUrls: ["./add-ejercicio.component.css"]
})

export class AddEjercicioComponent implements OnInit {
  ejeruser: EjercicioUsuario = new EjercicioUsuario("","", "", "", "","");

  @Input() error: string | null;
  constructor(private httpClientService: HttpClientService,
    private router: Router) {}

  ngOnInit() {
  }

  createEjercicioUsuario(): void {
    this.ejeruser.idUsuario = LoginComponent.usuario.id;//sessionStorage.getItem("id");
    console.debug(this.ejeruser);
    if(this.ejeruser.nombre != "" && this.ejeruser.repeticiones != "" && this.ejeruser.series != ""){
      this.httpClientService.createEjercicioUsuario(this.ejeruser).subscribe(data => {
        alert("Ejercicio creado correctamente!");
        this.router.navigate([''])
      });
    }else{
      this.error = "Completar los datos requeridos.";
    }

  }
}
