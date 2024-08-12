document.addEventListener('DOMContentLoaded', function() {
  const steps = document.querySelectorAll('.step');

  steps.forEach(step => {
    const toggleButton = step.querySelector('.toggle-button');
    const linea = step.querySelector('.Linea');

    toggleButton.addEventListener('click', function() {
      // Alterna la clase 'active' en el elemento 'step'
      step.classList.toggle('active');
      
      // Alterna la visibilidad de la línea
      if (linea) {
        linea.classList.toggle('linea-oculta');
      }

      // Cambia el ícono entre + y - según la clase aplicada
      if (toggleButton.classList.contains('positivo')) {
        toggleButton.src = './img/Plus-icon-negativo.png';
        toggleButton.classList.remove('positivo');
        toggleButton.classList.add('negativo');
      } else {
        toggleButton.src = './img/Plus-icon.png';
        toggleButton.classList.remove('negativo');
        toggleButton.classList.add('positivo');
      }
    });
  });
});
