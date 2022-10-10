class Laptop {
    tela: number;

    constructor(tela: number){
        this.tela = tela;
    }

    ligarMonitor(){
        console.log('O monitor foi ligado');
    }
}

//let computador = new Laptop(21);
//console.log(computador.ligarMonitor());

//------------

class Lenovo extends Laptop {
    constructor () {
        super(21);
    }
    
    aumentarBrilho(valor: number) {
        console.log(`Brilho subiu ${valor}%`);
    }
}

let computador = new Lenovo();

//computador.ligarMonitor();
//computador.aumentarBrilho(3);

//------------

interface Gamer {
    memoriaVideo: number;
}

class samsung extends Laptop implements Gamer {
    memoriaVideo: number = 512;

    constructor () {
        super(21);
    }

    aumentarBrilho(valor: number) {
        console.log(`Brilho subiu ${valor}%`);
    }
}
console.log(computador.tela + "Polegadas");
computador.ligarMonitor();
computador.aumentarBrilho(3);