// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.

interface Resultado {
    media: number;
    aprovado: boolean;
}

export function calcularMedia(n1: number, n2: number): Resultado {
    let media:number = (n1+n2)/2;
    let aprovado = true;
    if(media < 6){
        aprovado = false
    }

    return {
        media: media, 
        aprovado: aprovado
    }
}