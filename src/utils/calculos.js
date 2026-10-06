export const operacoes = [
    { valor: 'soma', nome: 'Adição', simbolo: '+', verbo: 'Somar' },
    { valor: 'subtracao', nome: 'Subtração', simbolo: '−', verbo: 'Subtrair' },
    { valor: 'multiplicacao', nome: 'Multiplicação', simbolo: '×', verbo: 'Multiplicar' },
    { valor: 'divisao', nome: 'Divisão', simbolo: '÷', verbo: 'Dividir' },
];

const formatador = new Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 12,
});

export function formatarNumero(numero) {
    return formatador.format(Object.is(numero, -0) ? 0 : numero);
}

export function calcular(primeiroNumero, segundoNumero, operacao) {
    if (primeiroNumero === '' || segundoNumero === '') {
        return { estado: 'vazio', mensagem: 'Preencha os dois números para ver o resultado.' };
    }

    if (typeof primeiroNumero !== 'number' || typeof segundoNumero !== 'number'
        || !Number.isFinite(primeiroNumero) || !Number.isFinite(segundoNumero)) {
        return { estado: 'erro', mensagem: 'Informe dois números válidos.' };
    }

    if (operacao === 'divisao' && segundoNumero === 0) {
        return { estado: 'erro', mensagem: 'Não é possível dividir por zero. Altere o segundo número.' };
    }

    let valor;
    switch (operacao) {
        case 'soma': valor = primeiroNumero + segundoNumero; break;
        case 'subtracao': valor = primeiroNumero - segundoNumero; break;
        case 'multiplicacao': valor = primeiroNumero * segundoNumero; break;
        case 'divisao': valor = primeiroNumero / segundoNumero; break;
        default: return { estado: 'erro', mensagem: 'Escolha uma operação válida.' };
    }

    if (!Number.isFinite(valor)) {
        return { estado: 'erro', mensagem: 'O resultado ultrapassa o limite numérico. Use valores menores.' };
    }

    return { estado: 'sucesso', valor, texto: formatarNumero(valor) };
}
