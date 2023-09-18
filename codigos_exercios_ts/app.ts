import  { Banco, Conta }  from "./exercicio_05_banco";
import prompt from 'prompt-sync'

const prompt = prompt()

let b:Banco = new Banco()
let opcao:string

do {
  console.log("\nBem vindo\nDigite uma opção: ");
  console.log(
    `
    1 - Cadastrar\n
    2 - Consultar\n
    3 - Sacar\n"
    4 - Depositar\n
    5 - Excluir\n
    6 - Transferir\n
    7 – Totalizações\n
    \n
    0 - Sair\n`
  );
  opcao = input("Opção:");
  switch (opcao) {
    case "1":
      inserir();
      break;
    case "2":
      consultar();
      break;
    case "3":
        sacar()
        break
    case "4":
        depositar()
        break
    case "5":
        excluir()
        break
    case "6":
        transferir()
        break
    //case "7":

    //...
  }
  opcao = prompt("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");

function inserir(): void {
  console.log("\nCadastrar conta\n");
  let numero: string = input("Digite o número da conta:");
  let conta: Conta;
  conta = new Conta(numero, 0);
  b.inserir(conta);
}

function consultar():void{
    console.log('Consultar conta\n')
    let numero:string = input('Número da conta: ')
    b.consultar(numero)
}

function sacar():void{
    console.log('Consultar conta\n')
    let numero:string = input('Número da conta: ')
    let valor:number = Number(input('Valor a sacar: '))
    b.sacar(numero, valor)
}

function depositar():void{
    console.log('Consultar conta\n')
    let num_conta:string = input('Número da conta de origem: ')
    let valor:number = Number(input('Valor: '))
    b.depositar(num_conta, valor)
}

function excluir():void{
    console.log('Consultar conta\n')
    let num_conta:string = input('Número da conta: ')
    b.excluir(num_conta)
}

function transferir(){
    console.log('Consultar conta\n')
    let num_conta_origem:string = input('Número da conta de origem: ')
    let num_conta_destino:string = input('Número da conta de origem: ')
    let valor:number = Number(input('Valor: '))
    b.transferirPara(num_conta_origem, num_conta_destino, valor)
}