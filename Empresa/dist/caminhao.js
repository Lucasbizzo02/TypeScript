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
exports.Caminhao = void 0;
var veiculo_1 = require("./veiculo");
var Caminhao = /** @class */ (function (_super) {
    __extends(Caminhao, _super);
    function Caminhao() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tamanhoCacamba = 'largura: 2,80M, altura: 2,40M e comprimento: 6,30 M.';
        return _this;
    }
    //constructor(tamanhoCacamba: string){
    //super('amarelo', 'Mercedes-Benz', 'Axor');
    //}
    Caminhao.prototype.descarregar = function () {
        console.log('descarregando...');
    };
    return Caminhao;
}(veiculo_1.Veiculo));
exports.Caminhao = Caminhao;
