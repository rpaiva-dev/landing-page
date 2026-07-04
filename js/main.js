document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Modal (article "read more")
document.querySelectorAll("[data-modal-target]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const modal = document.getElementById(trigger.getAttribute("data-modal-target"));
    if (modal) {
      modal.hidden = false;
      document.body.style.overflow = "hidden";
    }
  });
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.querySelectorAll("[data-modal-close]").forEach((closer) => {
    closer.addEventListener("click", () => {
      modal.hidden = true;
      document.body.style.overflow = "";
    });
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal:not([hidden])").forEach((modal) => {
      modal.hidden = true;
      document.body.style.overflow = "";
    });
  }
});
