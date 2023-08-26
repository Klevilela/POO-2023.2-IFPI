 type Leitura = {
   temperatura: number
   umidade: number
   nivel_poluicao: number
   nivel_ruido: number
}

type Relatorio_leituras_temperatura = {
    temperatura_media:number
    maior_temperatura:number
    menor_temperatura:number
}

type Relatorio_leituras_umidade = {
    umidade_media:number
    maior_umidade:number
    menor_umidade:number
}

type Relatorio_leituras_poluicao = {
    poluicao_media:number
    maior_poluicao:number
    menor_poluicao:number
}

type Relatorio_leituras_ruido = {
    media_ruido:number
    maior_ruido:number
    menor_ruido:number
}



//console.log(lista_leituras[0]['temperatura'])
//console.log(lista_leituras[1]['temperatura'])
/*
for (let index = 0; index < lista_leituras.length; index++) {
    console.log(lista_leituras[index]['umidade'])
}
*/

function processar_medicoes(){
    const medicoes_temperatura:Array<number> = obter_medicoes_temperatura(lista_leituras)
    const medicoes_umidade:Array<number> = obter_medicoes_umidade(lista_leituras)
    const medicoes_ruido:Array<number> = obter_medicoes_ruido(lista_leituras)
    const medicoes_poluicao:Array<number> = obter_medicoes_poluicao(lista_leituras)

    const media_temperatura = calcular_media(medicoes_temperatura)
    const  maior_temperatura = Math.max(...medicoes_temperatura)
    const menor_temperatura = Math.min(...medicoes_temperatura)
    
    const umidade_media = calcular_media(medicoes_umidade)
    const  maior_umidade = Math.max(...medicoes_umidade)
    const menor_umidade = Math.min(...medicoes_temperatura)
    
    const ruido_medio = calcular_media(medicoes_ruido)
    const  maior_ruido = Math.max(...medicoes_ruido)
    const menor_ruido = Math.min(...medicoes_temperatura)
    
    const poluicao_media = calcular_media(medicoes_poluicao)
    const  maior_poluicao = Math.max(...medicoes_poluicao)
    const menor_poluicao = Math.min(...medicoes_temperatura)

    console.log(gerar_relatorio_temperatura(media_temperatura, maior_temperatura, menor_temperatura))
    console.log(gerar_relatorio_umidade(umidade_media, maior_umidade, menor_umidade))
    console.log(gerar_relatorio_poluicao(poluicao_media, maior_poluicao, menor_poluicao))
    console.log(gerar_relatorio_ruido(ruido_medio, maior_ruido, menor_ruido))

}


const calcular_media = (valores:Array<number>) => valores.reduce((atual:number, total:number) => atual + total) / valores.length  
//const calcular_maior_valor = (...valores:Array<number>) => Math.max(valores)
//const calcular_menor_valor = (valores:Array<number>) => Math.min(valores)

function obter_medicoes_temperatura(medicoes:Array<Leitura>){
    let lista = []

    for (let index = 0; index < medicoes.length; index++) {
        lista.push(medicoes[index]['temperatura'])
    }

    return lista
}

function obter_medicoes_umidade(medicoes:Array<Leitura>){
    let lista = []

    for (let index = 0; index < medicoes.length; index++) {
        lista.push(medicoes[index]['umidade'])
    }

    return lista
}

function obter_medicoes_ruido(medicoes:Array<Leitura>){
    let lista = []

    for (let index = 0; index < medicoes.length; index++) {
        lista.push(medicoes[index]['nivel_ruido'])
    }

    return lista
}

function obter_medicoes_poluicao(medicoes:Array<Leitura>){
    let lista = []

    for (let index = 0; index < medicoes.length; index++) {
        lista.push(medicoes[index]['nivel_poluicao'])
    }

    return lista
}

function gerar_relatorio_umidade(media:number, maior:number, menor:number){
    const relatorio_umidade:Relatorio_leituras_umidade ={
        umidade_media:media,
        maior_umidade:maior,
        menor_umidade:menor
    }

    return `
    Relatório das umidades medidas\n
    Umidade média: ${relatorio_umidade.umidade_media}
    Maior umidade: ${relatorio_umidade.maior_umidade}
    Menor umidade: ${relatorio_umidade.menor_umidade}
    `
}

function gerar_relatorio_poluicao(media:number, maior:number, menor:number){
    const relatorio_poluicao:Relatorio_leituras_poluicao ={
        poluicao_media:media,
        maior_poluicao:maior,
        menor_poluicao:menor
    }

    return `
    Relatório dos níveis de poluição medidos\n
    Poluição média: ${relatorio_poluicao.poluicao_media}
    Maior nível de poluição: ${relatorio_poluicao.maior_poluicao}
    Menor nível de poluição: ${relatorio_poluicao.menor_poluicao}
    `
}

function gerar_relatorio_ruido(media:number, maior:number, menor:number){
    const relatorio_ruido:Relatorio_leituras_ruido ={
        media_ruido:media,
        maior_ruido:maior,
        menor_ruido:menor
    }

    return `
    Relatório dos níveis de ruído medidos\n
    Temperatura média: ${relatorio_ruido.media_ruido}
    Maior nível de ruído: ${relatorio_ruido.maior_ruido}
    Menor nível de ruído: ${relatorio_ruido.menor_ruido}
    `
}

function gerar_relatorio_temperatura(media:number, maior:number, menor:number){
    const relatorio_temperatura:Relatorio_leituras_temperatura ={
        temperatura_media: media,
        maior_temperatura: maior,
        menor_temperatura: menor
    }

    return `
    Relatório das temperaturas medidas\n
    Temperatura média: ${relatorio_temperatura.temperatura_media}
    Maior temperatura: ${relatorio_temperatura.maior_temperatura}
    Menor temperatura: ${relatorio_temperatura.menor_temperatura}
    `
}

const leitura1:Leitura = {
    temperatura:28,
    umidade:60,
    nivel_poluicao:5,
    nivel_ruido:3
}

const leitura2:Leitura = {
    temperatura:30,
    umidade:45,
    nivel_poluicao:45,
    nivel_ruido:7
}

const leitura3:Leitura = {
    temperatura:33,
    umidade:42,
    nivel_poluicao:75,
    nivel_ruido:20
}

let lista_leituras:Array<Leitura> = [leitura1, leitura2, leitura3]

//processar_medicoes()
console.log(processar_medicoes())