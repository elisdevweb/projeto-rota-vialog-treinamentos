// VALIDAÇÃO DO FORMULÁRIO
document.getElementById('form-contato').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;

  document.getElementById('msg-sucesso').classList.add('d-none');

  if (!form.checkValidity()) {
    e.stopPropagation();
  } else {
    form.reset();
    document.getElementById('msg-sucesso').classList.remove('d-none');
  }

  form.classList.add('was-validated');
});

// MENU ATIVO CONFORME A SEÇÃO VISÍVEL
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const navLink = document.querySelector(`.navbar-nav .nav-link[href="#${id}"]`);

        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          if (navLink) navLink.classList.add("active");
        }
      });
    },
    {
      root: null,
      threshold: 0.3,
    }
  );

  sections.forEach((section) => observer.observe(section));
});

