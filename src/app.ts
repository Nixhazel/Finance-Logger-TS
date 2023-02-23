import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormater } from "./interfaces/HasFormater.js";

let docOne: HasFormater;
let docTwo: HasFormater
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}



const invOne = new Invoice('mario', 'work on the mario website', 250)
const invTwo = new Invoice('lulu', 'work on the lulu website', 250)

let invoice: Invoice[] = [];
invoice.push(invOne);
invoice.push(invTwo);


invoice.forEach(inv => {
    console.log(inv.client, inv.amount,inv.format());
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});