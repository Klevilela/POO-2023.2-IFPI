class Empregado{
    salario:number = 500
    constructor(salario:number){
        this.salario=salario;
    }

    calcularSalario(){
        return this.salario
    }
}

class Diarista extends Empregado{
    constructor(salario:number){
        super(salario)
    }

    calcularSalario(){
        return super.calcularSalario() / 30
    }
}

class Horista extends Diarista{
    constructor(salario:number){
        super(salario)
    }

    calcularSalario() {
        return super.calcularSalario() / 24
    }
}

class Pessoa{
    readonly _nome:string
    readonly _sobrenome:string

    constructor(_nome:string, _sobrenome:string){
        this._nome=_nome
        this._sobrenome=_sobrenome
    }

    get nome(){
        return this._nome
    }
    get sobrenome(){
        return this._sobrenome
    }

    nomeCompleto():string{
        return `${this._nome} ${this._sobrenome}`
    }
}

class Funcionario extends Pessoa{
    private _matricula:string
    private _salario:number

    constructor(_nome:string, _sobrenome:string, _matricula:string, _salario:number){
        super(_nome, _sobrenome)
        this._matricula = _matricula
        this._salario = _salario
    }

    
    public get salario() : number {
        return this._salario 
    }
    

    public set salario(v:number) {
        if (v >= 0){
            this._salario = v
        }
    }
    
    calcularPrimeiraParcela(){
        return this._salario * 0.6
    }
    calcularSegundaParcela(){
        return this._salario * 0.4
    }

}

class Professor extends Funcionario{
    private _titulacao:string

    get titulacao(){
        return this._titulacao
    }

    constructor(_nome:string, _sobrenome:string, _matricula:string, _salario:number, _titulacao:string){
        super(_nome, _sobrenome, _matricula, _salario)
        this._titulacao = _titulacao
    }

    calcularPrimeiraParcela(){
        return this.salario
    }

    calcularSegundaParcela(): number {
        return 0
    }
        

}

class FolhaPagamento{
    folha_pagamento:Array<Funcionario> = []
    
    constructor(folha_pagamento:Array<Funcionario>){
        this.folha_pagamento = folha_pagamento
    }

    calcularPagamentos(){
        let total:number = 0
        for (let index = 0; index < this.folha_pagamento.length; index++) {
            if (this.folha_pagamento[index] instanceof Funcionario 
                || this.folha_pagamento[index] instanceof Professor){
                    total += this.folha_pagamento[index]['_salario']
                }
        }

        return total
    }
}

const empregado1 = new Empregado(500)
const diarista = new Diarista(500)
const horista = new Horista(500)

console.log(empregado1.calcularSalario().toFixed(2))
console.log(diarista.calcularSalario().toFixed(2));
console.log(horista.calcularSalario().toFixed(2));

const func1 =  new Funcionario('Joao', 'Silva', '1', 500)
const func2 = new Funcionario('Jose', 'Alves', '2', 700)
const prof1 = new Professor('Maria', 'Pereira', '3', 1000, 'Mestre')
const prof2 = new Professor('Pedro', 'Oliveira', '4', 1000, 'Mestre')

console.log(func1.calcularPrimeiraParcela());
console.log(func1.calcularSegundaParcela());

console.log(func2.calcularPrimeiraParcela());
console.log(func2.calcularSegundaParcela());

console.log(prof1.calcularPrimeiraParcela());
console.log(prof2.calcularSegundaParcela());
    
const pagamento_pessoal = [func1, func2, prof1, prof2]
const fp = new FolhaPagamento(pagamento_pessoal)
console.log(fp.calcularPagamentos());
