function saldo (quantidadeDeVitorias, quantidadeDeDerrotas){
    let saldoTotal = quantidadeDeVitorias - quantidadeDeDerrotas
    return saldoTotal
}

let resultado = saldo(200,40)
let lvlDoHeroi

if (resultado < 10){lvlDoHeroi = "ferro"}
else if(resultado >=11 && resultado <20){lvlDoHeroi = "bronze"}
else if(resultado >=21 && resultado <50){lvlDoHeroi = "prata"}
else if(resultado >=51 && resultado <80){lvlDoHeroi = "ouro"}
else if(resultado >=81 && resultado <90){lvlDoHeroi = "diamante"}
else if(resultado >=91 && resultado <100){lvlDoHeroi = "lendário"}
else if(resultado >=100){lvlDoHeroi = "imortal"}

console.log(`o herói tem o saldo de vitórias ${resultado} e está no nível de ${lvlDoHeroi}`)