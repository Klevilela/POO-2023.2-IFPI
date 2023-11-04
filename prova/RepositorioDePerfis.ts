import { Perfil } from "./Perfil";

export class RepositorioDePerfis {
  private perfis: Perfil[] = [];

  incluir(perfil: Perfil): void {
    if (!this.consultar(perfil.id, perfil.nome, perfil.email)) {
      this.perfis.push(perfil);
    }
  }

  consultar(id?: number, nome?: string, email?: string): Perfil {
    //let achou: boolean = false;

    let perfilProcurado!: Perfil;

    for (let perfil of this.perfis) {
      //let [id, nome, email] = params;
      /*if (
                (!id || perfil.id === id) &&
                (!nome || perfil.nome === nome) &&
                (!email || perfil.email === email)
              ) {
                perfilProcurado =  perfil;
              }*/

      if (perfil["_id"] == id) {
        perfilProcurado = perfil;
        break;
      }
      else if (perfil["_nome"] == nome) {
        perfilProcurado = perfil;
        break;
      }
      else if (perfil["_email"] == email) {
        perfilProcurado = perfil;
        break;
      }
    }
    return perfilProcurado;
  }
}