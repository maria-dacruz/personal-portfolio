// 1. Rolagem suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 2. Lógica do "Scroll Spy" (Destacar link ativo no menu)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        // Distância da seção até o topo da página
        const sectionTop = section.offsetTop;
        // Altura da seção
        const sectionHeight = section.clientHeight;
        
        // Verifica se a rolagem passou do topo da seção 
        // (- 150px serve como uma margem de compensação por causa da altura do cabeçalho fixo)
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    // Remove a classe 'active' de todos os links e adiciona apenas no link da seção atual
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

console.log("Portfólio carregado com sucesso!");