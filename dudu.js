
window.onload = function() {
    var generateChartBtn = document.getElementById('generate-chart-btn');
    var loader = document.getElementById('loader');
  
    generateChartBtn.onclick = function() {
      // Ocultar o botão
      generateChartBtn.style.display = 'none';
      // Exibir o loader
      loader.style.display = 'block';
  
      // Solicitar a geração do gráfico
      fetch('/generate-chart')  // Rota para gerar o gráfico no lado do servidor
        .then(function(response) {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error('Erro ao gerar o gráfico');
          }
        })
        .then(function() {
          // Definir a imagem do gráfico gerado
          var stockChart = document.getElementById('stock-chart');
          stockChart.src = 'stock_graph.png';
  
          // Exibir o gráfico e ocultar o loader
          document.getElementById('chart-container').style.display = 'block';
          loader.style.display = 'none';
        })
        .catch(function(error) {
          console.error(error);
          alert('Ocorreu um erro ao gerar o gráfico');
          // Ocultar o loader
          loader.style.display = 'none';
          // Exibir o botão novamente
          generateChartBtn.style.display = 'block';
        });
    };
  };
  

  function toggleScrollableSection() {
    var scrollableSection = document.querySelector('.scrollable-section');
    if (scrollableSection.style.display === "none") {
      scrollableSection.style.display = "block";
    } else {
      scrollableSection.style.display = "none";
    }
  }