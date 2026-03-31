// Paste your Formspree endpoint here.
// Example: https://formspree.io/f/abcxyzde
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqegzbrb";

const services = [
  {
    icon: "WD",
    title: "Website Design & Redesign",
    description:
      "Modern website design and redesign services for businesses that need a stronger online presence, better credibility, and a site built to support growth.",
    highlights: ["New site builds", "Modern refreshes", "Built for growth"],
  },
  {
    icon: "SEO",
    title: "SEO",
    description:
      "Search optimization designed to improve visibility, attract qualified traffic, and support long-term growth.",
    highlights: ["On-page SEO", "Search visibility", "Growth-focused content"],
  },
  {
    icon: "ADS",
    title: "Google Ads",
    description:
      "Paid advertising campaigns built to generate leads, calls, and customer opportunities efficiently.",
    highlights: ["Campaign setup", "Lead generation", "Performance-driven"],
  },
  {
    icon: "LG",
    title: "Lead Generation",
    description:
      "Funnels, contact flows, and campaigns designed to turn attention into consultations and inquiries.",
    highlights: ["Lead capture", "Sales flow", "Better follow-up"],
  },
  {
    icon: "BR",
    title: "Branding",
    description:
      "Sharper messaging and visual direction that helps your business look more established and memorable.",
    highlights: ["Brand clarity", "Positioning", "Professional look"],
  },
  {
    icon: "OMP",
    title: "Ordering & Marketplace Platform",
    description:
      "We build custom online ordering and marketplace platforms directly into business websites. This allows customers to place orders, make payments, and interact with businesses online without relying on third-party apps. These systems can support pickup ordering, service bookings, product sales, and other automated business functions.",
    highlights: ["Ordering flow", "Payments", "Automated operations"],
  },
  {
    icon: "LP",
    title: "Landing Pages",
    description:
      "Focused landing pages built around one service, one offer, or one campaign goal.",
    highlights: ["Campaign ready", "Clear CTA", "Conversion-first"],
  },
  {
    icon: "MW",
    title: "Monthly Website Maintenance",
    description:
      "Ongoing updates and support to keep your website current, polished, and working properly.",
    highlights: ["Edits and updates", "Support", "Peace of mind"],
  },
  {
    icon: "LS",
    title: "Local SEO",
    description:
      "Improve your local visibility through search optimization and Google Business profile setup.",
    highlights: ["Maps visibility", "Local ranking", "Business profile setup"],
  },
  {
    icon: "MS",
    title: "Marketing Strategy",
    description:
      "Clear strategic planning around visibility, messaging, lead flow, and growth priorities.",
    highlights: ["Growth planning", "Better direction", "Smart priorities"],
  },
  {
    icon: "AT",
    title: "Analytics & Tracking",
    description:
      "Track what is working so your marketing decisions are guided by better data and clearer performance signals.",
    highlights: ["Data visibility", "Better decisions", "Performance tracking"],
  },
  {
    icon: "EM",
    title: "Email Marketing",
    description:
      "Simple email campaigns and nurturing flows that help businesses stay connected and drive repeat action.",
    highlights: ["Campaign setup", "Follow-up flows", "Retention support"],
  },
  {
    icon: "SM",
    title: "Social Media Marketing",
    description:
      "Foundational setup and marketing support to help your brand stay consistent across social channels.",
    highlights: ["Profile setup", "Brand consistency", "Audience visibility"],
  },
  {
    icon: "AF",
    title: "Automation & Funnels",
    description:
      "Forms, follow-ups, appointment funnels, and business automations that make growth easier to manage.",
    highlights: ["Automation", "Appointment flow", "Operational efficiency"],
  },
];

const industries = [
  { icon: "MH", title: "Mental Health Clinics", description: "Professional digital systems that build trust and support patient inquiries." },
  { icon: "TH", title: "Telehealth Providers", description: "Modern online presence for remote care businesses that need credibility." },
  { icon: "MS", title: "Med Spas", description: "Clean branding and lead generation for competitive wellness markets." },
  { icon: "WL", title: "Weight Loss Clinics", description: "Landing pages and messaging built to drive consultations and conversions." },
  { icon: "TRT", title: "TRT Clinics", description: "Authority-focused websites and visibility strategies for clinic growth." },
  { icon: "PW", title: "Peptide / Wellness Clinics", description: "Professional positioning for modern wellness and optimization brands." },
  { icon: "ST", title: "Speech Therapy", description: "Clear, reassuring websites that help families and patients take the next step." },
  { icon: "AS", title: "Autism & Special Needs Programs", description: "Trust-building sites and outreach systems for important care services." },
  { icon: "PT", title: "Physical Therapy Clinics", description: "Lead-focused marketing support for clinics that want more appointments." },
  { icon: "DN", title: "Dentists", description: "Modern local marketing for practices that need visibility and credibility." },
  { icon: "LF", title: "Law Firms", description: "Clean, professional online presence built to support trust and lead flow." },
  { icon: "CT", title: "Contractors (Roofing, Plumbing, etc.)", description: "Lead generation and branding for growth-minded local service companies." },
  { icon: "SB", title: "Small Businesses", description: "Flexible support for businesses ready to improve their online presence." },
  { icon: "LSB", title: "Local Service Businesses", description: "Modern marketing support for businesses that rely on calls, quotes, and appointments." },
];

const benefits = [
  {
    title: "Modern high-converting websites",
    description:
      "Every website is built to support the bigger goal: helping your business attract attention and convert it into real opportunities.",
  },
  {
    title: "Built for lead generation",
    description:
      "We focus on clear calls to action, better structure, and marketing systems that support inquiries, calls, and appointments.",
  },
  {
    title: "Clean professional branding",
    description:
      "Sharper branding and better presentation help your business look more established and easier to trust.",
  },
  {
    title: "Growth-focused marketing strategies",
    description:
      "Ventluna Digital is built around strategy, visibility, conversion, and follow-up, not just visuals alone.",
  },
  {
    title: "Fast communication",
    description:
      "We keep projects moving with clear direction, quick communication, and practical next steps.",
  },
  {
    title: "Ongoing support available",
    description:
      "Need updates, optimizations, campaign management, or continued strategy help after launch? We can support that too.",
  },
  {
    title: "We focus on results, not just design",
    description:
      "We build systems that help businesses grow, not just pages that look polished without a real growth purpose.",
  },
];

const portfolioItems = [
  {
    type: "Website Redesign",
    name: "Clinic Growth Redesign",
    preview: "Stronger First Impressions",
    summary:
      "A healthcare-focused website redesign that clarified services, improved trust signals, and made it easier for visitors to book or inquire.",
    problem:
      "The business had an outdated website that looked unprofessional and did not guide visitors toward a clear next step.",
    solution:
      "A cleaner structure, stronger messaging, and a more modern design with better conversion paths and more confidence-building content.",
    results: [
      "Improved brand credibility and presentation",
      "Clearer service pages and inquiry flow",
      "Better foundation for future SEO and paid traffic",
    ],
    details: [
      { label: "Focus", value: "Website redesign" },
      { label: "Outcome", value: "Stronger trust and better lead flow" },
      { label: "Category", value: "Healthcare marketing" },
    ],
  },
  {
    type: "Branding Improvement",
    name: "Service Brand Refresh",
    preview: "Sharper Positioning",
    summary:
      "A branding improvement project focused on making a service business look more premium, organized, and growth-ready.",
    problem:
      "The business had inconsistent visuals and weak messaging that made it harder to stand out in a competitive market.",
    solution:
      "Refined branding, stronger page structure, and cleaner positioning to create a more polished and memorable online presence.",
    results: [
      "Cleaner, more professional presentation",
      "Better alignment between brand and target market",
      "Stronger support for website and ad performance",
    ],
    details: [
      { label: "Focus", value: "Branding and positioning" },
      { label: "Outcome", value: "Clearer, more premium brand feel" },
      { label: "Category", value: "Service business growth" },
    ],
  },
  {
    type: "SEO Optimization",
    name: "Local Visibility Upgrade",
    preview: "Better Search Presence",
    summary:
      "An SEO improvement project focused on helping a local business show up more clearly in search and maps results.",
    problem:
      "The business had little local search visibility and weak optimization across key pages and profile listings.",
    solution:
      "Improved on-page SEO, local signals, and Google Business setup to strengthen discoverability and support long-term growth.",
    results: [
      "Stronger search visibility for local queries",
      "Better optimization across important pages",
      "Improved readiness for ongoing content and local growth",
    ],
    details: [
      { label: "Focus", value: "Local SEO" },
      { label: "Outcome", value: "Higher visibility and stronger local presence" },
      { label: "Category", value: "Search optimization" },
    ],
  },
  {
    type: "Lead Generation Setup",
    name: "Appointment Funnel Buildout",
    preview: "More Qualified Inquiries",
    summary:
      "A lead generation project designed to make it easier for interested visitors to book, inquire, or request a consultation.",
    problem:
      "Traffic existed, but there was no strong funnel or follow-up path to convert that attention into appointments.",
    solution:
      "Built a cleaner contact journey with stronger CTA placement, lead capture forms, and a simple follow-up structure.",
    results: [
      "Better lead capture and consultation flow",
      "Cleaner path from visit to inquiry",
      "Stronger support for paid traffic and campaigns",
    ],
    details: [
      { label: "Focus", value: "Funnels and lead generation" },
      { label: "Outcome", value: "More qualified inquiries" },
      { label: "Category", value: "Growth systems" },
    ],
  },
  {
    type: "Marketing Strategy Improvement",
    name: "Growth Strategy Alignment",
    preview: "Smarter Priorities",
    summary:
      "A strategic planning project built to help a business clarify its marketing priorities and invest in the channels that matter most.",
    problem:
      "The business had marketing activity happening in too many disconnected directions with no real growth system behind it.",
    solution:
      "Created a more focused roadmap around website improvements, branding, visibility, conversion, and ongoing growth support.",
    results: [
      "Clearer priorities and better resource allocation",
      "More aligned marketing execution",
      "Stronger long-term growth direction",
    ],
    details: [
      { label: "Focus", value: "Marketing strategy" },
      { label: "Outcome", value: "Clearer direction and better execution" },
      { label: "Category", value: "Agency planning" },
    ],
  },
];

const pricing = [
  {
    name: "Foundation",
    price: "$1,250",
    subtitle: "Website or campaign launch support",
    description:
      "A focused starting point for businesses that need a stronger online foundation and a cleaner growth direction.",
    features: [
      "Website or landing page strategy",
      "Brand and messaging alignment",
      "Lead-ready contact flow",
      "Foundational SEO setup",
      "Launch support",
    ],
    cta: "Start with Foundation",
  },
  {
    name: "Momentum",
    price: "$2,800",
    subtitle: "Growth-focused marketing system",
    description:
      "A stronger engagement for businesses that want to combine modern design, SEO, lead generation, and strategy.",
    features: [
      "Website or redesign support",
      "SEO and visibility improvements",
      "Lead generation setup",
      "Analytics and tracking",
      "Growth strategy guidance",
    ],
    cta: "Build Momentum",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Scale",
    price: "$4,800",
    subtitle: "Ongoing marketing partnership",
    description:
      "A more complete growth partnership for businesses that want continued support across multiple channels.",
    features: [
      "Website, branding, and funnel support",
      "SEO and paid ads coordination",
      "Marketing strategy and reporting",
      "Automation and follow-up systems",
      "Ongoing support available",
    ],
    cta: "Explore Scale",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "We learn about your business, your audience, and the biggest opportunities to improve visibility, lead flow, and growth.",
  },
  {
    step: "02",
    title: "Build",
    description: "We create the right mix of website improvements, branding, campaigns, funnels, and marketing systems around your goals.",
  },
  {
    step: "03",
    title: "Launch",
    description: "Your updated digital presence goes live with clear messaging, stronger conversion paths, and the tools needed to support results.",
  },
  {
    step: "04",
    title: "Grow",
    description: "We refine, optimize, and expand based on what helps your business generate more leads, better performance, and steadier growth.",
  },
];

const testimonials = [
  {
    quote:
      "Ventluna Digital helped us think beyond just a website. The strategy felt clearer, the branding looked stronger, and the whole business felt more professional online.",
    name: "Dr. Melissa P.",
    business: "Owner, Northfield Wellness Clinic",
  },
  {
    quote:
      "We needed better lead flow, better messaging, and a cleaner online presence. The new direction finally made our marketing feel connected instead of scattered.",
    name: "Jason R.",
    business: "Partner, Summit Legal Group",
  },
  {
    quote:
      "The process was straightforward, communication was quick, and the final result felt like a real growth upgrade for our business instead of just a cosmetic redesign.",
    name: "Alyssa M.",
    business: "Director, Elevate Med Spa",
  },
];

const faqs = [
  {
    question: "What does Ventluna Digital help with?",
    answer:
      "We help businesses grow through websites, SEO, paid ads, branding, lead generation, marketing strategy, analytics, automation, and other digital growth systems.",
  },
  {
    question: "Can you redesign my current website?",
    answer:
      "Yes. Website redesigns are a strong fit when your current site looks outdated, feels hard to navigate, or is not helping convert visitors into customers.",
  },
  {
    question: "Do you only work with local businesses?",
    answer:
      "No. We work with both local businesses and growth-focused companies in industries like clinics, law, wellness, service businesses, and professional practices.",
  },
  {
    question: "Can you help with lead generation and SEO too?",
    answer:
      "Yes. Ventluna Digital is designed to support more than web design alone, including SEO, local visibility, landing pages, funnels, analytics, paid ads, and lead capture systems.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Ongoing support is available for website updates, SEO improvements, campaigns, analytics, marketing strategy, and continued growth work.",
  },
  {
    question: "How do we get started?",
    answer:
      "You can fill out the contact form, email us directly, or request a consultation. From there, we will talk through your business, your goals, and the best next step.",
  },
];

const logoStrip = [
  "Mental Health Clinics",
  "Med Spas",
  "Law Firms",
  "Contractors",
  "Telehealth Providers",
  "Dentists",
  "Local Service Businesses",
  "Small Businesses",
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
      <div class="price">${plan.price}<span>${plan.subtitle}</span></div>
      <p>${plan.description}</p>
      <ul class="pricing-features">
        ${plan.features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
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
const submitLabel = submitButton?.querySelector(".submit-label");
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
        <ul class="results-list modal-results">
          ${project.results.map((result) => `<li>${result}</li>`).join("")}
        </ul>
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
  industry: (value) => (value ? "" : "Please choose your industry."),
  message: (value) => (value.trim().length >= 18 ? "" : "Please add a few details about your business and goals."),
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

  if (submitLabel) {
    submitLabel.textContent = submitting ? "Sending..." : "Get Started";
  }
};

// Form submission handler
quoteForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (isSubmitting) return;

  clearFormStatus();

  const valid = validateForm();
  if (!valid) {
    setFormStatus("Please fix the highlighted fields and try again.", "error");
    return;
  }

  setSubmittingState(true);

  try {
    const formData = new FormData(quoteForm);

    const response = await fetch(FORMSPREE_ENDPOINT, {
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

    // Success message
    setFormStatus(
      "Thank you! Your project request has been sent. We will contact you soon.",
      "success"
    );
    showToast("Project request sent.");
  } catch (error) {
    // Error handling
    setFormStatus(
      "Something went wrong while sending your request. Please try again or email ventlunadigital@gmail.com directly.",
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



















