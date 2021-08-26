import { uuid } from "uuidv4";

export class User {
    //readonly => depois que ele for cetado não poder alter o id do usuario
    public readonly id: string; 

    public name: string; 
    public email: string; 
    public password: string; 

    //método construtor, usado na inicialização da classe - quando criamos um objeto
    //Omit = Vamos receber todas as propriedades da classe menos o id que será gerado externamente
    //colocamos também uma informação de id opcional 
    constructor(props: Omit<User, 'id'>, id?: string){
       Object.assign(this, props);
       if(!id){
        this.id = uuid();
    }
    }
}