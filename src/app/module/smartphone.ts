export class smartphone{
    id:string;
    constructor(public name: string,
        public number:number,
        public imgURl: string,
        public imgs:string[],
        public desc:string,
        public fabrication:string){
            this.id=crypto.randomUUID().substring(0.8);
        }

        
}