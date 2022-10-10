var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 5] = "Verde";
    Cor[Cor["Amarelo"] = 10] = "Amarelo";
    Cor[Cor["Vermelho"] = 15] = "Vermelho";
})(Cor || (Cor = {}));
var qualCor;
qualCor = Cor[15];
console.log('a cor escolhida foi ' + qualCor);
