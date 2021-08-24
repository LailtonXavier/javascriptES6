//codigo da caracter, vms usar essa função para gerar caractere aleatorio
// no google tabela ASCII  =   https://pt.wikipedia.org/wiki/ASCII
// console.log(String.fromCharCode(120));

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumber = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.@+-*)&!/^[(~`]º/\||&´"&$#@!:';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];
// console.log(geraSimbolo());

export default function geraSenha(qtd, maiuscula, minuscula, numeros, simbolo){
    const senhaArray  = [];
    qtd = Number(qtd);

    for( let i = 0; i < qtd; i++){// aqui seria a logica, ele meio que chama sua funct e guarda no array
        maiuscula && senhaArray.push(geraMaiuscula());
        minuscula && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumber());
        simbolo && senhaArray.push(geraSimbolo());

    }
    return senhaArray.join('').slice(0, qtd);
    // esse join = de caracter para caracter n tera espaço
    // slice = ele estrai uma string, ou seja, vem a quantidade certa
}

//esta dando um erro, esta dobrando os valores da qntd, foi corrigido com slice
// geraSenha(10, true, true, true, true);
