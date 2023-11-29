//import { Conta } from "./exercicio_06_banco-conta";
import {
  Conta,
  ContaImposto,
  Poupanca,
} from "../codigos_exercicios_ts/exercicio_08_conta";

export class Banco {
  private _contas: Array<Conta> = [];

  get contas() {
    return this._contas;
  }

  inserir(c: Conta): void | string {
    //questão 13
    if (this.existeConta(c.numero_conta)) {
      throw new AplicacaoError("A conta já existe");
    }
    this.contas.push(c);

  }

  private existeConta(numero: String): boolean {
    for (let conta of this.contas) {
      if (conta.numero_conta == numero) {
        return true;
      }
    }

    return false;
  }

  consultar(numero: String): Conta {
    let contaProcurada!: Conta;
    for (let c of this.contas) {
      if (c.numero_conta == numero) {
        //return c;
        contaProcurada = c;
        return contaProcurada;
      }
    }
    throw new ContaInexistenteError("A conta não existe");

    /*questão 8
          for (let c of this.contas){
            if (c.numero_conta != numero){
              throw new ContaInexistenteError('A conta não existe')
            }else{
              contaProcurada = c
            }

            return contaProcurada
          }
          */
  }

  private consultarIndice(numero: String): number {
    let indice: number = 0;
    for (let i: number = 0; i < this.contas.length; i++) {
      if (this.contas[i].numero_conta == numero) {
        indice = i;
        break;
      } else {
        throw new ContaInexistenteError("O índice da conta não existe");
      }
    }
    return indice;
  }

  alterar(c: Conta): void {
    //questão 9
    let indice = this.consultarIndice(c.numero_conta);
    this.contas[indice] = c;

    /* if (indice != -1) {
          this.contas[indice] = c;
        } */
  }

  excluir(numero: String): void {
    let indice: number = this.consultarIndice(numero);
    if (indice != -1) {
      for (let i: number = indice; i < this.contas.length; i++) {
        this.contas[i] = this.contas[i + 1];
      }
      this.contas.pop();
    }
  }

  depositar(numero: String, valor: number) {
    //let conta:Conta
    //this.consultar(numero);
    //this.depositar(numero, valor);

    //questão 9
    let conta: Conta = this.consultar(numero);
    conta.depositar(valor);

    /*questão 6
      if (this.consultar(numero)){
        if (valor < 0){
          throw new Error('Valor inferior a 0')
        }
        conta.depositar(valor)
      }
       */
  }

  sacar(numero: string, valor: number): void {
    //questão 9
    let indiceProcurado: number = this.consultarIndice(numero);
    let conta: Conta = this.contas[indiceProcurado];
    conta.sacar(valor);

    /*questão 6
        let indiceProcurado: number = this.consultarIndice(numero);
  
        /* if (indiceProcurado != -1) {
            if (valor < 0){
              throw new Error('O valor é menor que 0')
            }
            let conta: Conta = this.contas[indiceProcurado];
            conta.sacar(valor);
        } */
  }

  transferirPara(conta_origem: Conta, conta_destino: Conta, valor: number) {
    /* //questão 9
      let contaOrigemProcurada!: this.consultar(conta_origem.numero_conta)
      let contaDestinoProcurada!: this.consultar(conta_origem.numero_conta)
      conta_origem.transferir(conta_destino, valor) */

    if (
      this.consultar(conta_origem.numero_conta) &&
      this.consultar(conta_destino.numero_conta)
    ) {
      conta_origem.transferir(conta_destino, valor);
    }
  }

  contarQtdContas(): number {
    return this.contas.length;
  }

  contarTotalDepositado(): number {
    let total = 0;
    for (let i = 0; i < this.contas.length; i++) {
      total += this.contas[i]["saldo"];
    }

    return total;
  }

  obterMediaSaldo(): number {
    return this.contarTotalDepositado() / this.contarQtdContas();
  }

  //questão 12
  renderJuros(numero: String) {
    //questão 9
    /*let conta:Conta = this.consultar(numero)        
      conta.renderJuros()
    */
    let conta: Conta = this.consultar(numero);
    if (conta instanceof Poupanca) {
      conta.renderJuros();
    }

    throw new PoupancaInvalidaError("Não é uma conta do tipo Poupança");
  }
}

//questão 7
export class AplicacaoError extends Error {
  constructor(message: string) {
    super(message);
  }
}

//questão 7
export class ContaInexistenteError extends AplicacaoError {
  constructor(message: string) {
    super(message);
  }
}

//questão 7
export class SaldoInsuficienteError extends AplicacaoError {
  constructor(message: string) {
    super(message);
  }
}

//quetão 10
export class ValorInvalidoError extends AplicacaoError {
  constructor(message: string) {
    super(message);
  }
}

//questão 12
export class PoupancaInvalidaError extends AplicacaoError {
  constructor(message: string) {
    super(message);
  }
}

//questão 5
const banco = new Banco();
/*const conta0 = new Conta("0", 10);
const conta2 = new Conta("2", 10);
banco.inserir(conta0);
banco.inserir(conta2);
banco.transferirPara(conta0, conta2, 60); */

//questão 6
/*conta0.sacar(-10);
conta0.depositar(-5); */

// teste da questão 12
/* const conta3 = new Conta("3", 2);
banco.inserir(conta3);
banco.renderJuros("3"); */

//teste da questão 13
/* const conta4 = new Conta('3', 10)
banco.inserir(conta4)
*/