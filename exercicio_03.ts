//questão 1
function eh_par(valor:number){
    return valor % 2 == 0
}

//questão 2
function eh_primo(valor:number){
    for (let i = 2; i < valor-1; i++) {
        if (!eh_divisivel(valor, i)){
            return true
        }
        return false
    }

    function eh_divisivel(valor:number, divisor:number){
        return valor % divisor == 0
    }
}

//questão 3
function mostrar_nome(nome:string, tratamento:string='Sr.'):string{
    return `${tratamento} ${nome}`
}

//questão 4
function mostrar_vetor_sep_traco(vetor:Array<number>){
    let valor = ``
    vetor.forEach((item) => {valor += `${item} - `})
    
    return valor
}

//questão 5
function soma(x:number, y?:any):number{
    return x + y
}

//questão 6
function exibir(...valores:any[]){

    for (const item of valores) {
        console.log(item)    
    }

}

//questão 7
const ola = () => console.log('Olá')

//questão 8
const filtrar_pares = (vetor: Array<number>) => vetor.filter(item => item % 2 == 0)

//questão 9
const dobrar_valores = (vetor:Array<number>) => vetor.map(vetor => vetor * 2)
const somatorio_array = (vetor:Array<number>) => vetor.reduce((atual:number, total:number) => atual + total)

const vetor1:Array<any> = [3,2,5,6]

//questão 1
console.log(eh_par(4))
console.log(eh_par(3))

console.log()

//questão 2
console.log(eh_primo(37))
console.log(eh_primo(40))

console.log('')

//questão 3
console.log(mostrar_nome('Joao'))

console.log()


//questão 4
console.log(mostrar_vetor_sep_traco(vetor1))

//questão 5
console.log(soma(1,2))
console.log(soma(1,'2'))
console.log(soma(1))

console.log()

//questão 6
console.log(exibir('a','b'))
console.log(exibir('a','b','c'))
console.log(exibir('a','b','c','d'))

//questão 7
ola()

console.log()

//questão 8
console.log(filtrar_pares(vetor1))

//questão 9
console.log(dobrar_valores(vetor1))
console.log(somatorio_array(vetor1))