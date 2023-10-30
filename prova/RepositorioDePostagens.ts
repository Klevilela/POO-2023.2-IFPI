import { Perfil } from "./Perfil";
import { Postagem } from "./Postagem";
import { PostagemAvancada } from "./PostagemAvancada";

export class RepositorioDePostagens{
    
    private postagens: Postagem[] = []
    //private postagensAvancadas:PostagemAvancada[] = []

        incluir(postagem:Postagem): void{
            this.postagens.push(postagem)
        }
    
        consultar(id:number, texto:string, hashtag: string, perfil:Perfil){
            //let achou: boolean = false;
    
            let perfilProcurado!: Postagem;
    
            for  (let postagem of this.postagens) {
                if (postagem instanceof PostagemAvancada){

                    if (postagem['_id'] == id){
                        perfilProcurado = postagem
                        break
                    }
                    else if (postagem['_texto'] == texto){
                        perfilProcurado = postagem
                        break
                    }
                    else if (postagem['_hashtags'].includes(hashtag)){
                        perfilProcurado = postagem
                        break
                    }
                }
    
                return perfilProcurado
            }

        }
}