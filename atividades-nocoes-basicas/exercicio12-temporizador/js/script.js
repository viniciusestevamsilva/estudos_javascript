
    const temporizador = document.getElementById('temporizador');
    let i = 10;

    while (i >= 0) {
      
      if (i === 0) {
        temporizador.textContent = 'Tempo esgotado!';
      } else {
        temporizador.textContent = i;
      }

      
      let espera = 0;
      while (espera < 99999999) {
        espera++;
      }

      i--;
    }
