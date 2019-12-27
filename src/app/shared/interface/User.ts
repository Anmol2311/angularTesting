export class User{
    uname:string;
    uemail:string;
    umobile:number;
    ucity:string;
    terms:string;

    constructor(value:object = {}){
        Object.assign(this,value);
    }
}