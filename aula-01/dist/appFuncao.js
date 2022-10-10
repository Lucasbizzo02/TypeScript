// Função "Tradicional"
function somar(x, y) {
    return x + y;
}
console.log("O valor da soma é " + somar(6, 4));
//Função anonima
var funcao = function (x, y) {
    return x - y;
};
console.log("O valor da subtração é  " + funcao(6, 1));
var seta = function (x, y) { return x * y; };
console.log("O valor da multiplicação é " + seta(2, 9));
