"use strict";
exports.__esModule = true;
var computador_base_1 = require("./computador-base");
var lenovo_1 = require("./lenovo");
var computador = new computador_base_1.Laptop(21);
console.log(computador.ligarMonitor());
var lenovo = new lenovo_1.Lenovo();
lenovo.ligarMonitor();
lenovo.aumentarBrilho(3);
