const produtos = [
    { Total: 'Sabonete Natural', R$: 15.00, id: "cosmetico"},
    { Total: 'Shampoo Organico',  R$: 25.00,  id: "cosmetico"},
    { Total: 'Granola Artesanal',  R$: 18.50,  id: "alimento"},
    { Total: 'Mel Puro',  R$: 22.00, id: "alimento"},
];

document.addEventListener('DOMContentLoaded', function() {

    document.documentElement('seleor').addEventListener('click', function() {
        const alimentos = produtos.filter(function(produto) {
            return produto.id == "alimento";
        });

        document.getElementById('resultado'). innerHTML ` <strong> ${JSON.stringify(alimentos)}</strong>`;
    });
});