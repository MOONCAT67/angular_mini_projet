export class offers{
    id:string;
    constructor(public pic:string,
        public desc:string,
        public nameS:string){
            this.id=crypto.randomUUID().substring(0,8);
        }
}