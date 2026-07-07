document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todas as abas e conteúdos
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Pega o destino pelo atributo data-target
            const target = tab.getAttribute('data-target');

            // Remove a classe 'active' de todas as abas
            tabs.forEach(t => t.classList.remove('active'));

            // Remove a classe 'active' de todos os conteúdos
            contents.forEach(c => c.classList.remove('active'));

            // Adiciona a classe 'active' apenas na aba clicada
            tab.classList.add('active');

            // Mostra o conteúdo correspondente
            document.getElementById(target).classList.add('active');
        });
    });
});
