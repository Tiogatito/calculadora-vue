<script setup>
defineProps({
    resultado: { type: Object, required: true },
    expressao: { type: String, required: true },
});
</script>

<template>
    <section
        class="resultado"
        :class="{ 'resultado--erro': resultado.estado === 'erro' }"
        aria-labelledby="titulo-resultado"
        aria-live="polite"
        aria-atomic="true"
    >
        <div class="resultado__cabecalho">
            <h2 id="titulo-resultado">Resultado</h2>
            <span v-if="resultado.estado === 'sucesso'" class="resultado__estado">
                <span aria-hidden="true" class="resultado__ponto"></span> Atualizado
            </span>
        </div>
        <template v-if="resultado.estado === 'sucesso'">
            <p class="resultado__expressao">{{ expressao }}</p>
            <output class="resultado__valor" for="primeiro-numero segundo-numero operacao">{{ resultado.texto }}</output>
            <p class="resultado__nota">Exibição com até 12 algarismos significativos.</p>
        </template>
        <div v-else class="resultado__aviso">
            <span class="resultado__traco" aria-hidden="true">—</span>
            <p>{{ resultado.mensagem }}</p>
        </div>
    </section>
</template>

<style scoped>
.resultado { padding: 28px; background: var(--color-primary); color: var(--color-on-primary); border-radius: 16px; min-height: 220px; }
.resultado__cabecalho { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
h2 { margin: 0; font-size: 14px; font-weight: 500; }
.resultado__estado { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--color-result-muted); }
.resultado__ponto { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.resultado__expressao { margin: 26px 0 6px; color: var(--color-result-muted); overflow-wrap: anywhere; }
.resultado__valor { display: block; font-size: clamp(36px, 5vw, 56px); line-height: 1.15; font-weight: 600; letter-spacing: -0.04em; font-variant-numeric: tabular-nums; overflow-wrap: anywhere; }
.resultado__nota { color: var(--color-result-muted); font-size: 12px; margin: 20px 0 0; }
.resultado__aviso { padding-top: 20px; }
.resultado__traco { font-size: 42px; line-height: 1; }
.resultado__aviso p { margin: 12px 0 0; font-size: 14px; }
.resultado--erro { background: var(--color-error-bg); color: var(--color-error); border: 1px solid var(--color-error-border); }
@media (max-width: 480px) { .resultado { padding: 24px; } }
</style>
