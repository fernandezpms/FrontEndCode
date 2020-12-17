import { Component, OnInit } from "@angular/core";
import { LoginComponent } from "../login/login.component";
import { HttpClientService, Ejercicio, EjercicioUsuario } from "../service/httpclient.service";

@Component({
  selector: "app-ejercicio",
  templateUrl: "./ejercicio.component.html",
  styleUrls: ["./ejercicio.component.css"]
})
export class EjercicioComponent implements OnInit {
  ejerciciosUsuario: EjercicioUsuario[];
  ejercicios: Ejercicio[];
  displayedColumns: string[] = ["nombre", "descripcion", "series", "repeticiones","delete"];

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
    this.httpClientService
      .getEjercicioUsuario(LoginComponent.usuario.id)
      .subscribe(response => this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response) {
    this.ejerciciosUsuario = response;
  }

  deleteEjercicio(ejeruser: EjercicioUsuario): void {
    this.httpClientService.deleteEjercicioUsuario(ejeruser).subscribe(data => {
      this.ejerciciosUsuario = this.ejerciciosUsuario.filter(u => u !== ejeruser);
    });
  }

  obtenerDatosEjercicios(){
    this.httpClientService.getEjercicios().subscribe(data =>{
      this.ejercicios = data;
    });
  }
}
