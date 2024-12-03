import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NvbarComponent } from './nvbar/nvbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AppRoutingModule } from './app-routing.module';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { RegistroComponent } from './registro/registro.component';
import { PlanesComponent } from './planes/planes.component';
import { CotizacionService } from './services/cotizacion.service';


@NgModule({
  declarations: [
    AppComponent,
    NvbarComponent,
    MainContentComponent,
    FooterComponent,
    CatalogoComponent,
    PlantillaComponent,
    LoginComponent,
    CotizadorComponent,
    RegistroComponent,
    PlanesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    CheckboxModule,
    ButtonModule,
    FormsModule
  ],
  providers: [CotizacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
