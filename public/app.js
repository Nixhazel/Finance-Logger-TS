import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('lulu', 'work on the lulu website', 250);
let invoice = [];
invoice.push(invOne);
invoice.push(invTwo);
invoice.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
