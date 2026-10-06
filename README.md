# Conta — Calculadora aritmética em Vue

Exercício do módulo 27 do curso Profissão: Engenheiro Front-end.

## Requisitos implementados

- Projeto Vue 3 com componentes `.vue` e `<script setup>`.
- Dois campos numéricos para os operandos.
- Um `select` com adição, subtração, multiplicação e divisão.
- Resultado atualizado ao digitar ou selecionar outra operação, sem botão de calcular.
- Repositório próprio para a entrega.

## Executar

Requisitos: Node.js 24 e npm.

```sh
npm ci
npm run dev
```

Compilação de produção e prévia:

```sh
npm run build
npm run preview
```

## Recursos do módulo

O estado dos dois números e da operação é criado com `reactive`. Os controles utilizam `v-model` (e `v-model.number` nos campos numéricos). As propriedades `computed` derivam o resultado e a expressão, acompanhando cada alteração de estado.

O template utiliza interpolação `{{ }}`, `v-for` com `:key` nas operações, `v-if` para os estados do resultado, classes condicionais e propriedades entre componentes. Os estilos específicos ficam em blocos `scoped`; os tokens visuais e a estrutura da página ficam no CSS global.

## Comportamento

- Aceita números positivos, negativos, zero e decimais.
- Os campos são do tipo `number`, com `step="any"`. O separador decimal da entrada acompanha a configuração regional do navegador; em português, utilize vírgula, como em `2,5`.
- Um campo vazio pede o preenchimento dos dois números.
- Divisão por zero apresenta uma mensagem clara e destaca o divisor.
- Valores ou resultados não finitos apresentam erro em vez de `NaN` ou `Infinity`.
- Usa vírgula decimal e agrupamento brasileiro na exibição do resultado.
- Exibe até 12 algarismos significativos para manter a leitura dos cálculos. Os cálculos seguem a representação numérica do JavaScript, adequada a esta calculadora aritmética e sujeita à precisão de ponto flutuante.
- Rótulos visíveis, foco por teclado, link para pular ao formulário e anúncio do resultado por `aria-live`.
- Layout adaptável a celular e computador. Nenhum dado é enviado a APIs ou armazenado.

## Estrutura

```text
src/
  App.vue
  main.js
  style.css
  components/
    CalculadoraAritmetica.vue
    ResultadoCalculo.vue
  utils/
    calculos.js
public/
  favicon.svg
```

## Publicação

O arquivo `vercel.json` define Vite como framework, `npm run build` como comando de compilação e `dist` como diretório publicado.

## Referências

- [Formulários no Vue](https://vuejs.org/guide/essentials/forms.html)
- [Propriedades computadas](https://vuejs.org/guide/essentials/computed.html)
