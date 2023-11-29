//q1. método 1(lançar exceção com throw Erorr)
function ehInteiro(valor:number){
    if (valor < 0){
        throw new Error('Valor negativo')
    }
    return true
}

//q1. método 2(lançar exceção com try/catch)
function divide(a:number, b:number){
    try{
        if (b == 0){
            throw new Error('Divisão por 0')
        }
        return a / b         
    }
    catch(erro:any){
        console.log(erro.message)
    }
}

//q1. método 3(usar parâmetro opcional para tratar tipo de argumento)
function nome_ou_numero(nome?:string, num?: number){
    try{
        if (nome){
            return nome
        }
        if (num){
            return num
        }
        if (nome && num){
            return `Nome: ${nome}\nNúmero: ${num}`
        }else{
            throw new Error('Nenhum argumento passado')
        }
    }catch(erro:any){
        console.log(erro.message)
    }
}

//console.log(divide(4, 2));
//console.log(divide(2, 0));
divide(4, 2)
divide(2, 0)

console.log(nome_ou_numero('joao'))
console.log(nome_ou_numero('', 1))
console.log(nome_ou_numero('joao', 2))
nome_ou_numero()

ehInteiro(-1)