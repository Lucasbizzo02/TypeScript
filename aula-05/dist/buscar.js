"use strict";
exports.__esModule = true;
exports.Buscar = void 0;
var Buscar = /** @class */ (function () {
    function Buscar() {
    }
    Buscar.prototype.existeValor = function (campo, valor) {
        for (var i = 0; i <= campo.length; i++) {
            if (campo[i] == valor) {
                return true;
            }
        }
        return false;
    };
    return Buscar;
}());
exports.Buscar = Buscar;
