import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h2>FirstTrip</h2>
          <p>
            AI-powered travel preparation platform helping you travel smarter,
            prepare better, and stay organized.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">Destinations</a>
          <a href="#">Visa Center</a>
          <a href="#">AI Assistant</a>
        </div>

        {/* SUPPORT */}
        <div className="footer-links">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Get travel tips and updates directly in your inbox.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FirstTrip. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;