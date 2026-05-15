// helpers.js - render-only helpers for CTA and Footer
(function (window) {
  function mount(selector, html) {
    const el = document.querySelector(selector);
    if (!el) return;
    el.innerHTML = html;
  }

  function renderCTA() {
    return `
    <section class="cta-panel">
      <div class="container cta-inner">
        <div class="cta-copy">
          <h2>Ready to Transform Your Textile Manufacturing?</h2>
          <p class="cta-lead">Get a personalized consultation and quote for machinery solutions tailored to your specific production requirements.</p>
          <p class="cta-note">For immediate assistance, feel free to give us a direct call at +91-XXXXXXXXXX. You can also send us a quick email at info@meeraindia.com</p>
        </div>

        <div class="cta-form-box">
          <form class="cta-form">
            <h3>Contact Us Today</h3>
            <input type="text" name="name" placeholder="Full Name" />
            <input type="text" name="company" placeholder="Company Name" />
            <input type="email" name="email" placeholder="Email Address" />
            <div class="phone-row">
              <select name="country-code">
                <option>+91</option>
                <option>+1</option>
              </select>
              <input type="tel" name="phone" placeholder="7030328696" />
            </div>
            <button type="submit" class="btn btn-primary">Request Custom Quote</button>
          </form>
        </div>
      </div>
    </section>
    `;
  }

  function renderFooter() {
    return `
    <footer class="footer">
      <div class="footer-top">
        <div class="footer-logo">
          <h2>Mangalam</h2>
          <span>HDPE PIPES</span>
        </div>
        <div class="footer-heading">
          Premium <span>HDPE Pipes & Fittings</span> Manufacturer in South India
        </div>
      </div>

      <div class="footer-content">
        <div class="footer-column">
          <h4>About Us</h4>
          <a href="#">About Us</a>
        </div>

        <div class="footer-column">
          <h4>Categories</h4>
          <a href="#">Packaging Industry Solutions</a>
          <a href="#">Fishnet Manufacturing</a>
          <a href="#">PPMF/Tapes and Twines</a>
          <a href="#">FIBC and Woven Sack</a>
          <a href="#">Carpet and Rugs Industry</a>
          <a href="#">Technical Textiles</a>
        </div>

        <div class="footer-column">
          <h4>Products</h4>
          <a href="#">Two For One Twister</a>
          <a href="#">TPRS Twister Machine</a>
          <a href="#">Ring Twisting Machines</a>
          <a href="#">Covering Machines</a>
          <a href="#">Heat Setting Equipment</a>
          <a href="#">Servo Controlled Winders</a>
        </div>

        <div class="footer-column">
          <h4>Contact</h4>
          <p>📍 2126, Road No. 2, GIDC Sachin, Surat - 394230</p>
          <p>📞 +91-XXX-XXX-XXXX</p>
          <p>✉ info@meeralnd.com</p>
          <p>🎧 support@meeralnd.com</p>
          <div class="social-icons">
            <a href="#">LinkedIn</a>
            <a href="#">X</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>Copyright © 2025 Meera Industries Limited | All Rights Reserved</p>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
    `;
  }

  function renderTestimonials() {
    return `
    <section class="testimonials-section">
      <div class="container">
        <h2>Trusted Performance. Proven Results</h2>
        <p class="muted">From innovative Two-For-One Twisters to specialized heat setting machines, we deliver complete solutions for modern textile manufacturing.</p>

        <div class="testimonials-row">
          <div class="testimonial-card">
            <div class="quote-mark">“</div>
            <p class="quote">Revolutionized our FIBC production efficiency!</p>
            <p class="quote-body">The industries' TFO machines have modernized our FIBC production efficiency, delivering the consistent yarn strength critical for our bulk packaging applications.</p>
            <div class="testimonial-meta">
              <div class="avatar"><img src="assets/ph.png" alt="avatar"><span class="badge">G</span></div>
              <div class="meta-text"><strong>Johann Mueller</strong><span>Production Director</span></div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="quote-mark">“</div>
            <p class="quote">Excellent support for specialized applications.</p>
            <p class="quote-body">The durability and performance of Meera's fishnet processing equipment has significantly improved our product quality.</p>
            <div class="testimonial-meta">
              <div class="avatar"><img src="assets/ph.png" alt="avatar"><span class="badge">G</span></div>
              <div class="meta-text"><strong>Carlos Mendoza</strong><span>Operations Manager</span></div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="quote-mark">“</div>
            <p class="quote">Provides the exact specifications we need!</p>
            <p class="quote-body">Their understanding of automotive textile requirements is exceptional and delivery has been reliable.</p>
            <div class="testimonial-meta">
              <div class="avatar"><img src="assets/ph.png" alt="avatar"><span class="badge">G</span></div>
              <div class="meta-text"><strong>Rajesh Kumar</strong><span>Manufacturing Head</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }

  function renderPortfolio() {
    return `
    <section class="portfolio-section">
      <div class="container">
        <h2>Complete Piping Solutions Portfolio</h2>
        <p class="muted">From innovative Two-For-One Twisters to specialized heat setting machines, we deliver complete solutions for modern textile manufacturing.</p>

        <div class="portfolio-grid">
          <div class="portfolio-card">
            <h4>HDPE Fittings & Accessories</h4>
            <p>Complete range of electrofusion and butt fusion fittings, including elbows, tees, reducers, and couplers for seamless pipe connections.</p>
            <img src="assets/ph.png" alt="HDPE fittings">
            <button class="secondary-btn">Learn More</button>
          </div>

          <div class="portfolio-card">
            <h4>Professional Installation Services</h4>
            <p>Expert installation and fusion welding services ensuring optimal system performance, compliance with standards, and long-term reliability.</p>
            <img src="assets/ph.png" alt="Installation">
            <button class="secondary-btn">Learn More</button>
          </div>

          <div class="portfolio-card">
            <h4>PE-RT Heating Pipes</h4>
            <p>Polyethylene of raised temperature resistance pipes ideal for underfloor heating, radiator connections, and hot water applications.</p>
            <img src="assets/ph.png" alt="PE-RT">
            <button class="secondary-btn">Learn More</button>
          </div>
        </div>

        <div class="portfolio-cta">
          <div class="help-box">Didn't find what you're <strong>looking for?</strong> Talk to our experts for custom solutions and tailored guidance.</div>
          <button class="primary-btn">Talk to an Expert</button>
        </div>
      </div>
    </section>
    `;
  }

  function renderResources() {
    return `
    <section class="resources-section">
      <div class="container">
        <h2>Resources &amp; Downloads</h2>
        <p class="muted">Get all the technical documentation and resources you need to make informed decisions about our HDPE piping solutions.</p>

        <div class="resources-box">
          <div class="resource-row">
            <div class="resource-title">HDPE Pipe Installation Manual (PDF)</div>
            <a class="download-link" href="#">Download PDF <span class="dl-icon">⬇</span></a>
          </div>

          <div class="resource-row">
            <div class="resource-title">Maintenance &amp; Inspection Handbook (PDF)</div>
            <a class="download-link" href="#">Download PDF <span class="dl-icon">⬇</span></a>
          </div>

          <div class="resource-row">
            <div class="resource-title">Engineering Specifications Sheet (PDF)</div>
            <a class="download-link" href="#">Download PDF <span class="dl-icon">⬇</span></a>
          </div>
        </div>
      </div>
    </section>
    `;
  }

  window.Helpers = Object.assign(window.Helpers || {}, {
    mount,
    renderCTA,
    renderFooter,
    renderTestimonials,
    renderPortfolio,
    renderResources,
  });
})(window);
