document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidade dos Botões Interativos (Acordeão)
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const span = btn.querySelector('span');

            // Alternar estado ativo
            btn.classList.toggle('active');

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                span.textContent = '▼';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                span.textContent = '▲';
            }
        });
    });

    // Funcionalidade da Calculadora do Agro
    const agroCalc = document.getElementById('agroCalc');
    const resultadoDiv = document.getElementById('resultado');

    agroCalc.addEventListener('submit', (event) => {
        event.preventDefault();

        const area = parseFloat(document.getElementById('area').value);
        const pratica = document.getElementById('pratica').value;

        if (isNaN(area) || area <= 0) {
            alert('Por favor, informe uma área válida maior que zero.');
            return;
        }

        let fatorAgua = 0; 
        let fatorEconomiaAdubos = 0; 
        let fatorErosaoEvitada = 0; 

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

        const totalAgua = area * fatorAgua;
        const totalEconomia = area * fatorEconomiaAdubos;
        const totalErosao = area * fatorErosaoEvitada;

        document.getElementById('aguaRetida').innerText = totalAgua.toLocaleString('pt-BR');
        document.getElementById('economiaFertilizante').innerText = totalEconomia.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        document.getElementById('erosaoEvitada').innerText = totalErosao.toLocaleString('pt-BR');

        resultadoDiv.classList.remove('hidden');
    });
});