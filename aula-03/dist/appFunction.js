var temMaisTitulos = function (titulos) {
    return titulos > 35;
};
var numero = 8;
console.log("Ter ".concat(numero, " \u00E9 suficiente para passar o Flamengo ? ").concat(temMaisTitulos(8) ? "SIM" : "N\u00C3O"));
