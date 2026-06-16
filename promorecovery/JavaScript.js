document.addEventListener("DOMContentLoaded", () => {
    // 1. Atualizar Ano no Rodapé dinamicamente
    document.getElementById('year').textContent = new Date().getFullYear();

    // 2. Lógica de Animação Reveal on Scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Opcional: Descomente a linha abaixo se quiser que a animação ocorra apenas uma vez
                // observer.unobserve(entry.target); 
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 3. Lógica do Accordion (FAQ)
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            const isExpanded = header.getAttribute('aria-expanded') === 'true';

            // Fechar todos os outros accordions (opcional, remova se quiser permitir múltiplos abertos)
            document.querySelectorAll('.accordion-body').forEach(item => {
                if(item !== body) {
                    item.style.maxHeight = null;
                    item.previousElementSibling.setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle o estado do item clicado
            if (isExpanded) {
                header.setAttribute('aria-expanded', 'false');
                body.style.maxHeight = null;
            } else {
                header.setAttribute('aria-expanded', 'true');
                body.style.maxHeight = body.scrollHeight + "px";
            }
        });
    });
});