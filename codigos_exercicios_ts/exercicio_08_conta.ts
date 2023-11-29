import { ValorInvalidoError, SaldoInsuficienteError } from "../codigos_exercicios_ts/exercicio_08_banco";

export class Conta {
    private _numero: String;
    private _saldo: number

    constructor(numero: String, saldo: number = 0) {
      this._numero = numero;
      this._saldo = saldo
      //questão 10
      this.depositar(saldo)
    }

    
    get numero_conta(){
      return this._numero
    }

    public get saldo(){
      return this._saldo
    }

    //questão 11
    private validarValor(valor:number){
      if (valor < 0){
        throw new ValorInvalidoError("O valor informado é negativo")
      }
      return valor
    }
    
    //questão 11
    sacar(valor: number) {    
      if (this.validarValor(valor)){
        this._saldo = this.saldo - valor;
      }
      /*
      questão 3
      if (this._saldo - valor < 0){
        throw new Error('Valor negativo')
      }
      this._saldo = this.saldo - valor
      */
    }
    
    
    depositar(valor: number): void {
      /*questão 10
      if (valor <= 0){
        throw new ValorInvalidoError('Valor de depósito menor ou igual a zero')
      }
      this._saldo = this.saldo + valor
      */

     //questão 11
      if (this.validarValor(valor)){
        this._saldo = this.saldo + valor;
      }
      
    }
    
    public get consultaSaldo() : number {
      return this.saldo
    }
    /*consultarSaldo(): number {
      return this.saldo;
    }*/
  
    transferir(contaDestino: Conta, valor: number) {    
      
      if (this.saldo <= 0) {
        throw new SaldoInsuficienteError('Saldo insuficiente')
      }
      if (valor > this.saldo) {
        throw new ValorInvalidoError(
          "Valor para transferir acima do disponível"
        );
      } 
        
      this.sacar(valor);
      contaDestino.depositar(valor);
    }
}


export class Poupanca extends Conta {
    juros: number;
  
    constructor(numero: string, saldo: number, juros: number) {
      super(numero, saldo);
      this.juros = juros;
    }
  
    renderJuros() {
      let juros = (this.saldo * this.juros) / 100;
      this.depositar(juros);
    }
  }
  
export class ContaImposto extends Conta {
    taxaDesconto: number;
  
    constructor(numero: string, saldo: number, taxaDesconto: number) {
      super(numero, saldo);
      this.taxaDesconto = taxaDesconto;
    }
}

//questão 3
const conta = new Conta('0', 30)
conta.sacar(40)

//questão 4
/* const conta1 = new Conta('1', 50)
const conta2 = new Conta('2', 50)
conta1.transferir(conta2, 60) */

//const conta3 = new Conta('3', 40)

//conta1.depositar(-10)
