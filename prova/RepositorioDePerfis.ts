import { Perfil } from "./Perfil";

export class RepositorioDePerfis{
    private perfis: Perfil[] = []

    incluir(perfil:Perfil): void{
        this.perfis.push(perfil)
    }

    consultar(id:number, nome:string, email: string){
        let achou: boolean = false;

        let perfilProcurado!: Perfil;

        for  (let perfil of this.perfis) {
            if (perfil['_id'] == id){
                perfilProcurado = perfil
                break
            }
            else if (perfil['_nome'] == nome){
                perfilProcurado = perfil
                break
            }
            else if (perfil['_email'] == email){
                perfilProcurado = perfil
                break
            }

            return perfilProcurado
        }
    }
}