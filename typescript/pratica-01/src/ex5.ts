// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”

export type User = {
    nome: string;
    idade: number;
    ocupacao: string;
    salario?: string;
}

export const users: User[] = [];

export function createUser(nome: string, idade: number, ocupacao: string, salario: string = "N/A"){
    users.push({
        nome: nome,
        idade: idade,
        ocupacao: ocupacao,
        salario: salario,
    });
}

export function showUsers(){
    for (const user of users) {
        console.log(`${user.nome}, ${user.idade} anos, ${user.ocupacao}, salario ${user.salario}`);
    }
}