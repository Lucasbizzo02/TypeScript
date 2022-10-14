import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria2/categoria2.model';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'cin-categoria',
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit {
  categorias!: Categoria[];

  constructor(private categoriaService: CategoriasService) { }

  ngOnInit(): void {
    this.categorias= this.categoriaService.listarCategorias();
  }

}
