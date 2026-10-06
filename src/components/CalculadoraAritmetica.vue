<script setup>
import { computed, reactive } from 'vue';
import ResultadoCalculo from './ResultadoCalculo.vue';
import { calcular, formatarNumero, operacoes } from '../utils/calculos.js';

const estado = reactive({ primeiroNumero: 12, segundoNumero: 4, operacao: 'soma' });
const resultado = computed(() => calcular(estado.primeiroNumero, estado.segundoNumero, estado.operacao));
const operacaoAtual = computed(() => operacoes.find((item) => item.valor === estado.operacao));
const expressao = computed(() => {
    if (resultado.value.estado !== 'sucesso') return '';
    return `${formatarNumero(estado.primeiroNumero)} ${operacaoAtual.value.simbolo} ${formatarNumero(estado.segundoNumero)} =`;
});
</script>

<template>
    <section class="calculadora" aria-labelledby="titulo-calculadora">
        <div class="calculadora__cabecalho">
            <h2 id="titulo-calculadora">Faça sua conta</h2>
            <span class="calculadora__numero" aria-hidden="true">01 / 01</span>
        </div>
        <form class="calculadora__formulario" @submit.prevent>
            <div class="calculadora__numeros">
                <div class="campo">
                    <label for="primeiro-numero">Primeiro número</label>
                    <input id="primeiro-numero" v-model.number="estado.primeiroNumero" type="number" step="any" placeholder="Ex.: 12" aria-describedby="dica-numeros" />
                </div>
                <div class="campo">
                    <label for="segundo-numero">Segundo número</label>
                    <input id="segundo-numero" v-model.number="estado.segundoNumero" type="number" step="any" placeholder="Ex.: 4" :aria-describedby="estado.operacao === 'divisao' && estado.segundoNumero === 0 ? 'dica-numeros erro-divisao' : 'dica-numeros'" :aria-invalid="estado.operacao === 'divisao' && estado.segundoNumero === 0" />
                </div>
            </div>
            <p id="dica-numeros" class="calculadora__dica">Aceita negativos. Para decimais, use o separador do seu navegador: em português, vírgula (ex.: 2,5).</p>
            <div class="campo campo--operacao">
                <label for="operacao">Operação</label>
                <select id="operacao" v-model="estado.operacao">
                    <option v-for="operacao in operacoes" :key="operacao.valor" :value="operacao.valor">{{ operacao.simbolo }} &nbsp; {{ operacao.nome }}</option>
                </select>
            </div>
            <p v-if="estado.operacao === 'divisao' && estado.segundoNumero === 0" id="erro-divisao" class="calculadora__erro">O divisor deve ser diferente de zero.</p>
        </form>
        <ResultadoCalculo :resultado="resultado" :expressao="expressao" />
        <p class="calculadora__rodape">Altere qualquer valor. O resultado acompanha você.</p>
    </section>
</template>

<style scoped>
.calculadora { padding: 32px; background: var(--color-card); border: 1px solid var(--color-border); border-radius: 24px; }
.calculadora__cabecalho { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 32px; }
h2 { font-size: 18px; margin: 0; font-weight: 600; letter-spacing: -0.03em; }
.calculadora__numero { font: 12px var(--font-mono); color: var(--color-muted); }
.calculadora__numeros { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.campo { min-width: 0; }
.campo label { display: block; margin-bottom: 8px; font-size: 14px; font-weight: 500; }
input, select { display: block; width: 100%; min-height: 56px; padding: 12px 16px; color: var(--color-text); background: var(--color-input); border: 1px solid var(--color-control-border); border-radius: 10px; font: inherit; transition: border-color 160ms ease, background-color 160ms ease; }
input { font-size: 24px; font-weight: 500; font-variant-numeric: tabular-nums; }
input::placeholder { color: var(--color-muted); font-size: 18px; }
select { cursor: pointer; }
input:hover, select:hover { border-color: var(--color-primary); }
input[aria-invalid='true'] { border-color: var(--color-error); }
.calculadora__dica { color: var(--color-muted); font-size: 12px; margin: 10px 0 24px; }
.campo--operacao { margin-bottom: 24px; }
.calculadora__erro { font-size: 13px; color: var(--color-error); margin: -12px 0 24px; }
.calculadora__rodape { margin: 20px 0 0; text-align: center; color: var(--color-muted); font-size: 12px; }
@media (max-width: 480px) { .calculadora { padding: 24px 20px; border-radius: 20px; } .calculadora__numeros { gap: 12px; } .campo label { font-size: 12px; } input { padding: 12px; } }
@media (max-width: 340px) { .calculadora__numeros { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) { input, select { transition: none; } }
</style>
