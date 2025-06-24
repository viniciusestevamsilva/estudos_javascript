
  function verificarParOuImpar() {
      const numero = parseInt(document.getElementById('numeroParImpar').value);
      const resultado = document.getElementById('resultadoParImpar');

      if (isNaN(numero)) {
        resultado.textContent = 'Por favor, digite um número válido.';
        return;
      }

      if (numero % 2 === 0) {
        resultado.textContent = `O número ${numero} é PAR.`;
      } else {
        resultado.textContent = `O número ${numero} é ÍMPAR.`;
      }
    }
