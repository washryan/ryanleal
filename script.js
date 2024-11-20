document.addEventListener('DOMContentLoaded', () => {
  // Intro Animation
  const introAnimation = document.getElementById('intro-animation');
  const introSvg = document.getElementById('intro-svg');

  gsap.to(introSvg, {
      opacity: 0,
      duration: 1,
      delay: 3,
      onComplete: () => {
          introAnimation.style.display = 'none';
      }
  });

  // Menu Toggle Logic
  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.querySelector('.menu-overlay');
  const menuItems = document.querySelectorAll('.menu-item');
  const menuSocialColumns = document.querySelectorAll('.menu-social-column');

  // Adicionar índices para as animações escalonadas
  menuItems.forEach((item, index) => {
    item.style.setProperty('--item-index', index);
  });

  menuSocialColumns.forEach((column, index) => {
    column.style.setProperty('--column-index', index);
  });

  // Função para alternar o menu
  function toggleMenu() {
    menuToggle.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  
    // Controlar o scroll do body
    if (menuOverlay.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Event Listeners
menuToggle.addEventListener('click', toggleMenu);

// Fechar menu ao clicar em um item
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        
        // Adicionar animação de saída
        menuOverlay.style.transition = 'all 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6)';
        menuToggle.classList.remove('active');
        menuOverlay.classList.remove('active');
        
        // Esperar a animação terminar antes de rolar até a seção
        setTimeout(() => {
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
            document.body.style.overflow = '';
        }, 500);
    });
});

// Fechar menu ao pressionar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
        toggleMenu();
    }
});

// Adicionar efeito de hover com mouse
menuToggle.addEventListener('mousemove', (e) => {
    const bounds = menuToggle.getBoundingClientRect();
    const mouseX = e.clientX - bounds.left;
    const mouseY = e.clientY - bounds.top;
    
    menuToggle.style.setProperty('--mouse-x', `${mouseX}px`);
    menuToggle.style.setProperty('--mouse-y', `${mouseY}px`);
});

// Remover efeito ao sair do botão
menuToggle.addEventListener('mouseleave', () => {
    menuToggle.style.removeProperty('--mouse-x');
    menuToggle.style.removeProperty('--mouse-y');
});

  // Particles.js
  particlesJS('particles-js', {
      particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#00ff00" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#00ff00", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
      },
      interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
          modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
      },
      retina_detect: true
  });

  // Projetos
  const projetos = [
      {
          titulo: "Galeria de imagens",
          descricao: "Em um exercício Ebac, esse é o projeto mais recente feito. Projeto de uma galeria de imagens!",
          imagem: "https://ryanleal.vercel.app/images/project-image.jpg",
          tecnologias: ["Html", "Css", "JavaScript", "jQuery"],
          link: "https://wrlp-jquery-galeria-fotos.vercel.app"
      },
      // Adicione mais projetos aqui
  ];

  // Função para criar slides do Swiper
  function createProjectSlides() {
      const swiperWrapper = document.querySelector('.swiper-wrapper');
      projetos.forEach((projeto, index) => {
          const slide = document.createElement('div');
          slide.className = 'swiper-slide';
          slide.innerHTML = `
              <div class="project-card">
                  <div class="project-background">
                      <img src="${projeto.imagem}" alt="" class="blur-background">
                  </div>
                  <div class="project-content">
                      <img src="${projeto.imagem}" alt="${projeto.titulo}" class="project-image">
                      <h3 class="project-title">${projeto.titulo}</h3>
                      <p class="project-description">${projeto.descricao}</p>
                      <div class="project-tech">
                          ${projeto.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                      </div>
                      <button class="project-link" data-project="${index}">Ver Detalhes</button>
                  </div>
              </div>
          `;
          swiperWrapper.appendChild(slide);
      });
  }

  // Criar slides
  createProjectSlides();

  // Inicializar Swiper
  const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      autoplay: {
          delay: 5000,
      },
  });

  // Modal
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalImage = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');
  const modalTech = document.getElementById('modal-tech');
  const modalLink = document.getElementById('modal-link');
  const closeModal = document.getElementsByClassName('close')[0];

  function openModal(projeto) {
      modalTitle.textContent = projeto.titulo;
      modalImage.src = projeto.imagem;
      modalImage.alt = projeto.titulo;
      modalDescription.textContent = projeto.descricao;
      modalTech.innerHTML = projeto.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
      modalLink.href = projeto.link;
      modal.style.display = 'block';
  }

  closeModal.onclick = function() {
      modal.style.display = 'none';
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }

  // Adicionar evento de clique aos botões "Ver Detalhes"
  document.addEventListener('click', function(e) {
      if(e.target && e.target.classList.contains('project-link')) {
          const projectIndex = e.target.getAttribute('data-project');
          openModal(projetos[projectIndex]);
      }
  });

  // Scroll to Top Button
  const scrollTopButton = document.querySelector('.scroll-top');

  window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
          scrollTopButton.classList.add('visible');
      } else {
          scrollTopButton.classList.remove('visible');
      }
  });

  scrollTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  // Hero Section Animation
  gsap.from('.hero-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
          trigger: '.hero',
          start: 'top center',
      }
  });

  // About Section Animation
  gsap.from('.about-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
          trigger: '.about',
          start: 'top center',
      }
  });

  // Timeline Animation
  gsap.from('.timeline-item', {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
          trigger: '.timeline',
          start: 'top center',
      }
  });

  // Skills Animation
  gsap.from('.skill-item', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
          trigger: '.skills',
          start: 'top center',
      }
  });

  // Contact Form Animation
  gsap.from('.contact-form', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
          trigger: '.contact',
          start: 'top center',
      }
  });
});