let casa = {
    quartos: 2,
    tipo: 'casa',
    endereco: 'rua teste 123 - ZS'
}

console.log(`${casa.tipo} com ${casa.quartos} quartos, locaizada na ${casa.endereco}`)


// -----------------------

let produtos = {
    videos : {
        comedia: ["comedia1","comedia2"],
        romance: ["romance1", "romance2"]
    },
    revistas : [
        moda  = ["lalala", "lililili"],
        saude  = ["lalala", "lililili"],
    ],
    jogos : {
        rpg: ["rpg1", "rpg2", "rpg3"],
        acao: ["acao1", "God of War"]
    }
}


console.log(produtos.jogos.acao[1])




numbers = [1, 2, 3, 4, 5, 6]

const pairNumbers= numbers.filter( ( i ) => {

    if ( i % 2 === 0) {
        return i
    }
})

console.log(pairNumbers)