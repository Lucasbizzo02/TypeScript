var diasDaSemana = ["segunda-feira", "ter\u00E7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sabado", "domingo"];
var semana = function (dia) {
    if (dia === void 0) { dia = 'domingo'; }
    return dia;
};
console.log("Hoje \u00E9 ".concat(semana(diasDaSemana[Math.floor(Math.random() * 6)])));
