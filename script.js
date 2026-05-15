// script.js

const stickyHeader = document.getElementById("stickyHeader");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    stickyHeader.classList.add("show");
  } else {
    stickyHeader.classList.remove("show");
  }

});

/* IMAGE CAROUSEL */

const mainImage = document.getElementById("mainImage");

const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach((thumb) => {

  thumb.addEventListener("click", () => {

    mainImage.src = thumb.src;

    thumbnails.forEach((item) => {
      item.classList.remove("active");
    });

    thumb.classList.add("active");

  });

});

// scroll to specs when clicking the secondary button
const specsButton = document.querySelector('.secondary-btn');
if (specsButton) {
  specsButton.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById('specs');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// FAQ accordion
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      // close others
      items.forEach(i => { if (i !== item) i.classList.remove('open'); });
      item.classList.toggle('open');
      // keep chevron as a down arrow per design (do not toggle to up)
      const chev = btn.querySelector('.chev');
      if (chev) chev.textContent = '▼';
    });
  });
  // mount CTA and footer from helpers (render-only)
  if (window.Helpers) {
    Helpers.mount('#cta-root', Helpers.renderCTA());
    Helpers.mount('#footer-root', Helpers.renderFooter());
    // mount newly extracted sections
    Helpers.mount('#testimonials-root', Helpers.renderTestimonials());
    Helpers.mount('#portfolio-root', Helpers.renderPortfolio());
    Helpers.mount('#resources-root', Helpers.renderResources());
  }
});

/* Applications carousel controls */
(() => {
  const carousel = document.getElementById('appsCarousel');
  const prev = document.getElementById('appsPrev');
  const next = document.getElementById('appsNext');
  if (!carousel) return;

  const cards = Array.from(carousel.querySelectorAll('.app-card'));
        
        // mobile menu toggle (works for both headers)
        document.addEventListener('click', (e) => {
          const btn = e.target.closest('.menu-toggle');
          if (!btn) return;
          const navbar = btn.closest('.navbar');
          if (!navbar) return;
          const group = navbar.querySelector('.nav-and-cta');
          if (!group) return;
          group.classList.toggle('open');
        });

        // close mobile menu when a nav link is clicked
        document.addEventListener('click', (e)=>{
          const link = e.target.closest('.nav-links a');
          if(!link) return;
          const group = link.closest('.nav-and-cta');
          if(group) group.classList.remove('open');
        });

  function centerCard(card) {
    const cardRect = card.getBoundingClientRect();
    const containerRect = carousel.getBoundingClientRect();
    const currentScroll = carousel.scrollLeft;
    const offset = (cardRect.left - containerRect.left) + (cardRect.width / 2) - (containerRect.width / 2);
    carousel.scrollTo({ left: currentScroll + offset, behavior: 'smooth' });
  }

  prev && prev.addEventListener('click', () => {
    // find first fully visible card center and move to previous
    const containerCenter = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
    let idx = cards.findIndex(c => {
      const r = c.getBoundingClientRect();
      return (r.left + r.width/2) >= containerCenter - 1;
    });
    if (idx <= 0) idx = 0; else idx = idx - 1;
    centerCard(cards[idx]);
  });

  next && next.addEventListener('click', () => {
    const containerCenter = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
    let idx = cards.findIndex(c => {
      const r = c.getBoundingClientRect();
      return (r.left + r.width/2) >= containerCenter - 1;
    });
    if (idx === -1) idx = 0;
    if (idx >= cards.length - 1) idx = cards.length - 1; else idx = idx + 1;
    centerCard(cards[idx]);
  });
})();

/* Process tabs: swap title/text/image for each step */
(() => {
  const tabs = document.querySelectorAll('.tabs-list .tab');
  const title = document.getElementById('processTitle');
  const text = document.getElementById('processText');
  const img = document.getElementById('processImage');

  const map = {
    raw: { t: 'High-Grade Raw Material Selection', d: 'Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.', i: 'assets/ph.png' },
    extrusion: { t: 'Extrusion', d: 'Melting and homogeneous mixing inside the extruder before passing through the die to form continuous pipe profile.', i: 'assets/ph.png' },
    cooling: { t: 'Cooling', d: 'Controlled cooling bath solidifies the pipe maintaining dimensional accuracy and removing residual stresses.', i: 'assets/ph.png' },
    sizing: { t: 'Sizing', d: 'Vacuum and pressure sizing stations fine-tune outer diameter and wall thickness to specification.', i: 'assets/ph.png' },
    qc: { t: 'Quality Control', d: 'Inline testers measure roundness, wall thickness and perform visual inspections for defects.', i: 'assets/ph.png' },
    marking: { t: 'Marking', d: 'Automated marking prints batch codes and specification data along the pipe length.', i: 'assets/ph.png' },
    cutting: { t: 'Cutting', d: 'Precision cutting stations cut coils to required lengths and prepare ends for joining.', i: 'assets/ph.png' },
    packaging: { t: 'Packaging', d: 'Coils and straight lengths are packaged and prepared for safe transport.', i: 'assets/ph.png' }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.getAttribute('data-step');
      const entry = map[key];
      if (entry) {
        if (title) title.textContent = entry.t;
        if (text) text.textContent = entry.d;
        if (img) img.src = entry.i;
      }
    });
  });
})();