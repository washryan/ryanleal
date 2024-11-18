$(document).ready(function() {
  // Configuração do Particles.js
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
          modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
      },
      retina_detect: true
  });

  // Animações GSAP
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-title", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      delay: 0.5
  });

  gsap.from(".hero-description", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      delay: 0.8
  });

  gsap.from(".about-content", {
      scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%"
      },
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out"
  });

  gsap.from(".timeline-item", {
      scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%"
      },
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out"
  });

  gsap.from(".skill-item", {
      scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%"
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out"
  });

  // Configuração do carrossel de projetos
  const projects = [
    {
      title: "Natour",
      description: "Uma plataforma que ajuda você a descobrir as localizações mais intrigantes para suas férias. Reserve hotéis e spas com preços mais acessíveis.",
      image: "/placeholder.svg?height=400&width=800",
      tech: ["HTML", "CSS", "JavaScript"],
      color: "#4CAF50",
    },
    {
      title: "TechBlog",
      description: "Um blog de tecnologia com artigos sobre as últimas tendências em desenvolvimento web e mobile.",
      image: "/placeholder.svg?height=400&width=800",
      tech: ["React", "Node.js", "MongoDB"],
      color: "#2196F3",
    },
    {
      title: "FitTrack",
      description: "Aplicativo de acompanhamento de fitness que permite aos usuários registrar exercícios e monitorar sua dieta.",
      image: "/placeholder.svg?height=400&width=800",
      tech: ["Flutter", "Firebase", "Google Fit API"],
      color: "#FF5722",
    },
  ];
  
  let currentIndex = 0;
  
  function updateProject() {
    const project = projects[currentIndex];
    document.getElementById("project-image").src = project.image;
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-title").style.color = project.color;
    document.getElementById("project-description").textContent = project.description;
  
    const techContainer = document.getElementById("project-tech");
    techContainer.innerHTML = ""; // Limpa tecnologias antigas
    project.tech.forEach((tech) => {
      const tag = document.createElement("span");
      tag.className = "tech-tag";
      tag.style.backgroundColor = `${project.color}20`;
      tag.style.color = project.color;
      tag.textContent = tech;
      techContainer.appendChild(tag);
    });
  
    const link = document.getElementById("project-link");
    link.style.backgroundColor = project.color;
  }
  
  function nextProject() {
    currentIndex = (currentIndex + 1) % projects.length;
    updateProject();
  }
  
  function prevProject() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateProject();
  }
  
  // Inicializa o primeiro projeto
  document.addEventListener("DOMContentLoaded", updateProject);
  

  // Menu toggle
  $('.menu-toggle').click(function() {
      $('.menu-overlay').addClass('active');
  });

  $('.menu-close').click(function() {
      $('.menu-overlay').removeClass('active');
  });

  // Scroll to top
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('.scroll-top').addClass('visible');
      } else {
          $('.scroll-top').removeClass('visible');
      }
  });

  $('.scroll-top').click(function() {
      $('html, body').animate({scrollTop : 0}, 800);
      return false;
  });

  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  });

  // Form submission (you'll need to implement the actual form submission logic)
  $('#contact-form').submit(function(e) {
      e.preventDefault();
      // Add your form submission logic here
      alert('Formulário enviado! (Esta é apenas uma simulação)');
  });

  // Intro animation
  gsap.to('.intro-text', {duration: 1, opacity: 1, y: -20, ease: "power3.out"});
  gsap.to('.intro-animation', {duration: 1, y: '-100%', delay: 2, ease: "power3.inOut"});
});