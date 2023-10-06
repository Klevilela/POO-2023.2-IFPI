class Calculadora{
    private operando1:number
    private operando2:number
    /*operando1:number
    operando2:number*/

    constructor(operando1:number, operando2:number){
        this.operando1 = operando1
        this.operando2 = operando2
    }

    public somar(){
        return this.operando1 + this.operando2
    }
    public subtrair(){
        return this.operando1 - this.operando2
    }
    public multiplicar(){
        return this.operando1 * this.operando2
    }
    public dividir(){
        return this.operando1 / this.operando2
    }
}

class Hora{
    private horas:number
    private minutos:number
    private segundos:number
    /*horas:number
    minutos:number
    segundos:number*/

    constructor(horas:number, minutos:number, segundos:number){
        this.horas = horas
        this.minutos= minutos
        this.segundos = segundos
    }

    public verHora(){
        return this.horas
    }
    public verMinutos(){
        return this.minutos
    }
    public verSegundos(){
        return this.segundos
    }
    public verHoraCompleta():string{
        return `${this.horas}:${this.minutos}:${this.segundos} h`
    }
}

const calculadora = new Calculadora(8, 4)
console.log(calculadora.somar())
console.log(calculadora.subtrair())
console.log(calculadora.multiplicar())
console.log(calculadora.dividir())

/*calculadora.operando1 = 5
calculadora.operando2 = 3

console.log(calculadora.somar())
console.log(calculadora.subtrair())
console.log(calculadora.multiplicar())
console.log(calculadora.dividir())*/

const hora = new Hora(16, 30, 20)
console.log(hora.verHora())
console.log(hora.verMinutos())
console.log(hora.verSegundos())
console.log(hora.verHoraCompleta())

/*hora.horas = 17
hora.minutos = 15
hora.segundos = 10

console.log(hora.verHora())
console.log(hora.verMinutos())
console.log(hora.verSegundos())
console.log(hora.verHoraCompleta())*/

