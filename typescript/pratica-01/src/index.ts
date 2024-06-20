import { calcularMedia } from "./ex1";
import {calcularMediaPeso} from "./ex2";
import {extrato, sacar, depositar} from "./ex3";
import {cadastrarProduto, listarProdutos, excluirProduto} from "./ex4";
import {showUsers, createUser} from "./ex5";
import {showDirectors, createDirector} from "./ex6";
import {getEmployees, showEmployees} from "./ex7";

const resultado = calcularMedia(5,4)
console.log("**Ex. 1: ");
console.log(resultado);

console.log("**Ex. 2: ");
console.log(`${calcularMediaPeso}`);

console.log("**Ex. 3: ");
extrato();
sacar(100);
depositar(500);
sacar(1000);
sacar(1000);
extrato();

console.log("**Ex. 4: ");
cadastrarProduto("Café", 10);
cadastrarProduto("Açucar", 20);
console.log("*Lista de produtos*");
listarProdutos();
excluirProduto("Açucar");
console.log("*Lista de produtos*");
listarProdutos();
cadastrarProduto("Pepsi", 100);
cadastrarProduto("Pão", 50);
listarProdutos();

console.log("**Ex. 5: ");
createUser("Daphne", 23, "analista de TI", "R$1000");
createUser("Daphne", 23, "analista de TI");
showUsers();

console.log("**Ex. 6: ");
createDirector("Daphne", 23, 5, "R$1000");
createDirector("Daphne", 23, 5);
showDirectors();

console.log("**Ex. 7: ");
getEmployees("Daphne", 23, "analista de TI", undefined, "R$1000");
getEmployees("Daphne", 23, undefined, 5);
showEmployees();