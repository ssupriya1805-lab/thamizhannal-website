const loader = document.createElement("div");

loader.className = "archive-loader";

loader.innerHTML = `
  <div class="loader-copper-plate">
    <div class="loader-seal">த</div>
    <p>தமிழண்ணல்</p>
    <span>தமிழ் மரபுக் காப்பகம் திறக்கப்படுகிறது</span>
    <div class="loader-line"></div>
  </div>
`;

document.body.prepend(loader);

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("loader-hide");
  }, 900);
});

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
  });
}

const filterButtons = document.querySelectorAll(".filter-button");
const bookCards = document.querySelectorAll(".full-book-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.remove("active-filter");
    });

    button.classList.add("active-filter");

    bookCards.forEach((card) => {
      const bookCategory = card.dataset.category;

      if (
        selectedCategory === "all" ||
        selectedCategory === bookCategory
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formMessage.textContent =
      "உங்கள் செய்தி வெற்றிகரமாகப் பெறப்பட்டது. நன்றி!";

    contactForm.reset();
  });
}
const vintageElements = document.querySelectorAll(
  `
  .intro-section,
  .books-section,
  .copper-hero-container,
  .about-page-section,
  .books-page-section,
  .articles-page-section,
  .contact-page-section,
  .gallery-page-section,
  .awards-page-section,
  .contact-note-section,
  .section-heading
  `
);

const vintageCards = document.querySelectorAll(
  `
  .book-card,
  .full-book-card,
  .article-list-card,
  .author-card,
  .sidebar-box,
  .contact-information,
  .contact-form-box,
  .gallery-card,
  .award-card
  `
);

vintageElements.forEach((element) => {
  element.classList.add("vintage-reveal");
});

vintageCards.forEach((card, index) => {
  card.classList.add("vintage-card");
  card.style.transitionDelay = `${(index % 3) * 0.12}s`;
});

const vintageObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-vintage");
        vintageObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

document
  .querySelectorAll(".vintage-reveal, .vintage-card")
  .forEach((element) => {
    vintageObserver.observe(element);
  });
  const aboutRevealItems = document.querySelectorAll(
  `
  .page-banner,
  .biography-grid,
  .timeline-section .section-heading,
  .contribution-section .section-heading,
  .contribution-card
  `
);

const aboutTimelineItems = document.querySelectorAll(".timeline-item");

aboutRevealItems.forEach((item, index) => {
  item.classList.add("about-vintage-reveal");
  item.style.transitionDelay = `${(index % 3) * 0.1}s`;
});

aboutTimelineItems.forEach((item, index) => {
  item.classList.add("about-timeline-item");
  item.style.transitionDelay = `${index * 0.12}s`;
});

const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-about-vintage");
        aboutObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

document
  .querySelectorAll(".about-vintage-reveal, .about-timeline-item")
  .forEach((item) => {
    aboutObserver.observe(item);
  });
  const articleSearch = document.getElementById("articleSearch");
const articleCards = document.querySelectorAll(".article-list-card");

if (articleSearch) {
  articleSearch.addEventListener("input", () => {
    const searchText = articleSearch.value.toLowerCase().trim();

    articleCards.forEach((card) => {
      const articleText = card.textContent.toLowerCase();

      if (articleText.includes(searchText)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
}
const memoryCards = document.querySelectorAll(".memory-card");

if (memoryCards.length > 0) {
  const memoryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-memory");
          memoryObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  memoryCards.forEach((card, index) => {
    card.classList.add("vintage-memory-reveal");
    card.style.transitionDelay = `${(index % 3) * 0.15}s`;
    memoryObserver.observe(card);
  });
}