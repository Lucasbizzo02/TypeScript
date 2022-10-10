let temMaisTitulos = function(titulos : number) : boolean{
    return titulos > 35;
}

let numero = 8;
console.log(`Ter ${numero} é suficiente para passar o Flamengo ? ${temMaisTitulos(8) ? `SIM`: `NÃO`}`);