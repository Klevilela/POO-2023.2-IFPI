import { Perfil } from "./Perfil";
import { Postagem } from "./Postagem";
import { PostagemAvancada } from "./PostagemAvancada";

export class RepositorioDePostagens{
    
    constructor(private _postagens: Postagem[]){}

    get postagens() {
        return this._postagens
    }
    //private postagensAvancadas:PostagemAvancada[] = []

        incluir(postagem:Postagem): void{
            this._postagens.push(postagem)
        }
    
        /*consultar(...params: (number | string | Perfil)[]){
            //let achou: boolean = false;
    
            let perfilProcurado!: Postagem;
    
            for  (let postagem of this._postagens) {
                if (postagem instanceof PostagemAvancada){
                    let [id, texto, hashtag, perfil] = params;
                    
                    if (typeof id === 'number' && postagem["_id"] == id) {
                      perfilProcurado = postagem;
                      break;
                    } else if (
                      typeof texto === 'string' &&
                      postagem["_texto"] == texto
                    ) {
                      perfilProcurado = postagem;
                      break;
                    } else if (
                      typeof hashtag === 'string' &&
                      postagem["_hashtags"].includes(hashtag)
                    ) {
                      perfilProcurado = postagem;
                      break;
                    }
                    else if(
                      perfil instanceof Perfil &&
                      postagem['_perfil'] == perfil
                    ){
                      perfilProcurado = postagem;
                      break;
                    }
                }
    
                return perfilProcurado
            }

        }*/
        consultar(id?: number, texto?: string, hashtag?: string, perfil?: Perfil): Postagem[] {
          let postagensEncontradas: Postagem[] = [];
        
          for (let postagem of this.postagens) {
            if (postagem instanceof PostagemAvancada) {
              /*if (!id || postagem['_id'] == id){
                postagensEncontradas.push(postagem);
                break
              }
              else if (!texto || postagem['_texto'] == texto){
                postagensEncontradas.push(postagem);
                break
              }
              else if (!hashtag || postagem['_hashtags'].includes(hashtag)){
                postagensEncontradas.push(postagem);
                break
              }
              else if (!perfil || postagem['_perfil'] === perfil){
                postagensEncontradas.push(postagem);
                break
              }*/

              //outra versão
              if (postagem['_id'] == id){
                postagensEncontradas.push(postagem);
                break
              }
              else if (postagem['_texto'] == texto){
                postagensEncontradas.push(postagem);
                break
              }
              else if (!hashtag || postagem['_hashtags'].includes(hashtag)){
                postagensEncontradas.push(postagem);
                break
              }
              else if (postagem['_perfil'] === perfil){
                postagensEncontradas.push(postagem);
                break
              }
              /*if (
                (!id || postagem['_id'] === id) &&
                (!texto || postagem['_texto'] === texto) &&
                (!hashtag || postagem['_hashtags'].includes(hashtag)) &&
                (!perfil || postagem['_perfil'] === perfil)
              ) {
                postagensEncontradas.push(postagem);
              }*/
            }
          }
        
          return postagensEncontradas;
        }
}