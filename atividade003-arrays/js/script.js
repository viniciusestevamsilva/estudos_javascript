const produtos = [
    { nome: 'Sabonete Natural', preco: 15.00, categoria: "cosmetico" },
    { nome: 'Shampoo Organico', preco: 25.00, categoria: "cosmetico" },
    { nome: 'Granola Artesanal', preco: 18.50, categoria: "alimento" },
    { nome: 'Mel Puro', preco: 22.00, categoria: "alimento" }
];


document.addEventListener('DOMContentLoaded', function () {
    const seletor = document.getElementById('seletor');
    const resultado = document.getElementById('resultado');
    const listaProdutos = document.getElementById('listaProdutos');

    seletor.addEventListener('change', function () {
        // Pegar valor selecionado
        const categoriaSelecionada = seletor.value;

        // Criar novo array com os produtos filtrados
        let produtosFiltrados = [];

        if (categoriaSelecionada === 'todos') {
            produtosFiltrados = produtos;
        } else {
            // Usando .filter para criar novo array com produtos da categoria
            produtosFiltrados = produtos.filter(function(produto) {
                return produto.categoria === categoriaSelecionada;
            });
        }

        // Usando .reduce para somar os preços dos produtos filtrados
        let total = produtosFiltrados.reduce(function(soma, produto) {
            return soma + produto.preco;
        }, 0);

        // Mostrar total na tela
        resultado.innerHTML = 'R$ ' + total;

        // Limpar a lista antes de mostrar os novos
        listaProdutos.innerHTML = '';

        // Usar forEach para mostrar os produtos filtrados
        produtosFiltrados.forEach(function(produto) {
            const item = document.createElement('li');
            item.textContent = produto.nome + ' - R$ ' + produto.preco;
            listaProdutos.appendChild(item);
        });
    });
});
