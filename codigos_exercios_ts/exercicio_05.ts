//questão 2
//a
class Postagem {
  id: number;
  texto: string;
  qtd_curtidas: number;

  constructor(id: number, texto: string, qtd_curtidas: number) {
    this.id = id;
    this.texto = texto;
    this.qtd_curtidas = qtd_curtidas;
  }

  curtir(): void {
    this.qtd_curtidas++;
  }

  toString(): string {
    return `Postagem: ${this.texto}\nCurtidas: ${this.qtd_curtidas}`;
  }
}

//questão 2
//b
class Microblog {
  postagens: Array<Postagem> = [];

  constructor(postagens:Postagem[]){
    this.postagens = postagens
  }

  criarPostagem(postagem: Postagem): void {
    /*if (this.postagens.length != 0) {
      this.postagens.push(postagem);
    }*/
    this.postagens.push(postagem)
    /*for (let i = 0; i < this.postagens.length; i++) {
      this.postagens.push(postagem)
    }*/
  }

  excluirPostagem(id_postagem: number): void {
    for (let i = 0; i < this.postagens.length; i++) {
      if (this.postagens[i]["id"] == id_postagem) {
        this.postagens.splice(i, 1);
      }
    }
  }

  obterPostagemMaisCurtida() {
    let qtd_curtidas_atual = 0;
    let postagem_mais_curtida;
    for (let i = 0; i < this.postagens.length; i++) {
      if (this.postagens[i]["qtd_curtidas"] > qtd_curtidas_atual) {
        qtd_curtidas_atual = this.postagens[i]["qtd_curtidas"];
        postagem_mais_curtida = this.postagens[i];
      }
    }

    return postagem_mais_curtida;
  }

  obterPostagens(): string {
    let postagens = ``;

    for (let i = 0; i < this.postagens.length; i++) {
      postagens += `Id: ${this.postagens[i]["id"]}\nTexto: ${this.postagens[i]["texto"]}\nCurtidas: ${this.postagens[i]["qtd_curtidas"]}\n\n`;
      //Postagem.toString()
    }

    return postagens;
  }
}

let post1:Postagem = new Postagem(1, 'Olá, bom dia !', 2)
let post2:Postagem = new Postagem(2, 'Olá, boa tarde !', 3)
let post3:Postagem = new Postagem(3, 'Olá, boa noite !', 1)
let post4:Postagem = new Postagem(4, 'Olá, boa madrugada !', 1)

let posts:Postagem[] = []
let blog:Microblog = new Microblog(posts)

post1.curtir()
post1.curtir()
console.log(post1.toString())
//console.log(post2.toString())


blog.criarPostagem(post1)
blog.criarPostagem(post2)
blog.criarPostagem(post3)
blog.criarPostagem(post4)
console.log(blog.postagens)

console.log(blog.obterPostagens())
blog.excluirPostagem(4)
console.log(blog.obterPostagens())
console.log(blog.obterPostagemMaisCurtida())