import "./scss/main.scss";
document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. СЛАЙДЕР КОМАНДИ (ФОТО)
  // ==========================================
  const teamContainer = document.getElementById("slider-container");
  const teamBtnPrev = document.getElementById("btn-prev");
  const teamBtnNext = document.getElementById("btn-next");

  if (teamContainer && teamBtnPrev && teamBtnNext) {
    teamBtnPrev.addEventListener("click", () => {
      teamContainer.scrollBy({ left: -330, behavior: "smooth" });
    });
    teamBtnNext.addEventListener("click", () => {
      teamContainer.scrollBy({ left: 330, behavior: "smooth" });
    });
  }

  // ==========================================
  // 2. СЛАЙДЕР ВІДГУКІВ
  // ==========================================
  const reviewsContainer = document.getElementById("reviews-slider-container");
  const reviewBtnPrev = document.getElementById("review-btn-prev");
  const reviewBtnNext = document.getElementById("review-btn-next");

  if (reviewsContainer && reviewBtnPrev && reviewBtnNext) {
    reviewBtnPrev.addEventListener("click", () => {
      reviewsContainer.scrollBy({ left: -880, behavior: "smooth" });
    });
    reviewBtnNext.addEventListener("click", () => {
      reviewsContainer.scrollBy({ left: 880, behavior: "smooth" });
    });
  }

  // ==========================================
  // 3. АНІМАЦІЯ ЦЕНТРАЛЬНОГО ФОТО (Intersection Observer)
  // ==========================================
  const cards = document.querySelectorAll(".team-card");
  if (teamContainer && cards.length > 0) {
    const observerOptions = {
      root: teamContainer,
      rootMargin: "0px -30% 0px -30%",
      threshold: 0.5,
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cards.forEach((card) => card.classList.remove("card-main"));
          entry.target.classList.add("card-main");
        }
      });
    }, observerOptions);

    cards.forEach((card) => cardObserver.observe(card));
  }
});

// ==========================================
// 1. ВІКНО: Отримати консультацію (Верхня кнопка)
// ==========================================
const consultationModal = document.getElementById("consultation-modal");
const consultationBtn = document.getElementById("consultation-btn"); // Кнопка на головному екрані
const consultationClose = document.getElementById("consultation-close");

if (consultationModal && consultationBtn && consultationClose) {
  consultationBtn.addEventListener("click", (e) => {
    e.preventDefault();
    consultationModal.classList.add("active");
  });

  consultationClose.addEventListener("click", () => {
    consultationModal.classList.remove("active");
  });

  consultationModal.addEventListener("click", (e) => {
    if (e.target === consultationModal)
      consultationModal.classList.remove("active");
  });

  const form1 = consultationModal.querySelector(".request-form");
  if (form1) {
    form1.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Дякуємо! Ми зв'яжемося з вами для консультації.");
      form1.reset();
      consultationModal.classList.remove("active");
    });
  }
}

// ==========================================
// 2. ВІКНО: Залишити заявку (Нижня кнопка)
// ==========================================
const requestModal = document.getElementById("request-modal");
const requestBtn = document.getElementById("request-btn"); // Кнопка в секції "Напрямки"
const requestClose = document.getElementById("request-close");

// Перевірка 2: Чи знайшов скрипт елементи?
console.log('Кнопка "Заявка":', requestBtn);
console.log('Модалка "Заявка":', requestModal);

if (requestModal && requestBtn && requestClose) {
  requestBtn.addEventListener("click", (e) => {
    e.preventDefault();
    requestModal.classList.add("active");
  });

  requestClose.addEventListener("click", () => {
    requestModal.classList.remove("active");
  });

  requestModal.addEventListener("click", (e) => {
    if (e.target === requestModal) requestModal.classList.remove("active");
  });

  const form2 = requestModal.querySelector(".request-form");
  if (form2) {
    form2.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Дякуємо! Вашу заявку прийнято.");
      form2.reset();
      requestModal.classList.remove("active");
    });
  }
}
