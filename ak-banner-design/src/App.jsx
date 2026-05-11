import "./App.css";

export default function App() {
  return (
    <div className="page">
      <nav>
        <div className="logo">AK</div>
        <div>
          <h2>AK Banner Design</h2>
          <p>Design • Create • Impress</p>
        </div>
      </nav>

      <section className="hero">
        <div>
          <p className="tag">Aesthetic Posters & Invitations</p>
          <h1>Premium Banner & Invitation Card Designs</h1>
          <p className="text">
            We create beautiful designs for birthdays, Bhagwat Katha, weddings,
            business posters and Instagram posts.
          </p>

          <div className="buttons">
            <a href="https://wa.me/919118594977" target="_blank">
              WhatsApp Order
            </a>
            <a href="https://www.instagram.com/akbannerdesign/" target="_blank" className="outline">
              Instagram
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Birthday Invitation</h3>
          <h2>Aarav's Birthday</h2>
          <p>25 May • 6:00 PM</p>
          <p>The Grand Celebration Hall, Lucknow</p>
        </div>
      </section>

      <section>
        <h2 className="section-title">Our Services</h2>
        <div className="grid">
          <div className="box"><h3>Birthday Invitation</h3></div>
          <div className="box"><h3>Bhagwat Katha Banner</h3></div>
          <div className="box"><h3>Wedding Card</h3></div>
          <div className="box"><h3>Business Poster</h3></div>
          <div className="box"><h3>Instagram Post</h3></div>
          <div className="box"><h3>YouTube Thumbnail</h3></div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Pricing</h2>
        <div className="grid">
          <div className="price"><h3>Basic Poster</h3><h2>₹299</h2><p>Simple design</p></div>
          <div className="price"><h3>Premium Banner</h3><h2>₹599</h2><p>Aesthetic premium design</p></div>
          <div className="price"><h3>Full Event Pack</h3><h2>₹999+</h2><p>Banner + card + post</p></div>
        </div>
      </section>

      <section className="cta">
        <h2>Need a design today?</h2>
        <p>Send your text, photo, date, time and venue.</p>
        <a href="https://wa.me/919118594977" target="_blank">Contact Now</a>
      </section>
    </div>
  );
}