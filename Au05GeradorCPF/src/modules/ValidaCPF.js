// exporta a classe
export default class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false, // m pd escrever nela
            enumerable: true, // n vai aparecer no console
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '') // ele vai limpar as strings
        });

    }
    //metodo
    valida() {
        if (!this.cpfLimpo) return false; // se n existir essa variavel 'limpo' retorna false
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;// se o tamanho for diferente de 11 false

        if (this.eSequencia()) return false; // se for sequencia retorna false, p n deixar passar 
        this.geraNovoCpf();
        //  console.log(this.novoCPF);

        //  return 'Cheguei aqui.';
        return this.novoCPF === this.cpfLimpo; // se é igual ao cpf que entrou
    }

    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo; // vai repetir o primeiro 11 vezes
        // se o primerio caracter for igual aos 11 numero
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito01 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito02 = ValidaCPF.geraDigito(cpfSemDigitos + digito01);
        this.novoCPF = cpfSemDigitos + digito01 + digito02;  // gerando o nv cpf 
    }

    static geraDigito(cpfSemDigitos) {
        // se tornou estatic pq so esta usando os parametros
        // aqui podia ser feito com reduce
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let stringnumerica of cpfSemDigitos) {
            //  console.log(stringnumerica, typeof stringnumerica);
            total += reverso * Number(stringnumerica);// deixando num
            reverso--; // decrescente num e multiplicando, como na formula
        }
        //  console.log(total);
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0'; // se o digito for menor ou igual a 9 retorna o digito, ou 0
    }

}

// const validacpf = new ValidaCPF('070.987.720.03');
// //  const validacpf = new ValidaCPF('000.000.000.00');
// //  console.log(validacpf.valida());

// if (validacpf.valida()) {
//     console.log('CPF valido');
// } else {
//     console.log('CPF invalido');
// }


