class Cliente {
    nome;
    cpf;
   
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;

        }
        return
    }

    depositar(valor) {
        if(valor <= 0) {
           return;       
        }
        this._saldo += valor;
    }
}


const cliente1 = new Cliente();
const cliente2 = new Cliente();
const cliente3 = new Cliente();


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado =  contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);


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
