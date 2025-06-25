document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btnCalcular');
  const resultado = document.getElementById('resultadoBhaskara');

  btn.addEventListener('click', function () {
    const a = 1;
    const b = -6;
    const c = 5;

    // Passo 1: Calcular delta
    const delta = b * b - 4 * a * c;

    // Passo 2: Calcular as raízes manualmente (sem Math.sqrt)
    function raizQuadrada(n) {
      let x = n;
      let y = 1;
      let e = 0.000001; // precisão
      while (x - y > e) {
        x = (x + y) / 2;
        y = n / x;
      }
      return x;
    }

    const raizDelta = raizQuadrada(delta);

    // Passo 3: Aplicar fórmula de Bhaskara
    const x1 = (-b + raizDelta) / (2 * a);
    const x2 = (-b - raizDelta) / (2 * a);

    resultado.innerHTML = `
      <p>Dados: a = ${a}, b = ${b}, c = ${c}</p>
      <p>Δ = b² - 4ac = (${b})² - 4 × ${a} × ${c} = ${delta}</p>
      <p>√Δ = ${raizDelta.toFixed(4)}</p>
      <p>Fórmula de Bhaskara:</p>
      <p>x' = (-${b} + √${delta}) / (2 × ${a}) = ${x1.toFixed(2)}</p>
      <p>x" = (-${b} - √${delta}) / (2 × ${a}) = ${x2.toFixed(2)}</p>
      <p><strong>Raízes da equação:</strong> x' = ${x1.toFixed(2)} e x" = ${x2.toFixed(2)}</p>
    `;
  });
});