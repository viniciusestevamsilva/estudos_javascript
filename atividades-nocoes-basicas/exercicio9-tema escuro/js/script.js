document.addEventListener('DOMContentLoaded', function () {
    const botaoTema = document.getElementById('alternar-tema');
    const body = document.body; // Referência ao body
    let temaClaro = true;

    // Define as cores iniciais para o tema claro
    body.classList.add('tema-claro'); // Para garantir que comece com o tema claro

    botaoTema.addEventListener('click', function () {
        if (temaClaro) {
            body.classList.remove('tema-claro');
            body.classList.add('tema-escuro'); // Ativa o tema escuro
        } else {
            body.classList.remove('tema-escuro');
            body.classList.add('tema-claro'); // Ativa o tema claro
        }

        temaClaro = !temaClaro; // Inverte o tema
    });
});
