var valor = function () {
    return Math.floor((Math.random() * 60) + 1);
};
function sortear() {
    var numeros = [];
    var x;
    for (var i = 0; i < 6; i++) {
        x = valor();
        if (numeros.indexOf(x) == -1) {
            numeros.push(x);
        }
        else {
            i--;
        }
    }
    numeros.sort(function (n1, n2) { return n1 - n2; });
    return numeros;
}
