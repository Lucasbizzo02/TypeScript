"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Lenovo = void 0;
var computador_base_1 = require("./computador-base");
var Lenovo = /** @class */ (function (_super) {
    __extends(Lenovo, _super);
    function Lenovo() {
        return _super.call(this, 21) || this;
    }
    Lenovo.prototype.aumentarBrilho = function (valor) {
        console.log("Brilho subiu ".concat(valor, " pontos"));
    };
    return Lenovo;
}(computador_base_1.Laptop));
exports.Lenovo = Lenovo;
