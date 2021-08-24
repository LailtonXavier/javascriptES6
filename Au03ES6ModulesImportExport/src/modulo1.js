/**
 * vc pode EXPORT:
 *      colocando embaixo
 *      ou na var 
 */

export const nome = 'lau';
export const sobre = 'xavier';
export const idade = 52;
const cpf = 234234;  //  ele n vai ser importado pq n tem EXPORT
const valor = 20;

//so pode criar uma coisa por padrão 
// export default function mult(s, t){
//     return s * t;
// }

//pode exporta variavel tbm
// export { valor as default};

//aroow function padrao
export default (x, y) => x / y;

export function soma(x, y){
    return x + y;
}

// export class Pessoa{
//     constructor(nome, sobre ){
//         this.nome = nome;
//         this.sobre = sobre;
//     }
// }

//se eu quero export alguma var
// export { nomeMod11, sobre, idade, soma };

 