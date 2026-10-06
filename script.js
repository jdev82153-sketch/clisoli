document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MENU MOBILE
  ========================= */

  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

      menu.classList.toggle("active");

      menuBtn.textContent =
        menu.classList.contains("active")
          ? "✕"
          : "☰";

    });

    menu.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        menu.classList.remove("active");

        menuBtn.textContent = "☰";

      });

    });

  }


  /* =========================
     MODO CLARO / ESCURO
  ========================= */

  const themeBtn = document.getElementById("themeBtn");

  const savedTheme =
    localStorage.getItem("clisoli-theme");

  if (savedTheme === "dark") {

    document.documentElement.classList.add("dark");

    if (themeBtn) {
      themeBtn.textContent = "☀️";
    }

  }


  if (themeBtn) {

    themeBtn.addEventListener("click", () => {

      document.documentElement.classList.toggle("dark");

      const dark =
        document.documentElement.classList.contains("dark");

      localStorage.setItem(
        "clisoli-theme",
        dark ? "dark" : "light"
      );

      themeBtn.textContent =
        dark ? "☀️" : "🌙";

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
     ANIMAÇÕES
  ========================= */

  const elements = document.querySelectorAll(
    ".section-heading, .card, .combo-card, .gallery-item, .contact-item, .catalog, .section-text"
  );

  elements.forEach(element => {
    element.classList.add("reveal");
  });


  const observer =
    new IntersectionObserver(
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
     REDIMENSIONAMENTO
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
