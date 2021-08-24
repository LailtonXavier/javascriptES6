import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const maiuscula = document.querySelector('.chk-maiusculas');
const minuscula = document.querySelector('.chk-minusculas');
const numeros = document.querySelector('.chk-numeros');
const simbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default  () => {
// console.log('acho que foi man');
    gerarSenha.addEventListener('click', () => {
        // console.log(maiuscula.checked); // checked checa se esta marcado = true or false
        senhaGerada.innerHTML = gera();        

    });
};

function gera(){
    const senha = geraSenha(
        qtdCaracteres.value,
        maiuscula.checked, 
        minuscula.checked, 
        numeros.checked, 
        simbolos.checked
    );
    return senha || 'Nada selecionado';
}
 