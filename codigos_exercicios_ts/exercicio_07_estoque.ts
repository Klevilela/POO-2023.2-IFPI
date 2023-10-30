class Produto{
    private id:string
    private descricao:string
    private qtd_prod:number
    private valor_unitario:number

    constructor(id:string, descricao:string, qtd_prod:number, valor_unitario:number){
        this.id = id
        this.descricao = descricao
        this.qtd_prod = qtd_prod
        this.valor_unitario = valor_unitario
    }
    
    repor(valor:number):void{
        this.qtd_prod += valor;
    }

    darBaixa(valor:number):void{
        this.qtd_prod -= valor
    }
}

class ProdutoPerecivel extends Produto {
  private _dataValidade: Date;

  constructor(
    id: string,
    descricao: string,
    qtd_prod: number,
    valor_unitario: number,
    dataValidade: Date
  ) {
    super(id, descricao, qtd_prod, valor_unitario);
    this._dataValidade = dataValidade;
  }

    get data_validade(){
        return this._dataValidade
    }

    verificarValidade() {
        return this._dataValidade >= new Date();
    }

    repor(valor: number) {
        if (this.verificarValidade()) {
            super.repor(valor);
        }
    }

    darBaixa(valor: number) {
        if (this.verificarValidade()) {
            super.darBaixa(valor);
        }
    }
}

class Estoque{
    private produtos:Produto[] = []

    inserir(produto:Produto){
        if (!this.existe(produto['id'], produto['descricao'])){
            this.produtos.push(produto)
        }
        /*if (!this.consultarPorId(produto['id'])){
                this.produtos.push(produto)
            }
            //this.produtos.push(produto)
        }*/
        
    }

    existe(id:string, descricao:string):boolean{
        let achou = false

        for (let index = 0; index < this.produtos.length; index++) {
            if(this.produtos[index]['id'] == id || this.produtos[index]['descricao'] == descricao){
                achou = true
                break
            }
        }

        return achou
    }

    consultarPorId(id:string):Produto{
        let produtoProcurado!: Produto
        for (let index = 0; index < this.produtos.length; index++) {
            if (this.produtos[index]['id'] == id){
                produtoProcurado = this.produtos[index]
            }
        }
        return produtoProcurado
    }

    excluir(produto:Produto){
        if (this.consultarPorId(produto['id'])){
            this.produtos.splice(0, this.produtos.length)
        }
    }

    darBaixa(id:string,  valor:number){
        let produtoProcurado = this.consultarPorId(id)
        produtoProcurado.darBaixa(valor)    
    }

    repor(id:string, valor:number){
        let produtoProcurado = this.consultarPorId(id)
        produtoProcurado.repor(valor)
    }

    listarProdutosVencidos():ProdutoPerecivel[]{
        let produtos_pereciveis:ProdutoPerecivel[] = []

        for (let produto of this.produtos) {
            if (produto instanceof ProdutoPerecivel && !produto.verificarValidade()){
                produtos_pereciveis.push(produto)
            }
        }

        return produtos_pereciveis
    }
}

const produto1 = new Produto('1', 'produto v', 3, 4)
const produto2 = new Produto('2', 'produto x', 2, 1.75)

const prod_perec1 = new ProdutoPerecivel('3', 'sdsd', 3, 5, new Date("2023-11-02"))
const prod_perec2 = new ProdutoPerecivel('4', 'cfrw', 2, 2, new Date("2023-10-02"))

const estoque = new Estoque()

console.log(prod_perec1.verificarValidade())
console.log(prod_perec2.verificarValidade())
prod_perec2.repor(1)
console.log(prod_perec2)
console.log(new Date());
prod_perec1.darBaixa(1)
console.log(prod_perec1)

estoque.inserir(prod_perec1)
estoque.inserir(prod_perec2)
estoque.inserir(produto1)
estoque.inserir(produto2)

console.log(estoque.listarProdutosVencidos())
