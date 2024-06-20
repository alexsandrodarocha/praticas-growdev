// 6. Usando o contexto do exercício 5, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

export type Director = {
    nome: string;
    idade: number;
    comissao: number;
    salario?: string;
}

export const directors: Director[] = [];

export function createDirector(nome: string, idade: number, comissao: number, salario: string = "N/A"){
    directors.push({
        nome: nome,
        idade: idade,
        comissao: comissao,
        salario: salario,
    });
}

export function showDirectors(){
    for (const director of directors) {
        console.log(`Diretor(a) ${director.nome}, ${director.idade} anos, comissão nível ${director.comissao}, salario ${director.salario}`);
    }
}