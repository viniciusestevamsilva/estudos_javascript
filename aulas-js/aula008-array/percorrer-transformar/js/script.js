/**
 * ARQUIVO: meodos.js
 * DESCRIÇÃO: Demonstração dos principais metodos de iteração de arrays em javascript
 * AUTOR: [Seu nome]
 * DATA: [Data]
 * VERSÃO: 1.0
 */

// =================================================
// DADOS DE EXEMPLO
// =================================================

// Arrays de numeros para exemplos basciso
const numeros = [1, 2, 3, 4, 5];

// Arrays de obejtos (pessoas para exemplos mais complexos
const pessoas = [
    { nome: 'Gal Gadot', idade: 40, cidade: 'Rosh HaAyin' },
    { nome: 'Elizabeth Olsen', idade: 36, cidade: 'Sherman Oaks' },
    { nome: 'Alexnadra Daddario', idade: 39, cidade: 'Nova York' },
    { nome: 'Anna de Armas', idade: 37, cidade: 'Havana' },
    { nome: 'Grace Kelly', idade: 95, cidade: 'Diladelfia' },
    { nome: 'Jaz Sinclair', idade: 14, cidade: 'Dallas' }
];

// =================================================
// METODOS DE ITERAÇÃO
// =================================================

/** METODOS: forEach() (paraCada)
 * DESCRIÇÃO: Executa uma função para cada elementos do array
 * NÃO RETORNA um novo array
 */
document.getElementById('botao-paraCada').addEventListener('click', function() {
    // Variavel para acumular os resutados
    let resultado = ''

    // Usando forEach() iterar sobre cada numero
    numeros.forEach(function(numero, indice) {
        resultado += `Posição ${indice} ${numero}\n`;
    });

    //Exibindo o resultaado na pagina 
    document.getElementById('resultado-paraCada').innerHTML = `
        <strong>Array Original:</strong> ${JSON.stringify(numeros)}<br><br>
        <strong>Iteração com forEach():</strong><br>
        ${resultado}
        <small>Observação: forEach() não retorna um novo array</small>
        `;
});

/**
 * METODO: map() (mapear)
 * DESCRIÇÃO: Cria um nobo array com os resultados de uma função aplicada a cada elemento
 */
document.getElementById('botao-mapear').addEventListener('click', function() {
    // Usando map criar um novo array com os quadrados dos numero
    const quadrados = numeros.map(function(numero) {
        return numero * numero;
    });    

    // Exibindo o resultado
    document.getElementById('resultado-mapear').innerHTML = `
        <strong>Array Original:</strong> ${JSON.stringify(numeros)}<br><br>
        <strong>Iteração com quadrados map():</strong> ${JSON.stringify(quadrados)} <br>
        <small>Observação: map sempre retorna um novo array do mesmo tamanhos</small>
        `;
});

/**
 * METODOS: filter() (filtrar)
 * DESCRICAO: Cria um novo array com elementos que passam em um teste (função)
 */
document.getElementById('botao-filtrar').addEventListener('click', function() {
    // Filtrando apenas pessoas com idade >= 18
    const maioresDeIdade = pessoas.filter(function(pessoa) {
        return pessoa.idade >= 18;
    });

    // Exibindo o resultados
    document.getElementById('resulados-filtrar').innerHTML= `
        <strong>Array Original:</strong> ${JSON.stringify(pessoas, null, 2)}<br><br>
        <strong>Maiores de idade (filter):</strong> ${JSON.stringify(maioresDeIdade, null, 2)} <br>
        <small>Observação: Filter retorna um novo array apenas com elementos que passam no teste</small>
        `;
});

/**
 * METODOS: reduce() (reduzir)
 * DESCRIÇÃO: Reduz o array a um unico valor usando uma função acumuladfora
 */
document.getElementById('botao-reduzir').addEventListener('click', function() {
    //Somando todos os numeros do array
    const somaTtoal = numeros.reduce(function(acumulador, numeroAtual) {
        return acumulador + numeroAtual;

    }, 0); // 0 é o valor inicial do acumulador

    // Eibindo o resultado
    document.getElementById('resultado-reduzir').innerHTML = `
        <strong>Array Original:</strong> ${JSON.stringify(numeros)}<br><br>
        <strong>Maiores de idade (filter):</strong> ${somaTotal} <br>
        <small>Observação: reduce pode transfomra um arrya em qualquer tipo de vaslor</small>
       `
})