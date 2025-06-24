  // C) Verificação de Velocidade
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

    // D) Cálculo de Aumento Salarial
    function calcularAumento() {
      const salario = parseFloat(document.getElementById('salario').value);
      const resultado = document.getElementById('resultadoSalario');

      if (isNaN(salario) || salario <= 0) {
        resultado.innerHTML = '<span class="alerta">Erro: informe um salário válido e maior que zero.</span>';
        return;
      }

      let novoSalario = salario;
      if (salario < 1000) {
        novoSalario = salario * 1.10;
        resultado.innerHTML = `Salário com aumento de 10%: R$ ${novoSalario.toFixed(2)}`;
      } else if (salario > 1500) {
        novoSalario = salario * 1.05;
        resultado.innerHTML = `Salário com aumento de 5%: R$ ${novoSalario.toFixed(2)}`;
      } else {
        resultado.innerHTML = `Salário permanece o mesmo: R$ ${salario.toFixed(2)}`;
      }
    }