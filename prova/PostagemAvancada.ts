import { Perfil } from "./Perfil";
import { Postagem } from "./Postagem";

export class PostagemAvancada extends Postagem {
  private _hashtags: string[] = [];
  private _vizualizacoesRestantes: number;
  constructor(
    _id: number,
    _texto: string,
    _curtidas: number,
    _descurtidas: number,
    _date: Date,
    _perfil: Perfil,
    _vizaulizacoesRestantes: number
  ) {
    super(_id, _texto, _curtidas, _descurtidas, _date, _perfil);
    this._vizualizacoesRestantes = _vizaulizacoesRestantes;
  }

  adicionarHashtag(hashtag:string):void{
    this._hashtags.push(hashtag)
  }

  existeHashtag(hashTag:string):boolean{
    let achou:boolean = false

    for (let hashtag of this._hashtags) {
        if (hashtag == hashTag){
            achou = true
        }
    }

    return achou
  }

  decrementarVizualizacoes():void{
    this._vizualizacoesRestantes --
  }
}