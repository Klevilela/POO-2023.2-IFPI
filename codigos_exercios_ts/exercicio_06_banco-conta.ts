export class Conta {
    private numero: String;
    private saldo: number;

    constructor(numero: String, saldo: number) {
      this.numero = numero;
      this.saldo = saldo;
    }

    
    public get numero_conta(){
        return this.numero
    }
    

    sacar(valor: number) {
      if (this.saldo < 0) {
        return false;
      }
      this.saldo = this.saldo - valor;
    }
  
    depositar(valor: number): void {
      this.saldo = this.saldo + valor;
    }
    
    public get consultaSaldo() : number {
      return this.saldo
    }
    /*consultarSaldo(): number {
      return this.saldo;
    }*/
  
    transferir(contaDestino: Conta, valor: number) {
      if (this.saldo > 0) {
        this.sacar(valor);
        contaDestino.depositar(valor);
      }
      return false;
    }
}
  
export class Banco {
    private contas: Array<Conta> = [];

    inserir(c: Conta): void | string {
      /*for (let i = 0; i < this.contas.length; i++) {
          if (this.contas[i]["numero"] != c.numero) {
            this.contas.push(c);
          }
        }*/
      if (!this.consultar(c.numero_conta)) {
        this.contas.push(c);
      }

      return "O número da conta já existe. Cadastrar com um número diferente";
    }

    consultar(numero: String): Conta {
      let contaProcurada!: Conta;
      for (let c of this.contas) {
        if (c.numero_conta == numero) {
          contaProcurada = c;
          break;
        }
      }
      return contaProcurada;
    }

    private consultarIndice(numero: String): number {
      let indice: number = -1;
      for (let i: number = 0; i < this.contas.length; i++) {
        if (this.contas[i].numero_conta == numero) {
          indice = i;
          break;
        }
      }
      return indice;
    }

    alterar(c: Conta): void {
      let indice = this.consultarIndice(c.numero_conta);

      if (indice != -1) {
        this.contas[indice] = c;
      }
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
      let conta: Conta = this.consultar(numero);
      if (conta != null) {
        conta.depositar(valor);
      }
    }

    sacar(numero: string, valor: number): void {
      let indiceProcurado: number = this.consultarIndice(numero);

      if (indiceProcurado != -1) {
        let conta: Conta = this.contas[indiceProcurado];
        conta.sacar(valor);
      }
    }

    transferirPara(conta_origem: Conta, conta_destino: Conta, valor: number) {
      if (
        this.consultar(conta_origem.numero_conta) &&
        this.consultar(conta_destino.numero_conta)
      ) {
        conta_origem.transferir(conta_destino, valor);
      }

      return "Não é possível transferir. A conta não tem saldo suficiente ou não existe";
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
}

const conta1 = new Conta('123', 50)
const conta2 = new Conta('456', 50)
const banco = new Banco()

banco.inserir(conta1)
banco.inserir(conta2)

console.log(conta1.numero_conta)
console.log(conta2.numero_conta)

conta1.depositar(10)
conta1.sacar(2)
conta1.transferir(conta2, 5)
console.log(conta1.consultaSaldo);


console.log(conta1.consultaSaldo)
console.log(conta2.consultaSaldo)

//conta1.saldo = 4
//banco.contas = 0
