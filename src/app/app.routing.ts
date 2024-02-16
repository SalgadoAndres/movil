import { HomeComponent } from "./components/home/home"; 
import { CalificacionesComponent } from "./components/calificaciones/calificaciones"; 
import { LoginComponent } from "./components/login/login";
import { VerPerfilComponent } from "./components/verPerfil/verperfil";



export const appRoutes: any = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "calificaciones", component: CalificacionesComponent },
  { path: "verperfil", component: VerPerfilComponent },

];

export const appComponents: any = [
  HomeComponent,
  CalificacionesComponent,
  LoginComponent,
  VerPerfilComponent,

];
