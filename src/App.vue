<script setup>
import CalculadoraAritmetica from './components/CalculadoraAritmetica.vue';
import { operacoes } from './utils/calculos.js';
</script>

<template>
    <a class="pular-conteudo" href="#calculadora">Ir para a calculadora</a>
    <div class="pagina">
        <header class="cabecalho">
            <div class="marca"><span class="marca__icone" aria-hidden="true">=</span> conta<span class="marca__ponto">.</span></div>
            <span class="cabecalho__descricao">Calculadora aritmética</span>
        </header>
        <main class="principal">
            <section class="apresentacao" aria-labelledby="titulo-principal">
                <p class="etiqueta"><span aria-hidden="true"></span> Simples. Assim mesmo.</p>
                <h1 id="titulo-principal">Uma conta.<br /><span>Um resultado.</span></h1>
                <p class="apresentacao__texto">Escolha a operação, digite dois números e deixe o resto com a gente.</p>
                <ul class="operacoes" aria-label="Operações disponíveis">
                    <li v-for="operacao in operacoes" :key="operacao.valor"><span aria-hidden="true">{{ operacao.simbolo }}</span>{{ operacao.verbo }}</li>
                </ul>
                <p class="apresentacao__nota">Sem botão de calcular.<br />O resultado aparece enquanto você digita.</p>
            </section>
            <div id="calculadora" class="area-calculadora" tabindex="-1"><CalculadoraAritmetica /></div>
        </main>
        <footer class="rodape"><span>Menos passos. Mais clareza.</span><span>Dica: use Tab para navegar entre os campos.</span></footer>
    </div>
</template>
