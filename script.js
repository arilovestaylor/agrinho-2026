document.addEventListener('DOMContentLoaded', () => {
    const agroCalc = document.getElementById('agroCalc');
    const resultadoDiv = document.getElementById('resultado');

    agroCalc.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obter os valores dos campos
        const area = parseFloat(document.getElementById('area').value);
        const pratica = document.getElementById('pratica').value;

        if (isNaN(area) || area <= 0) {
            alert('Por favor, informe uma área válida maior que zero.');
            return;
        }

        // Fatores de cálculo por hectare/ano baseados em referências agronômicas
        let fatorAgua = 0; // Litros adicionais retidos/ha
        let fatorEconomiaAdubos = 0; // Economia em R$/ha
        let fatorErosaoEvitada = 0; // Toneladas de solo salvas/ha

        switch (pratica) {
            case 'cobertura_simples':
                fatorAgua = 150000; 
                fatorEconomiaAdubos = 250;
                fatorErosaoEvitada = 8;
                break;
            case 'plantio_direto':
                fatorAgua = 300000; 
                fatorEconomiaAdubos = 550;
                fatorErosaoEvitada = 15;
                break;
            case 'ILPF':
                fatorAgua = 450000; 
                fatorEconomiaAdubos = 800;
                fatorErosaoEvitada = 22;
                break;
        }

        // Cálculos totais
        const totalAgua = area * fatorAgua;
        const totalEconomia = area * fatorEconomiaAdubos;
        const totalErosao = area * fatorErosaoEvitada;

        // Atualização da interface
        document.getElementById('aguaRetida').innerText = totalAgua.toLocaleString('pt-BR');
        document.getElementById('economiaFertilizante').innerText = totalEconomia.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        document.getElementById('erosaoEvitada').innerText = totalErosao.toLocaleString('pt-BR');

        // Exibir div de resultados
        resultadoDiv.classList.remove('hidden');
    });
});