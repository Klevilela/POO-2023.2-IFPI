//questão 2
//a
var Postagem = /** @class */ (function () {
    function Postagem(id, texto, qtd_curtidas) {
        this.id = id;
        this.texto = texto;
        this.qtd_curtidas = qtd_curtidas;
    }
    Postagem.prototype.curtir = function () {
        this.qtd_curtidas++;
    };
    Postagem.prototype.toString = function () {
        return "Postagem: ".concat(this.texto, "\nCurtidas: ").concat(this.qtd_curtidas);
    };
    return Postagem;
}());
//questão 2
//b
var Microblog = /** @class */ (function () {
    function Microblog(postagens) {
        this.postagens = [];
        this.postagens = postagens;
    }
    Microblog.prototype.criarPostagem = function (postagem) {
        /*if (this.postagens.length != 0) {
          this.postagens.push(postagem);
        }*/
        this.postagens.push(postagem);
        /*for (let i = 0; i < this.postagens.length; i++) {
          this.postagens.push(postagem)
        }*/
    };
    Microblog.prototype.excluirPostagem = function (id_postagem) {
        for (var i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i]["id"] == id_postagem) {
                this.postagens.splice(i, 1);
            }
        }
    };
    Microblog.prototype.obterPostagemMaisCurtida = function () {
        var qtd_curtidas_atual = 0;
        var postagem_mais_curtida;
        for (var i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i]["qtd_curtidas"] > qtd_curtidas_atual) {
                qtd_curtidas_atual = this.postagens[i]["qtd_curtidas"];
                postagem_mais_curtida = this.postagens[i];
            }
        }
        return postagem_mais_curtida;
    };
    Microblog.prototype.obterPostagens = function () {
        var postagens = "";
        for (var i = 0; i < this.postagens.length; i++) {
            postagens += "Id: ".concat(this.postagens[i]["id"], "\nTexto: ").concat(this.postagens[i]["texto"], "\nCurtidas: ").concat(this.postagens[i]["qtd_curtidas"], "\n\n");
            //Postagem.toString()
        }
        return postagens;
    };
    return Microblog;
}());
var post1 = new Postagem(1, 'Olá, bom dia !', 2);
var post2 = new Postagem(2, 'Olá, boa tarde !', 3);
var post3 = new Postagem(3, 'Olá, boa noite !', 1);
var post4 = new Postagem(4, 'Olá, boa madrugada !', 1);
var posts = [];
var blog = new Microblog(posts);
post1.curtir();
post1.curtir();
console.log(post1.toString());
//console.log(post2.toString())
blog.criarPostagem(post1);
blog.criarPostagem(post2);
blog.criarPostagem(post3);
blog.criarPostagem(post4);
console.log(blog.postagens);
console.log(blog.obterPostagens());
blog.excluirPostagem(4);
console.log(blog.obterPostagens());
console.log(blog.obterPostagemMaisCurtida());
