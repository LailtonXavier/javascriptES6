import ValidaCPF from './ValidaCPF';

export default class GeraCPF {// numeros aleatorios do cpf, os 9 num
    rand(min = 111111111, max = 99999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatado(cpf){
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        ); 
    }

    geraNovoCpf(){
        const cpfSemDigito = this.rand();
        const digito01 = ValidaCPF.geraDigito(cpfSemDigito);
        const digito02 = ValidaCPF.geraDigito(cpfSemDigito + digito01);
        const novoCpf = cpfSemDigito + digito01 + digito02;
        return this.formatado(novoCpf);
    }

}
