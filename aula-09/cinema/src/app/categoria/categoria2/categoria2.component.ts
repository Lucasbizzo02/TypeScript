import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from './categoria2.model';

@Component({
  selector: 'cin-categoria2',
  templateUrl: './categoria2.component.html'
})
export class Categoria2Component implements OnInit {

  @Input() categoria!: Categoria;

  constructor() { }

  ngOnInit(): void {
  }

}
