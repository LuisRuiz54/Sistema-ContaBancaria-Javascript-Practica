/* 
Ser autenticavel significa ter a propiedade "senha"
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
} 