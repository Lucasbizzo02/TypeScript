"use strict";
exports.__esModule = true;
var buscar_1 = require("./buscar");
var numeros = [3, 5, 7, 9, 11, 13, 15];
var x = 2;
var b = new buscar_1.Buscar();
var achei = b.existeValor(numeros, x);
console.log("Encontrou o valor? ".concat((achei == false) ? 'Não' : 'Sim'));
