// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.

type Produto = {
    nome: string;
    quantidade: number;
}

const lista: Produto[] = [];

export function cadastrarProduto(nome: string, quantidade: number) {
    lista.push({
        nome: nome,
        quantidade: quantidade,
    });

    console.log(`*Produto ${nome} cadastrado com sucesso!`)
}

export function listarProdutos() {
    for (const produto of lista) {
        console.log(`| Produto: ${produto.nome} | Quantidade: ${produto.quantidade} |`);
    }
}

export function excluirProduto(nome: string) {
    const produtoIndex = lista.findIndex((produto: Produto) => produto.nome == nome);
    lista.splice(produtoIndex);
    console.log(`*Produto ${nome} excluído com sucesso!`)
}