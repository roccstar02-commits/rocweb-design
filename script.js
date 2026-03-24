const formService = {
  // Replace this with your real Formspree endpoint before deployment.
  // Example: https://formspree.io/f/abcxyzde
  endpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

const services = [
  {
    icon: "WD",
    title: "Website Design",
    description:
      "A custom website built from the ground up to make your business look polished, professional, and easy to trust.",
    highlights: ["Professional layout", "Lead-focused copy", "Built for mobile"],
  },
  {
    icon: "RD",
    title: "Website Redesign",
    description:
      "Update an outdated site with cleaner visuals, stronger messaging, and a better customer experience.",
    highlights: ["Modern refresh", "Improved trust", "Better conversions"],
  },
  {
    icon: "LP",
    title: "Landing Pages",
    description:
      "Focused pages built around one service, one offer, or one local campaign to drive more action.",
    highlights: ["Campaign ready", "Simple messaging", "Clear CTA flow"],
  },
  {
    icon: "MO",
    title: "Mobile Optimization",
    description:
      "Make sure your website feels fast, clean, and easy to use on phones, tablets, and desktops.",
    highlights: ["Responsive layouts", "Faster browsing", "Stronger first impression"],
  },
  {
    icon: "SEO",
    title: "Basic SEO Setup",
    description:
      "Set up key search-friendly details so your business is easier to understand and find online.",
    highlights: ["Titles and metadata", "Page structure", "Local relevance"],
  },
  {
    icon: "WM",
    title: "Website Maintenance",
    description:
      "Ongoing updates and support so your site stays current, clean, and ready for new customers.",
    highlights: ["Edits and updates", "Ongoing support", "Peace of mind"],
  },
  {
    icon: "LC",
    title: "Lead Capture",
    description:
      "Professional contact and consultation forms that help turn website visitors into real inquiries.",
    highlights: ["Quote forms", "Consultation requests", "Clear next steps"],
  },
];

const industries = [
  { icon: "RS", title: "Restaurants", description: "Menus, bookings, events, and a stronger first impression." },
  { icon: "BB", title: "Barbershops", description: "Sharp branding, pricing, and easy consultation requests." },
  { icon: "SL", title: "Salons", description: "Service highlights, polished visuals, and booking-friendly flow." },
  { icon: "CT", title: "Contractors", description: "Estimate requests, project trust, and service clarity." },
  { icon: "AD", title: "Auto Detailers", description: "Package pages, credibility, and stronger call volume." },
  { icon: "GY", title: "Gyms", description: "Membership info, class details, and stronger brand presentation." },
  { icon: "RE", title: "Real Estate", description: "Professional credibility and clean lead capture." },
  { icon: "RT", title: "Retail Shops", description: "A polished storefront presence for local customers." },
  { icon: "CL", title: "Cleaning Companies", description: "Service breakdowns and easy quote requests." },
  { icon: "PS", title: "Professional Services", description: "Simple, modern sites that help clients trust you faster." },
];

const benefits = [
  {
    title: "Affordable for small businesses",
    description:
      "RocWeb Design is priced for owners who want quality work without being pushed into a bloated agency package.",
  },
  {
    title: "Modern and mobile-friendly",
    description:
      "Every page is designed to look clean, current, and easy to use on the screens your customers are actually using.",
  },
  {
    title: "Fast turnaround",
    description:
      "Most projects move quickly, with a straightforward review process that respects your time and keeps momentum high.",
  },
  {
    title: "Simple process",
    description:
      "You will always know what happens next, what content is needed, and what the site is being built to accomplish.",
  },
  {
    title: "Personalized service",
    description:
      "The messaging, layout, and recommendations are shaped around your business instead of using generic one-size-fits-all pages.",
  },
  {
    title: "Built to generate leads",
    description:
      "Clear calls to action, better structure, and consultation-focused forms help turn traffic into actual business opportunities.",
  },
];

const portfolioItems = [
  {
    type: "Barbershop Website",
    name: "Prime Cut Barbershop",
    preview: "Premium Grooming",
    summary:
      "A polished neighborhood barbershop concept designed to increase appointment requests and strengthen first impressions.",
    problem:
      "The old site felt outdated, had no clear service breakdown, and gave new visitors very little reason to book.",
    solution:
      "A modern redesign with service sections, stronger trust messaging, cleaner pricing, and a direct consultation path.",
    results: [
      "Sharper brand presentation for first-time visitors",
      "Clearer booking path from homepage to contact",
      "Stronger credibility for a competitive local market",
    ],
    details: [
      { label: "Industry", value: "Barbershop" },
      { label: "Primary Goal", value: "Book more appointments" },
      { label: "Focus", value: "Trust, services, and contact flow" },
    ],
  },
  {
    type: "Auto Detailer Website",
    name: "Garden State Auto Spa",
    preview: "Showroom Shine",
    summary:
      "A bold service-business website concept focused on package clarity, strong visuals, and more quote requests.",
    problem:
      "The business needed a cleaner way to explain packages, justify pricing, and make it easy for people to request a quote.",
    solution:
      "A high-contrast layout with package cards, before-and-after positioning, stronger CTA placement, and mobile-first design.",
    results: [
      "More professional presentation for premium detailing services",
      "Clearer package selection and quote interest",
      "Improved mobile experience for on-the-go visitors",
    ],
    details: [
      { label: "Industry", value: "Auto detailing" },
      { label: "Primary Goal", value: "Generate more quote requests" },
      { label: "Focus", value: "Packages, trust, and local credibility" },
    ],
  },
  {
    type: "Cafe Website",
    name: "Bella Vita Cafe",
    preview: "Modern Dining",
    summary:
      "A warm, modern cafe concept designed to improve local brand perception and support catering or reservation inquiries.",
    problem:
      "The business needed a website that looked current, felt inviting, and gave customers quick access to the right information.",
    solution:
      "A refined layout with menu highlights, event-friendly sections, and better prompts for catering and contact inquiries.",
    results: [
      "A more memorable brand presence online",
      "Cleaner path to inquiries for events and catering",
      "Better mobile browsing for local customers",
    ],
    details: [
      { label: "Industry", value: "Cafe / restaurant" },
      { label: "Primary Goal", value: "Improve local trust and inquiries" },
      { label: "Focus", value: "Brand feel, menus, and contact" },
    ],
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$799",
    subtitle: "Simple one-page site",
    description:
      "A focused starting option for businesses that need a clean, credible online presence fast.",
    features: [
      "One-page custom website",
      "Mobile-friendly design",
      "Professional contact section",
      "Basic SEO setup",
      "Launch support",
    ],
    cta: "Request Starter",
  },
  {
    name: "Growth",
    price: "$1,800",
    subtitle: "Multi-page business site",
    description:
      "A stronger business website with room to explain services, build trust, and capture better-quality leads.",
    features: [
      "Up to 5 custom pages",
      "Service-focused page structure",
      "Lead-ready consultation form",
      "Mobile optimization",
      "Basic SEO setup",
    ],
    cta: "Request Growth",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Premium",
    price: "$3,200",
    subtitle: "Custom site with support",
    description:
      "A more tailored solution for businesses that want a stronger brand presence and ongoing help after launch.",
    features: [
      "Custom multi-page website",
      "More tailored design direction",
      "Priority revisions",
      "Lead-generation guidance",
      "Ongoing support included",
    ],
    cta: "Request Premium",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, your goals, and the kind of customers you want your website to reach.",
  },
  {
    step: "02",
    title: "Planning and Design",
    description: "We shape the messaging, structure, and visual direction so the site feels clear and professional.",
  },
  {
    step: "03",
    title: "Build",
    description: "The website is developed to be responsive, polished, easy to navigate, and ready for launch.",
  },
  {
    step: "04",
    title: "Launch",
    description: "After the final review, the site goes live with the contact flow, calls to action, and content in place.",
  },
];

const testimonials = [
  {
    quote:
      "Our old website looked dated and did not explain our services well. The new direction made us look more established almost immediately.",
    name: "Anthony R.",
    business: "Owner, Prime Cut Barbershop",
  },
  {
    quote:
      "The whole process felt simple, and the site finally matches the quality of our business. It feels like something we can confidently send people to.",
    name: "Melissa D.",
    business: "Manager, Bella Vita Cafe",
  },
  {
    quote:
      "We needed a better mobile experience and a cleaner quote request flow. The new concept solves both without making things complicated.",
    name: "Carlos M.",
    business: "Owner, Garden State Auto Spa",
  },
];

const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "Most small business websites can launch in about 1 to 3 weeks depending on scope, feedback speed, and how much custom content is needed.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "That depends on the size of the site and what features you need. The pricing section gives a starting point, and custom quotes are available if your project needs more.",
  },
  {
    question: "Can you redesign my current website?",
    answer:
      "Yes. Redesigns are a great fit if your site feels outdated, cluttered, hard to use on mobile, or no longer reflects the quality of your business.",
  },
  {
    question: "Will my site work on mobile?",
    answer:
      "Yes. Every RocWeb Design site is built with mobile responsiveness in mind so it looks professional across phones, tablets, and desktops.",
  },
  {
    question: "Do you offer maintenance after launch?",
    answer:
      "Yes. Ongoing support and update options are available if you want help keeping the site current after it goes live.",
  },
  {
    question: "Can I update the site later?",
    answer:
      "Yes. The structure is kept simple so future edits, additions, and refreshes are easier to manage without rebuilding the whole site.",
  },
];

const logoStrip = [
  "Contractors",
  "Restaurants",
  "Barbershops",
  "Gyms",
  "Auto Shops",
  "Salons",
  "Photographers",
  "Cleaning Companies",
];

const renderList = (containerId, items, template) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(template).join("");
};

renderList("logo-strip-list", logoStrip, (item) => `<span class="logo-pill">${item}</span>`);

renderList(
  "services-grid",
  services,
  (service) => `
    <article class="service-card reveal">
      <div class="card-icon" aria-hidden="true">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <div class="service-highlights">
        ${service.highlights.map((highlight) => `<span>${highlight}</span>`).join("")}
      </div>
    </article>
  `
);

renderList(
  "industries-grid",
  industries,
  (industry) => `
    <article class="industry-card reveal">
      <div class="industry-icon" aria-hidden="true">${industry.icon}</div>
      <h3>${industry.title}</h3>
      <p>${industry.description}</p>
    </article>
  `
);

renderList(
  "benefits-grid",
  benefits,
  (benefit) => `
    <article class="benefit-item reveal">
      <div class="benefit-bullet" aria-hidden="true"></div>
      <div>
        <strong>${benefit.title}</strong>
        <p>${benefit.description}</p>
      </div>
    </article>
  `
);

renderList(
  "portfolio-grid",
  portfolioItems,
  (item, index) => `
    <article class="portfolio-card reveal">
      <div class="portfolio-visual" aria-hidden="true">
        <div class="portfolio-browser">
          <span></span><span></span><span></span>
        </div>
        <div class="portfolio-preview">
          <span>${item.type}</span>
          <strong>${item.preview}</strong>
          <p>${item.name}</p>
        </div>
      </div>
      <div class="portfolio-body">
        <span class="portfolio-meta">${item.type}</span>
        <h3>${item.name}</h3>
        <p>${item.summary}</p>
        <button class="button button-secondary" type="button" data-open-portfolio="${index}">
          View Project Details
        </button>
      </div>
    </article>
  `
);

renderList(
  "pricing-grid",
  pricing,
  (plan) => `
    <article class="pricing-card reveal ${plan.featured ? "featured" : ""}">
      ${plan.badge ? `<span class="pricing-badge">${plan.badge}</span>` : ""}
      <h3>${plan.name}</h3>
      <div class="price">${plan.price} <span>${plan.subtitle}</span></div>
      <p>${plan.description}</p>
      <div class="pricing-features">
        ${plan.features.map((feature) => `<span>${feature}</span>`).join("")}
      </div>
      <a class="button ${plan.featured ? "button-primary" : "button-secondary"}" href="#contact" data-scroll>${plan.cta}</a>
    </article>
  `
);

renderList(
  "process-grid",
  processSteps,
  (step) => `
    <article class="process-card reveal">
      <div class="process-step">${step.step}</div>
      <h3>${step.title}</h3>
      <p>${step.description}</p>
    </article>
  `
);

renderList(
  "testimonials-grid",
  testimonials,
  (item) => `
    <article class="testimonial-card reveal">
      <p class="testimonial-quote">&ldquo;${item.quote}&rdquo;</p>
      <div class="testimonial-meta">
        <strong>${item.name}</strong>
        <span>${item.business}</span>
      </div>
    </article>
  `
);

renderList(
  "faq-list",
  faqs,
  (faq, index) => `
    <article class="faq-item reveal">
      <button class="faq-trigger" type="button" aria-expanded="false" aria-controls="faq-panel-${index}">
        <span>${faq.question}</span>
        <span class="faq-icon" aria-hidden="true"></span>
      </button>
      <div class="faq-panel" id="faq-panel-${index}">
        <div class="faq-panel-inner">
          <p>${faq.answer}</p>
        </div>
      </div>
    </article>
  `
);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll("[data-scroll]");
const navSectionLinks = document.querySelectorAll("[data-nav-link]");
const sections = document.querySelectorAll("[data-section]");
const backToTopButton = document.querySelector(".back-to-top");
const toast = document.getElementById("toast");
const modal = document.getElementById("portfolio-modal");
const modalContent = document.getElementById("portfolio-modal-content");
const modalCloseTriggers = document.querySelectorAll("[data-close-modal]");
const portfolioButtons = document.querySelectorAll("[data-open-portfolio]");
const faqTriggers = document.querySelectorAll(".faq-trigger");
const revealElements = document.querySelectorAll(".reveal");
const counterElements = document.querySelectorAll("[data-count]");
const quoteForm = document.getElementById("quote-form");
const submitButton = quoteForm?.querySelector(".submit-button");
const formStatus = document.getElementById("form-status");
const copyEmailButton = document.querySelector("[data-copy-email]");

let activeModalTrigger = null;
let toastTimer = null;
let isSubmitting = false;

const showToast = (message) => {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("is-visible");

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
};

const closeMobileMenu = () => {
  if (!menuToggle || !navPanel) return;
  menuToggle.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  navPanel.classList.remove("is-open");
};

if (menuToggle && navPanel) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navPanel.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    closeMobileMenu();
    target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const activeEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!activeEntry) return;

    const id = activeEntry.target.getAttribute("id");
    navSectionLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  },
  {
    rootMargin: "-35% 0px -45% 0px",
    threshold: [0.2, 0.45, 0.7],
  }
);

sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -30px 0px",
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

const animateCounter = (element) => {
  const target = Number(element.dataset.count || 0);
  if (!target) return;

  const duration = 1200;
  const start = performance.now();

  const tick = (timestamp) => {
    const progress = Math.min((timestamp - start) / duration, 1);
    element.textContent = String(Math.floor(progress * target));

    if (progress < 1) {
      window.requestAnimationFrame(tick);
    } else {
      element.textContent = String(target);
    }
  };

  window.requestAnimationFrame(tick);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.6 }
);

counterElements.forEach((counter) => counterObserver.observe(counter));

faqTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".faq-item");
    const panel = item?.querySelector(".faq-panel");
    if (!item || !panel) return;

    const isOpen = item.classList.contains("is-open");

    document.querySelectorAll(".faq-item.is-open").forEach((openItem) => {
      if (openItem === item) return;
      openItem.classList.remove("is-open");
      const openTrigger = openItem.querySelector(".faq-trigger");
      const openPanel = openItem.querySelector(".faq-panel");
      openTrigger?.setAttribute("aria-expanded", "false");
      if (openPanel) openPanel.style.maxHeight = "0px";
    });

    item.classList.toggle("is-open", !isOpen);
    trigger.setAttribute("aria-expanded", String(!isOpen));
    panel.style.maxHeight = !isOpen ? `${panel.scrollHeight}px` : "0px";
  });
});

const renderPortfolioModal = (projectIndex) => {
  const project = portfolioItems[projectIndex];
  if (!project || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-hero">
      <span class="modal-tag">${project.type}</span>
      <h3 id="portfolio-modal-title">${project.name}</h3>
      <p>${project.summary}</p>
    </div>
    <div class="modal-copy">
      <div>
        <h4>The problem</h4>
        <p>${project.problem}</p>
      </div>
      <div>
        <h4>The solution</h4>
        <p>${project.solution}</p>
      </div>
      <div>
        <h4>Results-style summary</h4>
        <div class="modal-results">
          ${project.results.map((result) => `<span>${result}</span>`).join("")}
        </div>
      </div>
      <div class="modal-details">
        ${project.details
          .map(
            (detail) => `
              <article class="portfolio-detail-stat">
                <strong>${detail.label}</strong>
                <span>${detail.value}</span>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="modal-actions">
        <a class="button button-primary" href="#contact" data-scroll>Request a Similar Project</a>
        <button class="button button-ghost" type="button" data-close-modal>Close Preview</button>
      </div>
    </div>
  `;
};

const openModal = (projectIndex, trigger) => {
  if (!modal) return;
  activeModalTrigger = trigger || null;
  renderPortfolioModal(projectIndex);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close")?.focus();
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeModalTrigger?.focus();
};

portfolioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.openPortfolio);
    openModal(index, button);
  });
});

modalCloseTriggers.forEach((trigger) => {
  trigger.addEventListener("click", closeModal);
});

modal?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (target.matches("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal?.classList.contains("is-open")) {
    closeModal();
  }
});

window.addEventListener("scroll", () => {
  const shouldShow = window.scrollY > 700;
  backToTopButton?.classList.toggle("is-visible", shouldShow);
});

backToTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
});

copyEmailButton?.addEventListener("click", async () => {
  const email = copyEmailButton.dataset.copyEmail;
  if (!email) return;

  try {
    await navigator.clipboard.writeText(email);
    showToast("Email copied to clipboard.");
  } catch (error) {
    showToast("Unable to copy email. You can still use the email link.");
  }
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validators = {
  name: (value) => (value.trim().length >= 2 ? "" : "Please enter your name."),
  email: (value) => (emailPattern.test(value.trim()) ? "" : "Please enter a valid email address."),
  business_name: (value) => (value.trim().length >= 2 ? "" : "Please enter your business name."),
  project_type: (value) => (value ? "" : "Please choose a project type."),
  budget_range: (value) => (value ? "" : "Please choose a budget range."),
  message: (value) => (value.trim().length >= 18 ? "" : "Please add a few details about your project."),
};

const setFieldError = (fieldName, message) => {
  const field = quoteForm?.elements.namedItem(fieldName);
  const errorElement = quoteForm?.querySelector(`[data-error-for="${fieldName}"]`);
  if (!field || !(field instanceof HTMLElement) || !errorElement) return;

  errorElement.textContent = message;
  field.classList.toggle("is-invalid", Boolean(message));
  field.setAttribute("aria-invalid", message ? "true" : "false");
};

const validateForm = () => {
  if (!quoteForm) return false;

  let isValid = true;

  Object.keys(validators).forEach((fieldName) => {
    const field = quoteForm.elements.namedItem(fieldName);
    const value = field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement
      ? field.value
      : "";
    const message = validators[fieldName](value);
    setFieldError(fieldName, message);
    if (message) isValid = false;
  });

  return isValid;
};

Object.keys(validators).forEach((fieldName) => {
  const field = quoteForm?.elements.namedItem(fieldName);
  if (
    field instanceof HTMLInputElement ||
    field instanceof HTMLSelectElement ||
    field instanceof HTMLTextAreaElement
  ) {
    field.addEventListener("input", () => {
      const message = validators[fieldName](field.value);
      setFieldError(fieldName, message);
    });
  }
});

const setFormStatus = (message, type) => {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.className = `form-status is-visible ${type === "success" ? "is-success" : "is-error"}`;
};

const clearFormStatus = () => {
  if (!formStatus) return;
  formStatus.textContent = "";
  formStatus.className = "form-status";
};

const setSubmittingState = (submitting) => {
  if (!quoteForm || !submitButton) return;
  isSubmitting = submitting;
  quoteForm.classList.toggle("is-submitting", submitting);
  submitButton.disabled = submitting;
};

quoteForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (isSubmitting) return;

  clearFormStatus();

  const valid = validateForm();
  if (!valid) {
    setFormStatus("Please fix the highlighted fields and try again.", "error");
    return;
  }

  if (formService.endpoint.includes("YOUR_FORM_ID")) {
    setFormStatus(
      "Connect your Formspree endpoint in script.js before deployment so submissions know where to go.",
      "error"
    );
    return;
  }

  setSubmittingState(true);

  try {
    const formData = new FormData(quoteForm);
    const response = await fetch(formService.endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Unable to submit the form right now.");
    }

    quoteForm.reset();
    Object.keys(validators).forEach((fieldName) => setFieldError(fieldName, ""));
    setFormStatus(
      "Thanks. Your consultation request was sent successfully. RocWeb Design will follow up soon.",
      "success"
    );
    showToast("Consultation request sent.");
  } catch (error) {
    setFormStatus(
      "Something went wrong while sending your message. Please try again or email rocwebdesign@gmail.com directly.",
      "error"
    );
  } finally {
    setSubmittingState(false);
  }
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const scrollLink = target.closest("[data-scroll]");
  if (!(scrollLink instanceof HTMLAnchorElement)) return;

  const href = scrollLink.getAttribute("href");
  if (!href || !href.startsWith("#")) return;

  const destination = document.querySelector(href);
  if (!destination) return;

  event.preventDefault();
  closeMobileMenu();
  if (modal?.classList.contains("is-open")) closeModal();
  destination.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
});

