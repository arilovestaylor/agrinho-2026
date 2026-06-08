document.addEventListener("DOMContentLoaded", () => {
    configurarMenu();
    configurarFormulario();
    configurarQuiz();
    configurarAnimacoes();
});

// Navegação suave
function configurarMenu() {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            const destino = document.querySelector(
                link.getAttribute('href')
            );

            if (destino) {
                destino.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Formulário
function configurarFormulario() {
    const formulario = document.querySelector("form");

    if (!formulario) return;

    formulario.addEventListener("submit", event => {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome || !email || !mensagem) {
            alert("Preencha todos os campos.");
            return;
        }

        if (!email.includes("@")) {
            alert("Digite um e-mail válido.");
            return;
        }

        alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);

        formulario.reset();
    });
}

// Quiz ambiental
function configurarQuiz() {
    const botaoQuiz = document.querySelector("#solucoes button");

    if (!botaoQuiz) return;

    botaoQuiz.addEventListener("click", iniciarQuiz);
}

function iniciarQuiz() {
    let pontos = 0;

    const resposta1 = prompt(
        "A rotação de culturas ajuda a preservar o solo? (sim/não)"
    );

    if (resposta1?.toLowerCase() === "sim") {
        pontos++;
    }

    const resposta2 = prompt(
        "O uso eficiente da água é importante para a sustentabilidade? (sim/não)"
    );

    if (resposta2?.toLowerCase() === "sim") {
        pontos++;
    }

    const resposta3 = prompt(
        "O desmatamento excessivo beneficia a biodiversidade? (sim/não)"
    );

    if (resposta3?.toLowerCase() === "não" || resposta3?.toLowerCase() === "nao") {
        pontos++;
    }

    alert(`Você acertou ${pontos} de 3 perguntas.`);
}

// Animação ao aparecer na tela
function configurarAnimacoes() {
    const secoes = document.querySelectorAll("section");

    const observador = new IntersectionObserver(
        entradas => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visivel");
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    secoes.forEach(secao => {
        observador.observe(secao);
    });
}
