let qntdVitorias = Math.floor(Math.random() * (100 - 10 + 1)) + 1;
let qntdDerrotas = Math.floor(Math.random() * (100 - 10 + 1)) + 1;

let saldoRank = qntdVitorias - qntdDerrotas

nivel= ''

if (saldoRank <= 10){
    nivel='Ferro'
} else if (saldoRank > 10 && saldoRank <= 20){
    nivel='Bronze'
} else if (saldoRank > 21 && saldoRank <= 50){
    nivel='Prata'
} else if (saldoRank > 51 && saldoRank <= 80){
    nivel='Ouro'
} else if (saldoRank > 81 && saldoRank <= 90){
    nivel='Diamente'
} else if (saldoRank > 91 && saldoRank <= 100){
    nivel='Lendário'
} else{
    nivel = 'Imortal'
}

console.log(`O Herói tem de saldo de ${saldoRank} está no nível de ${nivel}`)