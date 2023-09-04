// questão 3
class Hotel {
  quantReservas: number;

  constructor(qtd:number) {
    this.quantReservas = qtd
  }
  adicionarReserva(): void {
    this.quantReservas++;
  }
}

let hotel1 = new Hotel(2)
hotel1.adicionarReserva()
console.log(hotel1.quantReservas)

/*
class Radio {
  volume: number;
  constructor(volume: number) {
    this.volume = volume;
  }
}
let r: Radio = new Radio();
r.volume = 10;*/

/*class Conta {
  numero: String;
  saldo: number;
  constructor(numero: String, saldo: number) {
    this.numero = numero;
    this.saldo = saldo;
  }
  sacar(valor: number): void {
    this.saldo = this.saldo - valor;
    if (this.saldo < 0){
      return false
    }
  }
  depositar(valor: number): void {
    this.saldo = this.saldo + valor;
  }
  consultarSaldo(): number {
    return this.saldo;
  }

  transferir(contaDestino: Conta, valor: number): void {
    if (this.saldo < 0){
      return false
    }
    this.sacar(valor);
    contaDestino.depositar(valor);
  }
}

let c1: Conta = new Conta("1",100);
let c2: Conta = new Conta("2",100);
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2,50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
//console.log(c3.consultarSaldo());*/

//questão 6
class Saudacao{
  texto:string
  destinatario:string

  constructor(texto:string, destinatario:string){
    this.texto=texto
    this.destinatario = destinatario
  }

  obterSaudacao():string{
    return `${this.texto}, ${this.destinatario}`
  }
}

let sau_1 = new Saudacao('Olá', 'João')
console.log(sau_1.obterSaudacao())

//questão 7
class Triangulo{
  l1:number
  l2:number
  l3:number

  ehTriangulo():boolean{
    return Math.abs(this.l2 - this.l3) > this.l1 && this.l1 < (this.l2 + this.l3)
  }

  ehIsosceles(){
    if (this.ehTriangulo()){
      if (this.l2 == this.l3){
        return true
      }
    }
  }

  ehEquilatero(){
    return this.l1 == this.l2 && this.l1 == this.l3
  }

  ehEscaleno(){
    return this.l1 != this.l2 && this.l1 != this.l3
  }
}

let tri1 = new Triangulo()
let tri2 = new Triangulo()
let tri3 = new Triangulo()

tri1.l1 = 3
tri1.l2 = 4
tri1.l3 = 5

console.log(tri1.ehTriangulo())
console.log(tri2.ehTriangulo())
console.log(tri3.ehTriangulo())

console.log()

console.log(tri1.ehEscaleno())
console.log()

tri2.l1 = 3
tri1.l2 = 3
tri1.l3 = 3

console.log(tri1.ehEquilatero())
console.log()

tri3.l1 = 5
tri3.l2 = 4
tri3.l3 = 4
console.log(tri3.ehIsosceles())


//questão 8
class Equipamento{
  ligado:boolean

  liga(){
    if (this.ligado == false){
      this.ligado = true
    }
    if (this.ligado == true){
      return `O equipamento já está ligado`
    }
  }

  desliga(){
    if (this.ligado == true){
      this.ligado = false
    }

    return `O equipamento já está desligado`
  }

  inverte(){
    if (this.ligado == true){
      this.desliga()
    }
    this.liga()
  }

  estaLigado(){return `Ligado: ${this.ligado}`}
}

let equipamento1 = new Equipamento()
equipamento1.ligado = false
console.log(equipamento1.ligado)

equipamento1.liga()
console.log(equipamento1.ligado)
equipamento1.inverte()

console.log(equipamento1.ligado)
equipamento1.ligado = false
equipamento1.desliga()

console.log(equipamento1.estaLigado())


//questão 9
class Conta {
  numero: String;
  saldo: number;
  constructor(numero: String, saldo: number) {
    this.numero = numero;
    this.saldo = saldo;
  }
  sacar(valor: number){
    if (this.saldo < 0){
      return false
    }
    this.saldo = this.saldo - valor;
  }

  depositar(valor: number): void {
    this.saldo = this.saldo + valor;
  }
  consultarSaldo(): number {
    return this.saldo;
  }

  transferir(contaDestino: Conta, valor: number){
    if (this.saldo > 0){
      this.sacar(valor);
      contaDestino.depositar(valor);
    }
    return false
  }
}

let conta1 = new Conta('1', 300)
let conta2 = new Conta('2', 300)

conta1.sacar(10)
conta2.depositar(20)

console.log(conta1.consultarSaldo())
console.log(conta2.consultarSaldo())

conta1.saldo = -10
console.log(conta1.transferir(conta2, 5))


//questão 10
class Jogador{
  forca:number
  nivel:number
  pontos_atuais:number

  constructor(forca:number, nivel:number, pontos_atuais:number){
    this.forca = forca
    this.nivel = nivel
    this.pontos_atuais = pontos_atuais
  }

  calcularAtaque():number{
    return this.forca *= this.nivel
  }

  atacar(atacado:Jogador){
    if (atacado.estaVivo()){
      atacado.pontos_atuais -= atacado.calcularAtaque()
    }
  }

  estaVivo():boolean{
    return this.pontos_atuais > 0
  }

  toString(){
    return `Força: ${this.forca}, Nível atual: ${this.nivel}, Pontos atuais: ${this.pontos_atuais}`
  }
}

let j1 = new Jogador(30, 2, 100)
let j2 = new Jogador(20, 3, 100)

j1.calcularAtaque()
j2.calcularAtaque()

j1.atacar(j2)
j1.atacar(j2)
console.log(j2.estaVivo())

console.log(j1.toString())
console.log(j2.toString())