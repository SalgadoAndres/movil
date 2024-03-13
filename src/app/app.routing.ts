import { HomeComponent } from "./components/home/home"; 
import { CalificacionesComponent } from "./components/calificaciones/calificaciones"; 
import { LoginComponent } from "./components/login/login";
import { VerPerfilComponent } from "./components/verPerfil/verperfil";
import { ProductosComponent } from "./components/productos/productos";
import { Producto_VistaComponent } from "./components/producto_vista/producto_vista";


export const appRoutes: any = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "calificaciones", component: CalificacionesComponent },
  { path: "verperfil", component: VerPerfilComponent },
  { path: "productos", component: ProductosComponent },
  { path: "producto_vista", component: Producto_VistaComponent },

];

export const appComponents: any = [
  HomeComponent,
  CalificacionesComponent,
  LoginComponent,
  VerPerfilComponent,
  ProductosComponent,
  Producto_VistaComponent,

];
