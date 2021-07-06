class Cliente {
    nome;
    cpf;
   

}Cliente

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
}


const cliente1 = new Cliente();
const cliente2 = new Cliente();
const cliente3 = new Cliente();


const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.saldo = 0
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo.saldo);

cliente1.nome = "Ricardo";
cliente1.cpf = 64831777390;
cliente1.agencia = 1001;
cliente1.saldo = 0;


cliente2.nome = "Maria";
cliente2.cpf = 213154731;
cliente2.agencia = 1001;
cliente2.saldo = 0;


cliente3.nome = "Ana";
cliente3.cpf= 6483135417390;
cliente3.agencia = 1001;
cliente3.saldo = 0;

console.log(cliente1);