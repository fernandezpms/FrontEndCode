import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { AddEjercicioComponent } from './add-ejercicio/add-ejercicio.component';

const routes: Routes = [

  { path: '', component: EjercicioComponent,canActivate:[AuthGaurdService] },
  { path: 'addejercicio', component: AddEjercicioComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
