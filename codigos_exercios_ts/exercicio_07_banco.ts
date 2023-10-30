import { Conta } from "./exercicio_06_banco-conta";
import * as fs from 'fs'

export class Banco {
    private contas: Array<Conta> = [];
    private ARQUIVO:string = './contas.txt'

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

    renderJuros(numero:Conta['_numero']){
        if (numero instanceof Poupanca) {
          if (this.consultar(numero)) {
            (<Poupanca>numero).renderJuros();
          }
        }
    }

    carregarDeArquivo(){
      const arquivo = fs.readFileSync(this.ARQUIVO, 'utf-8')
      const linhas = arquivo.split('\r\n')

      for (let index = 0; index < linhas.length; index++) {
        let linhaConta:string[] = linhas[index].split(';')
        let conta!:Conta
        let tipo:string = linhaConta[2]
        
        if (tipo == 'C'){
          conta = new Conta(linhaConta[0], parseFloat(linhaConta[1]))
        }
        if (tipo == 'CP'){
          conta = new Poupanca(linhaConta[0], parseFloat(linhaConta[1]), parseFloat(linhaConta[2]))
        }
        if (tipo == 'CI'){
          conta = new ContaImposto(linhaConta[0], parseFloat(linhaConta[1]), parseFloat(linhaConta[2]))
        }
        
        
      }

      linhas.forEach(linha => {
        let linhaConta: string[] = linha.split(";");
        let conta!: Conta;
        let tipo: string  = linhaConta[2];
        if (tipo == 'C') {
          conta = new Conta(linhaConta[0], parseFloat(linhaConta[1]));
        } else if (tipo == 'CP') {
          conta = new Poupanca(linhaConta[0], parseFloat(linhaConta[1]),parseFloat(linhaConta[3]));
        } else if (tipo == 'CI') {
          conta = new ContaImposto(linhaConta[0], parseFloat(linhaConta[1]),parseFloat(linhaConta[3]));
        }
        this.inserir(conta)
        console.log(`Conta: ${conta.numero_conta} carregada`)
      })
      console.log('Fim do arquivo')
    }

    public salvarEmArquivo(){
      console.log('Iniciando a gravação de contas em arquivo')
      let stringContas:string = ``
      let linha:string = ``

      for (let conta of this.contas) {
        if (conta instanceof Conta){
          linha += `${conta.numero_conta};${conta.saldo};C;`
        }
        if (conta instanceof Poupanca){
          linha += `${conta.numero_conta};${conta.saldo};CP`
        }
        if (conta instanceof ContaImposto){
          linha += `${conta.numero_conta};${conta.saldo};CI`
        }
        stringContas += linha
      }
      stringContas = stringContas.slice(0, stringContas.length-2)

      fs.writeFileSync(this.ARQUIVO, stringContas, 'utf-8')
    }
}

export class Poupanca extends Conta{
    juros:number

    constructor(numero:string, saldo:number, juros:number){
        super(numero, saldo)
        this.juros = juros
    }

    renderJuros(){
      let juros = this.saldo * this.juros / 100
      this.depositar(juros)  
    }
}

export class ContaImposto extends Conta {
  taxaDesconto: number;

  constructor(numero: string, saldo: number, taxaDesconto: number) {
    super(numero, saldo);
    this.taxaDesconto = taxaDesconto;
  }
}