import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { LoginComponent } from './login/login.component';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { RegistroComponent } from './registro/registro.component';
import { PlanesComponent } from './planes/planes.component';

const routes: Routes = [
  {path : '', component : PlantillaComponent},
  {path : 'catalogo', component : CatalogoComponent},
  {path : 'login', component : LoginComponent},
  {path : 'plantilla', component : PlantillaComponent},
  {path : 'cotizador', component : CotizadorComponent},    
  {path : 'registro', component : RegistroComponent},    
  {path : 'planes', component : PlanesComponent},
  {path: 'cotizador/:id', component: CotizadorComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
