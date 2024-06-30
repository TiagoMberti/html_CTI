document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links da navegação
    const links = document.querySelectorAll('nav ul li a');

    // Adiciona um evento de clique para cada link
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link

            // Obtém o ID da seção alvo a partir do href do link
            const targetId = this.getAttribute('href').substring(1);

            // Encontra a seção correspondente com base no ID
            const targetSection = document.getElementById(targetId);

            // Verifica se a seção existe
            if (targetSection) {
                // Calcula a posição da seção em relação ao topo da página
                const offsetTop = targetSection.offsetTop;

                // Executa a rolagem suave até a posição da seção
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
