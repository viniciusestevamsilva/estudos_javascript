  function verificarVelocidade() {
      const velocidade = parseFloat(document.getElementById('velocidade').value);
      const resultado = document.getElementById('resultadoVelocidade');

      if (isNaN(velocidade) || velocidade < 0) {
        resultado.innerHTML = '<span class="alerta">Por favor, informe uma velocidade válida.</span>';
        return;
      }

      if (velocidade <= 60) {
        resultado.innerHTML = '<span class="seguro">Velocidade segura. Dirija com responsabilidade!</span>';
      } else {
        resultado.innerHTML = '<span class="alerta">Velocidade acima do permitido! Reduza imediatamente!</span>';
      }
    }