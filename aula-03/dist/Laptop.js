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
var Laptop = /** @class */ (function () {
    function Laptop(tela) {
        this.tela = tela;
    }
    Laptop.prototype.ligarMonitor = function () {
        console.log('O monitor foi ligado');
    };
    return Laptop;
}());
//let computador = new Laptop(21);
//console.log(computador.ligarMonitor());
//------------
var Lenovo = /** @class */ (function (_super) {
    __extends(Lenovo, _super);
    function Lenovo() {
        return _super.call(this, 21) || this;
    }
    Lenovo.prototype.aumentarBrilho = function (valor) {
        console.log("Brilho subiu ".concat(valor, "%"));
    };
    return Lenovo;
}(Laptop));
var computador = new Lenovo();
var samsung = /** @class */ (function (_super) {
    __extends(samsung, _super);
    function samsung() {
        var _this = _super.call(this, 21) || this;
        _this.memoriaVideo = 512;
        return _this;
    }
    samsung.prototype.aumentarBrilho = function (valor) {
        console.log("Brilho subiu ".concat(valor, "%"));
    };
    return samsung;
}(Laptop));
console.log(computador.tela + "Polegadas");
computador.ligarMonitor();
computador.aumentarBrilho(3);
