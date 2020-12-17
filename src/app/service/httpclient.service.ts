import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string
  ) {}
}

export class User {
  constructor(
    public id: string,
    public userName: string,
    public password: string,
  ) {}
}

export class Ejercicio {
  constructor(
    public id: string,
    public descripcion: string,
    public name: string,
  ) {}
}

export class EjercicioUsuario {
  constructor(
    public id: String,
    public nombre: String,
    public descripcion: String,
    public idUsuario: String,
    public repeticiones: String,
    public series: String
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}


  public getUser(username) {
    return this.httpClient.get<User>("http://localhost:8080/api/usuarios/username/"+username);
  }

  public createUser(user) {
    return this.httpClient.post<User>("http://localhost:8080/api/usuarios/create",user);
  }

  public getEjercicioUsuario(idUsurio) {
    const headerDict = {

      'Authorization': 'Bearer' + sessionStorage.getItem("token")
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.httpClient.get<EjercicioUsuario[]>("http://localhost:8080/api/ejerciciousuario/usuario/"+idUsurio, requestOptions);
  }

  public createEjercicioUsuario(ejeruser) {
    return this.httpClient.post<EjercicioUsuario>("http://localhost:8080/api/ejerciciousuario/create",ejeruser);
  }

  public deleteEjercicioUsuario(ejeruser) {

    return this.httpClient.delete<EjercicioUsuario>(

      "http://localhost:8080/api/ejerciciousuario" + "/" + ejeruser.id
    );
  }

  public getEjercicios() {
    const headerDict = {
      'Authorization': 'Bearer' + sessionStorage.getItem("token")
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.httpClient.get<Ejercicio[]>("http://localhost:8080/api/ejercicios", requestOptions);
  }

}
