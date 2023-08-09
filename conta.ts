class Conta{
    private readonly _num_conta: string
    saldo: number
    private readonly _titular: string

    constructor(numero:string, saldo:number, dono:string){
        this._num_conta = numero
        this.saldo = saldo
        this._titular = dono
    }

    mostrarInformacoes(){
        let informacoes:string = ``

        informacoes += `----CONTA----`
        informacoes += `\nNúmero da conta: ${this._num_conta}`
        informacoes += `\nSaldo: R$ ${this.saldo}`
        informacoes += `\nTitular: ${this._titular}`

        console.log(informacoes)
    }

    depositar(valor: number){
        let valor_saldo:number = this.saldo
        let novo_valor = valor_saldo + valor

        this.saldo = novo_valor
        console.log(`Novo saldo: R$ ${this.saldo}`)
    }

    debitar(valor:number){
        let valor_saldo:number = this.saldo
        
        if (valor_saldo > 0){
            if (valor < valor_saldo){
                let novo_valor:number  = valor_saldo - valor
                this.saldo = novo_valor
                console.log(`Novo saldo: R$ ${this.saldo}`)
            }
        }else{console.log(`Não é permitido fazer o débito pois o valor é in`)}    
    }

}

let conta1 = new Conta('123', 20, 'Joao')

conta1.mostrarInformacoes()
conta1.depositar(20)
conta1.debitar(5)