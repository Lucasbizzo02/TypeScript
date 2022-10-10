"use strict";
exports.__esModule = true;
exports.Laptop = void 0;
var Laptop = /** @class */ (function () {
    function Laptop(tela) {
        this.tela = tela;
    }
    Laptop.prototype.ligarMonitor = function () {
        console.log('O monitor foi ligado');
    };
    return Laptop;
}());
exports.Laptop = Laptop;
