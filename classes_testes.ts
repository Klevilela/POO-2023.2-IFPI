class TestaRetangulo{
    l1:number = 0
    l2:number = 0

    calcularArea():number{
        return this.l1 * this.l2
    }

    calcularPerimetro():number{
        return 2*(this.l1 + this.l2)
    }
    
    exibirValorPerimetro(){
        console.log(`O valor do perímetro é: ${this.calcularPerimetro()}`)
    }
}

/*let r1 = new TestaRetangulo()
r1.l1 = 4
r1.l2 = 5

console.log(r1.calcularArea())
console.log(r1.calcularPerimetro())
*/

class Circulo{
    raio:number = 0

    calcularArea():number{
        return 3.14 * (this.raio ** 2)
    }

    calcularPerimetro():number{
        return 2 * 3.14 * this.raio 
    }
}

let c1:Circulo = new Circulo()
c1.raio = 8

console.log(c1.calcularArea())
console.log(c1.calcularPerimetro())

class SituacaoFinanceira{
    valorCreditos:number = 0
    valorDebitos:number = 0

    saldo():number{
        return this.valorCreditos - this.valorDebitos
    }
}

let conta = new SituacaoFinanceira()
conta.valorDebitos = 20
conta.valorCreditos = 70

console.log(conta.saldo())
