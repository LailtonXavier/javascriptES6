/* importando modulo1
*   se tiver dois nomes igual, podemos renomear a importação
*/

//mudei o idade para gin
// tem como mudar o nome do Export, lembrando q os nomes do IMPORT deve se o msm
// import { nome, sobre, idade as gin, soma, Pessoa as PessoaNew } from './modulo1';

//importar tudo
// import * as meuModulo from './modulo1';
// console.log(meuModulo);

//importar por padrão, so pode ser usado uma vez por arquivo
// import qualquerCoisa from './modulo1';
// console.log(qualquerCoisa(5, 5));

//importar por padrão, so que var 
// import umNumber from './modulo1';
// console.log(umNumber);

//arrow function padrao
import arrow, {nome} from './modulo1';
console.log(arrow(10, 2), nome);

// const nome = 'maria';

// console.log( nome, sobre, gin);
// console.log(soma(5, 5));

//criando pessoa
// const p1 = new PessoaNew('jose', 'silva');
// console.log(p1);

