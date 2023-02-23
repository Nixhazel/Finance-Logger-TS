import { HasFormater } from "../interfaces/HasFormater"


//classes
export class Payment implements HasFormater{
    constructor(
        readonly recepient: string,
        private details: string,
        public amount: number,
    ) {}

    format() {
        return `${this.recepient} is owed #${this.amount} for ${this.details}`
    }
}