// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.

type Carteira = {
    saldo: number,
    entradas: number[],
    saidas: number[],
}

const carteira: Carteira = {
    saldo: 1000,
    entradas: [],
    saidas: []
}

export const depositar = (valor: number) => {
    carteira.saldo += valor;
    carteira.entradas.push(valor);
    console.log(`Deposito de R$${valor}  - Saldo: R$${carteira.saldo}`)
}

export const sacar = (valor: number) => {
    if (carteira.saldo < valor) {
        return console.log(`Saque de R$${valor} não realizado | Saldo Insuficiente | Seu saldo atual é de R$${carteira.saldo}`);
    }
    carteira.saldo -= valor;
    carteira.saidas.push(valor);
    console.log(`Saque de R$${valor}  - Saldo: R$${carteira.saldo}`)
}

export const extrato = () => {
    console.log(`Extrato Bancário  - Saldo: R$${carteira.saldo}`);
}

