export class Conta {
  numero: String;
  saldo: number;
  constructor(numero: String, saldo: number) {
    this.numero = numero;
    this.saldo = saldo;
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
  consultarSaldo(): number {
    return this.saldo;
  }

  transferir(contaDestino: Conta, valor: number) {
    if (this.saldo > 0) {
      this.sacar(valor);
      contaDestino.depositar(valor);
    }
    return false;
  }
}

export class Banco {
  contas: Array<Conta> = [];

  inserir(c: Conta): void | string {
    /*for (let i = 0; i < this.contas.length; i++) {
        if (this.contas[i]["numero"] != c.numero) {
          this.contas.push(c);
        }
      }*/
    if (!this.consultar(c.numero)) {
      this.contas.push(c);
    }

    return "O número da conta já existe. Cadastrar com um número diferente";
  }

  consultar(numero: String): Conta {
    let contaProcurada!: Conta;
    for (let c of this.contas) {
      if (c.numero == numero) {
        contaProcurada = c;
        break;
      }
    }
    return contaProcurada;
  }

  consultarIndice(numero: String): number {
    let indice: number = -1;
    for (let i: number = 0; i < this.contas.length; i++) {
      if (this.contas[i].numero == numero) {
        indice = i;
        break;
      }
    }
    return indice;
  }

  alterar(c: Conta): void {
    let indice = this.consultarIndice(c.numero);

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
      this.consultar(conta_origem.numero) &&
      this.consultar(conta_destino.numero)
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
