import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

// Itens
const item1 = await createItem("HotWheels Ferrari", 20.99, 2);
const item2 = await createItem("HotWheels Lamborghini", 39.99, 3);

// Adcionar itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.dysplayCart(myCart);

// Deletar item do carrinho
await cartService.deleteItem(myCart, item2.name);

// Remover item do carrinho
await cartService.removeItem(myCart, item1);

await cartService.dysplayCart(myCart);

// Calcular valor
await cartService.calculateTotal(myCart);