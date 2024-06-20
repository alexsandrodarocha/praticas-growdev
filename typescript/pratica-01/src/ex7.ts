// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.

import { User} from "./ex5";
import { Director } from "./ex6";

type Employees = User | Director;

const employees: Employees[] = [];

export function getEmployees(nome: string, idade: number, ocupacao?: string, comissao?: number, salario: string = "N/A"){
    if(ocupacao){
        employees.push({
            nome: nome,
            idade: idade,
            ocupacao: ocupacao,
            salario: salario
        });
    }
    if(comissao){
        employees.push({
            nome: nome,
            idade: idade,
            comissao: comissao,
            salario: salario,
        });
    }
}

export function showEmployees() {
    employees.forEach((employee: any) => {
        console.log(`
            ${employee.ocupacao ? `*Usuário` : `*Diretor`}
            Nome: ${employee.nome}
            Idade: ${employee.idade}
            ${employee.ocupacao ? `Ocupação: ${employee.ocupacao}` : `Comissão: ${employee.comissao}`}
            Salário: ${employee.salario}
            `);
    });
};

