//Classe Abstracta
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Vocé não deveria instanciar um objeto tipo conta directamente, Pós é uma classe abstrata");
        }  
     
         this._saldo = saldoInicial;
         this._cliente = cliente;
         this.agencia = agencia;
    
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

//Metodo abstrato
    sacar(valor) {
     throw new Error("O metodo sacar da conta é um metodo abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        this._saldo += valor;
        }
    
    tranferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }

}