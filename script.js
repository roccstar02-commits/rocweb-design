const services = [
  {
    icon: "?",
    title: "Website Design",
    description:
      "A brand-new website designed to make your business look polished, clear, and trustworthy online.",
  },
  {
    icon: "?",
    title: "Website Redesign",
    description:
      "Refresh an outdated site with a cleaner layout, stronger messaging, and a more modern look.",
  },
  {
    icon: "?",
    title: "Landing Pages",
    description:
      "Focused pages built around one offer, service, or campaign to help turn visitors into leads.",
  },
  {
    icon: "?",
    title: "Mobile Optimization",
    description:
      "Make sure your site looks sharp and works smoothly on phones, tablets, and desktop screens.",
  },
  {
    icon: "?",
    title: "Basic SEO Setup",
    description:
      "Set up the core search-friendly basics so your business is easier to find and understand online.",
  },
  {
    icon: "?",
    title: "Website Maintenance",
    description:
      "Ongoing support for updates, edits, and keeping your site clean, current, and working properly.",
  },
  {
    icon: "?",
    title: "Contact Forms / Lead Capture",
    description:
      "Simple, professional forms that make it easy for customers to reach out and request a quote.",
  },
];

const industries = [
  { icon: "??", title: "Restaurants", description: "Menus, reservations, and local visibility." },
  { icon: "?", title: "Barbershops", description: "Sharp presentation and easy booking." },
  { icon: "?", title: "Salons", description: "Show services, pricing, and style." },
  { icon: "??", title: "Contractors", description: "Build trust and generate estimate requests." },
  { icon: "??", title: "Auto Detailers", description: "Highlight packages and before-and-after work." },
  { icon: "??", title: "Gyms", description: "Membership info, schedules, and stronger branding." },
  { icon: "??", title: "Real Estate Agents", description: "Professional credibility and lead capture." },
  { icon: "??", title: "Local Retail Shops", description: "A clean digital storefront for your brand." },
  { icon: "??", title: "Cleaning Companies", description: "Clear services and quote requests." },
  { icon: "??", title: "Professional Services", description: "Simple, credible sites that build trust." },
];

const benefits = [
  {
    title: "Affordable for small businesses",
    description:
      "Packages are designed to be realistic for local owners who want quality without paying agency-level prices.",
  },
  {
    title: "Modern and mobile-friendly",
    description:
      "Every site is built to feel current, work on every screen, and make a strong first impression right away.",
  },
  {
    title: "Fast turnaround",
    description:
      "You do not have to wait months to get online. The process is built to move clearly and efficiently.",
  },
  {
    title: "Clean and simple process",
    description:
      "No confusing jargon, no bloated process, and no unnecessary complexity for business owners.",
  },
  {
    title: "Personalized service",
    description:
      "Your site is shaped around your business, your industry, and the kind of customers you want to attract.",
  },
  {
    title: "Built to help generate leads",
    description:
      "Clear calls to action, smart page structure, and lead forms help turn traffic into real inquiries.",
  },
];

const portfolioItems = [
  {
    type: "Barbershop Website",
    name: "Prime Cut Barbershop",
    summary:
      "A sleek neighborhood barbershop site with service highlights, online booking prompts, and a polished first impression.",
    visual: "Premium Grooming",
  },
  {
    type: "Auto Detailer Website",
    name: "Garden State Auto Spa",
    summary:
      "A bold, high-contrast layout built to showcase detailing packages, trust-building visuals, and quote requests.",
    visual: "Showroom Shine",
  },
  {
    type: "Cafe Website",
    name: "Bella Vita Cafe",
    summary:
      "A warm but modern restaurant concept with menu highlights, event bookings, and a strong local brand feel.",
    visual: "Modern Dining",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$799",
    subtitle: "Simple one-page site",
    description:
      "A clean, focused online presence for businesses that need something professional without overcomplicating it.",
    features: [
      "One-page custom website",
      "Mobile-friendly design",
      "Contact form",
      "Basic SEO setup",
      "Launch support",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    price: "$1,800",
    subtitle: "Multi-page business site",
    description:
      "A stronger business website with more room to explain services, build trust, and capture better leads.",
    features: [
      "Up to 5 custom pages",
      "Service section layouts",
      "Lead-focused contact forms",
      "Mobile optimization",
      "Basic SEO setup",
    ],
    cta: "Choose Growth",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Premium",
    price: "$3,200",
    subtitle: "Custom site with support",
    description:
      "A more custom experience for businesses that want a stronger online brand and ongoing help after launch.",
    features: [
      "Custom multi-page website",
      "More tailored design direction",
      "Priority revisions",
      "Lead capture strategy",
      "Ongoing support included",
    ],
    cta: "Go Premium",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, goals, audience, and the kind of website you need.",
  },
  {
    step: "02",
    title: "Design",
    description: "We shape the layout, messaging direction, and visual style around your brand.",
  },
  {
    step: "03",
    title: "Build",
    description: "Your site is developed to be clean, responsive, and ready to perform on every screen.",
  },
  {
    step: "04",
    title: "Launch",
    description: "We review the final site, go live, and make sure your business is ready to show it off.",
  },
];

const testimonials = [
  {
    quote:
      "Our old site looked outdated and barely explained what we do. The new one makes us look like a real brand, and customers mention it all the time.",
    name: "Anthony R.",
    business: "Owner, Prime Cut Barbershop",
  },
  {
    quote:
      "The process was easy, the turnaround was fast, and the site looks way more professional than what we had before. It gave our business a big credibility boost.",
    name: "Melissa D.",
    business: "Manager, Bella Vita Cafe",
  },
  {
    quote:
      "We needed something modern that worked on phones and helped people request quotes. RocWeb Design made it feel simple and delivered exactly that.",
    name: "Carlos M.",
    business: "Owner, Garden State Auto Spa",
  },
];

const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "Most small business websites can be completed in about 1 to 3 weeks depending on the size of the project, how quickly content is provided, and how custom the site needs to be.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on the size and features of the site. Starter, Growth, and Premium packages give a clear baseline, and custom quotes are available for more specific needs.",
  },
  {
    question: "Can you redesign my current site?",
    answer:
      "Yes. If your current website feels outdated, cluttered, or does not reflect your business well, a redesign can modernize it and improve usability.",
  },
  {
    question: "Will my site work on mobile?",
    answer:
      "Yes. Every site is built to work well on phones, tablets, and desktop screens so your business looks professional everywhere.",
  },
  {
    question: "Do you offer maintenance?",
    answer:
      "Yes. Maintenance and ongoing support are available if you want help keeping the site updated and running smoothly after launch.",
  },
  {
    question: "Can I update the site later?",
    answer:
      "Yes. The structure is designed so future edits and upgrades are straightforward, whether you want small updates or bigger additions later on.",
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

renderList(
  "logo-strip-list",
  logoStrip,
  (item) => `<span class="logo-pill">${item}</span>`
);

renderList(
  "services-grid",
  services,
  (service) => `
    <article class="service-card reveal">
      <div class="card-icon" aria-hidden="true">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
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
  "benefits-list",
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
  (item) => `
    <article class="portfolio-card reveal">
      <div class="portfolio-visual">
        <div class="portfolio-browser" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <div class="portfolio-preview">
          <span>${item.type}</span>
          <strong>${item.visual}</strong>
          <p>${item.name}</p>
        </div>
      </div>
      <div class="portfolio-body">
        <span class="portfolio-meta">${item.type}</span>
        <h3>${item.name}</h3>
        <p>${item.summary}</p>
        <a class="button button-secondary" href="#contact">View Project</a>
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
      <a class="button ${plan.featured ? "button-primary" : "button-secondary"}" href="#contact">${plan.cta}</a>
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
      <p class="testimonial-quote">"${item.quote}"</p>
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
  (faq) => `
    <article class="faq-item reveal">
      <h3>${faq.question}</h3>
      <p>${faq.answer}</p>
    </article>
  `
);

const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-links a, .nav-panel .button");

if (menuToggle && navPanel) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navPanel.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navPanel.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -30px 0px",
  }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
