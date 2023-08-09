class Pessoa{
    constructor(name:string, age:Number){
        this.nome = name;
        this.idade = age
    }

    nome:string
    idade:Number    

    public show_name(){
        console.log(`Nome da pessoa é ${this.nome}`)
    }
}


const p1 = new Pessoa('Joao', 20)
p1.nome = 'Paulo'
p1.show_name()