document.addEventListener('DOMContentLoaded', function () {
    const botaoTema = document.getElementById('alternar-tema');
    const body = document.body; // Referência ao body
    let temaClaro = true;

    
    body.classList.add('tema-claro');

    botaoTema.addEventListener('click', function () {
        if (temaClaro) {
            body.classList.remove('tema-claro');
            body.classList.add('tema-escuro');
        } else {
            body.classList.remove('tema-escuro');
            body.classList.add('tema-claro'); 
        }

        temaClaro = !temaClaro; // Inverte o tema
    });
});
