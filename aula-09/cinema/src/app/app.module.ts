import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { Categoria2Component } from './categoria/categoria2/categoria2.component';
import { CategoriasService } from './categoria/categorias.service';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MenuComponent,
    RodapeComponent,
    SobreComponent,
    CategoriaComponent,
    Categoria2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
