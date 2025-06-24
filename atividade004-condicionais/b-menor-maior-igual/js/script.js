
      function verificarNumeros() {
      const n1 = parseFloat(document.getElementById('num1').value);
      const n2 = parseFloat(document.getElementById('num2').value);
      const n3 = parseFloat(document.getElementById('num3').value);
      const resultado = document.getElementById('resultadoNumeros');

      if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultado.textContent = 'Por favor, preencha todos os campos com números válidos.';
        return;
      }

      if (n1 === n2 && n2 === n3) {
        resultado.textContent = 'Todos os números são IGUAIS.';
      } else {
        const maior = Math.max(n1, n2, n3);
        const menor = Math.min(n1, n2, n3);
        resultado.textContent = `Maior: ${maior} | Menor: ${menor}`;
      }
    }