import "./App.css";

export default function App() {
  return (
    <>
      <div className="loader">
        <div className="loader-logo">AK</div>
      </div>

      <a
        className="whatsapp-float"
        href="https://wa.me/919118594977"
        target="_blank"
      >
        WhatsApp
      </a>

      <div className="page">
        <nav className="fade-down">
          <div className="brand">
            <div className="logo">AK</div>
            <div>
              <h2>AK Banner Design</h2>
              <p>Design • Create • Impress</p>
            </div>
          </div>

          <a className="nav-btn" href="https://wa.me/919118594977" target="_blank">
            Order Now
          </a>
        </nav>

        <section className="hero">
          <p className="tag fade-up">Aesthetic Posters & Invitations</p>

          <h1 className="fade-up delay-1">
            Premium Banner <br /> & Invitation Card Designs
          </h1>

          <p className="text fade-up delay-2">
            We create beautiful invitation cards, Bhagwat Katha banners,
            wedding cards, Instagram posts and premium business posters.
          </p>

          <div className="buttons fade-up delay-3">
            <a href="https://wa.me/919118594977" target="_blank">
              WhatsApp Order
            </a>

            <a
              href="https://www.instagram.com/akbannerdesign/"
              target="_blank"
              className="outline"
            >
              Instagram
            </a>
          </div>

          <div className="card float-card">
            <h3>Luxury Design Studio</h3>
            <p>
              Elegant modern invitation and banner designs with aesthetic color
              combinations.
            </p>
          </div>
        </section>

        <h2 className="section-title">Our Services</h2>

        <div className="grid">
          <div className="box"><h3>Birthday Invitation</h3></div>
          <div className="box"><h3>Bhagwat Katha Banner</h3></div>
          <div className="box"><h3>Wedding Card</h3></div>
          <div className="box"><h3>Instagram Post</h3></div>
          <div className="box"><h3>Business Poster</h3></div>
          <div className="box"><h3>YouTube Thumbnail</h3></div>
        </div>

        <h2 className="section-title">Pricing</h2>

        <div className="grid">
          <div className="price">
            <h3>Basic</h3>
            <h2>₹299</h2>
            <p>Simple design</p>
          </div>

          <div className="price featured">
            <h3>Premium</h3>
            <h2>₹599</h2>
            <p>Luxury aesthetic design</p>
          </div>

          <div className="price">
            <h3>Full Package</h3>
            <h2>₹999+</h2>
            <p>Banner + card + post</p>
          </div>
        </div>

        <section className="cta">
          <h2>Need a Design Today?</h2>
          <p>Contact AK Banner Design for premium invitation and banner designs.</p>

          <div className="buttons">
            <a href="https://wa.me/919118594977" target="_blank">
              Contact Now
            </a>
          </div>
        </section>

        <footer>
          <div className="footer-logo">AK Banner Design</div>
          <p>Premium posters, invitations, banners & social media designs.</p>
          <div className="footer-links">
            <a href="https://wa.me/919118594977" target="_blank">WhatsApp</a>
            <a href="https://www.instagram.com/akbannerdesign/" target="_blank">Instagram</a>
          </div>
          <small>© 2026 AK Banner Design. All rights reserved.</small>
        </footer>
      </div>
    </>
  );
}