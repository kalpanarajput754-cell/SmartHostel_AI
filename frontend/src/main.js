import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="page-shell">
    <header class="topbar">
      <div class="brand-wrap">
        <div class="brand-mark">S</div>
        <div>
          <div class="brand-name">SmartHostel</div>
          <div class="brand-tag">Live better, stay longer</div>
        </div>
      </div>

      <nav class="main-nav" aria-label="Main navigation">
        <a href="#features">Features</a>
        <a href="#rooms">Rooms</a>
        <a href="#amenities">Amenities</a>
        <a href="#reviews">Reviews</a>
      </nav>

      <button class="primary-btn small">Book a stay</button>
    </header>

    <main>
      <section class="hero section-card">
        <div class="hero-copy">
          <span class="eyebrow">Comfort meets community</span>
          <h1>Modern hostel living for students, travelers, and remote workers.</h1>
          <p>
            Access secure rooms, coworking spaces, and a vibrant social environment designed for
            comfort, productivity, and peace of mind.
          </p>

          <div class="cta-row">
            <button class="primary-btn">Reserve now</button>
            <button class="secondary-btn">Explore rooms</button>
          </div>

          <ul class="mini-stats" aria-label="Key statistics">
            <li>
              <strong>4.9/5</strong>
              <span>average rating</span>
            </li>
            <li>
              <strong>320+</strong>
              <span>happy residents</span>
            </li>
            <li>
              <strong>24/7</strong>
              <span>support desk</span>
            </li>
          </ul>
        </div>

        <div class="hero-visual" aria-label="SmartHostel room overview">
          <div class="visual-card room-card">
            <div class="room-header">
              <span>Available now</span>
              <span class="badge success">12 rooms</span>
            </div>
            <div class="room-price">
              <strong>$42</strong>
              <span>/ night</span>
            </div>
            <div class="room-meta">
              <span>🌿 Private balcony</span>
              <span>📶 Fast Wi-Fi</span>
            </div>
          </div>

          <div class="visual-card info-card">
            <div class="info-row">
              <span class="dot green"></span>
              <span>Secure entry</span>
            </div>
            <div class="info-row">
              <span class="dot amber"></span>
              <span>Housekeeping</span>
            </div>
            <div class="info-row">
              <span class="dot blue"></span>
              <span>Shared kitchen</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="feature-bar">
        <article class="feature-item">
          <span class="feature-icon">⚡</span>
          <div>
            <h3>Instant booking</h3>
            <p>Reserve in less than 2 minutes.</p>
          </div>
        </article>
        <article class="feature-item">
          <span class="feature-icon">🔒</span>
          <div>
            <h3>Secure stays</h3>
            <p>Biometric access and verified hosts.</p>
          </div>
        </article>
        <article class="feature-item">
          <span class="feature-icon">🌍</span>
          <div>
            <h3>Global community</h3>
            <p>Meet travelers and students from all over.</p>
          </div>
        </article>
      </section>

      <section id="rooms" class="content-section">
        <div class="section-heading">
          <span class="eyebrow">Stay options</span>
          <h2>Choose a room that fits your lifestyle.</h2>
        </div>

        <div class="room-grid">
          <article class="room-tile accent">
            <div class="tile-top">
              <span class="room-type">Shared room</span>
              <span class="pill">Best value</span>
            </div>
            <h3>Studio bunk</h3>
            <p>Comfortable bunk beds, storage lockers, shared bath, and lounge access.</p>
            <div class="tile-footer">
              <strong>$28/night</strong>
              <button class="text-btn">View details</button>
            </div>
          </article>

          <article class="room-tile">
            <div class="tile-top">
              <span class="room-type">Private</span>
              <span class="pill muted">Popular</span>
            </div>
            <h3>Private ensuite</h3>
            <p>Private bedroom with ensuite bathroom, desk, and smart climate control.</p>
            <div class="tile-footer">
              <strong>$58/night</strong>
              <button class="text-btn">View details</button>
            </div>
          </article>

          <article class="room-tile">
            <div class="tile-top">
              <span class="room-type">Long stay</span>
              <span class="pill muted">Flexible</span>
            </div>
            <h3>Monthly stay</h3>
            <p>Reduced monthly rates, laundry access, and community events included.</p>
            <div class="tile-footer">
              <strong>$720/month</strong>
              <button class="text-btn">View details</button>
            </div>
          </article>
        </div>
      </section>

      <section id="amenities" class="content-section alt">
        <div class="section-heading">
          <span class="eyebrow">Everything included</span>
          <h2>Thoughtful amenities for everyday ease.</h2>
        </div>

        <div class="amenity-grid">
          <article class="amenity-card">
            <div class="amenity-icon">🛏️</div>
            <h3>Hotel-quality bedding</h3>
            <p>Fresh linens, blackout curtains, and memory foam comfort.</p>
          </article>
          <article class="amenity-card">
            <div class="amenity-icon">💻</div>
            <h3>Co-working spaces</h3>
            <p>Quiet desks, meeting corners, and reliable high-speed internet.</p>
          </article>
          <article class="amenity-card">
            <div class="amenity-icon">🍽️</div>
            <h3>Shared kitchen</h3>
            <p>Fully stocked kitchen with prep stations and daily cleaning.</p>
          </article>
          <article class="amenity-card">
            <div class="amenity-icon">🧺</div>
            <h3>Laundry & cleaning</h3>
            <p>On-site laundry, housekeeping, and quick-turn room service.</p>
          </article>
        </div>
      </section>

      <section id="reviews" class="content-section testimonial-wrap">
        <div class="section-heading">
          <span class="eyebrow">Resident stories</span>
          <h2>People stay because they feel at home.</h2>
        </div>

        <div class="testimonial-grid">
          <article class="testimonial-card">
            <div class="stars">★★★★★</div>
            <p>
              “The atmosphere is calm, clean, and genuinely welcoming. I’ve been able to work,
              rest, and meet amazing people in one place.”
            </p>
            <div class="person">
              <strong>Amelia</strong>
              <span>Remote designer</span>
            </div>
          </article>

          <article class="testimonial-card">
            <div class="stars">★★★★★</div>
            <p>
              “SmartHostel made moving to a new city easy. The staff responded fast, and the rooms
              are much nicer than I expected.”
            </p>
            <div class="person">
              <strong>Daniel</strong>
              <span>Graduate student</span>
            </div>
          </article>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <div class="brand-name">SmartHostel</div>
        <p>Comfortable rooms, real community, effortless stays.</p>
      </div>
      <div class="footer-actions">
        <button class="primary-btn">Schedule a visit</button>
      </div>
    </footer>
  </div>
`
