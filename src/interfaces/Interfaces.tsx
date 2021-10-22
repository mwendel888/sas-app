export interface ILogin {
    password : string,
    email : string,
    mensagem : string
}

export interface IButonMenu {
    title:string,
    icon:string,
    route: string
}


export interface IProfrssor {
    id? : Number,
    id_professor? : Number,
    rp : Number,
    nome : string,
    email : string,
    data_nascimento : string,
    password? : string,
    id_status : number,
    mensagem? : string
}

export interface ICliente {
    id_cliente? : Number,
    nome_cliente? : string,
    dt_alteracao? : Date, 
    dt_criacao? : Date
    mensagem? : string,
}

export interface IDepartamento {
    id_departamento? : Number,
    nome_departamento? : string,
    id_cliente? : Number,
    nome_cliente? : string,
    dt_alteracao? : Date, 
    dt_criacao? : Date
    mensagem? : string,
}

export interface IOptions {
    value : string,
    label : string
} 