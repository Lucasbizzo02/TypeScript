"use strict";
exports.__esModule = true;
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo(cor, fabricante, modelo) {
        this.cor = cor;
        this.fabricante = fabricante;
        this.modelo = modelo;
    }
    Veiculo.prototype.acelerar = function () {
        console.log('0Km/h...10km/h...50km/h');
    };
    Veiculo.prototype.parar = function () {
        console.log('50Km/h...10Km/h...0km/h ');
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
//let caminhoneiro = new Caminhao('amarelo', 'Mercedes-Benz', 'Axor');
