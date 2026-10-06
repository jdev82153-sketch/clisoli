/* =========================
   CLISOLI — JAVASCRIPT
========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MENU MOBILE
  ========================= */

  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("active");

      if (menu.classList.contains("active")) {
        menuBtn.textContent = "✕";
      } else {
        menuBtn.textContent = "☰";
      }
    });

    const menuLinks = menu.querySelectorAll("a");

    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuBtn.textContent = "☰";
      });
    });
  }


  /* =========================
     ANO AUTOMÁTICO
  ========================= */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* =========================
     ANIMAÇÕES AO ROLAR
  ========================= */

  const elements = document.querySelectorAll(
    ".section-heading, .card, .combo-card, .gallery-item, .contact-item, .section-image, .section-text"
  );

  elements.forEach(element => {
    element.classList.add("reveal");
  });


  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.12
    }
  );


  elements.forEach(element => {
    observer.observe(element);
  });


  /* =========================
     FECHAR MENU AO REDIMENSIONAR
  ========================= */

  window.addEventListener("resize", () => {

    if (window.innerWidth > 700) {

      menu?.classList.remove("active");

      if (menuBtn) {
        menuBtn.textContent = "☰";
      }

    }

  });

});
