export default function FooterComponent() {
  return (
    <footer className="bg-dark text-white sticky-bottom shadow py-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <small>&copy; {new Date().getFullYear()} ShadowdriverJS</small>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <small className="d-inline-flex align-items-center">
              Crafted with 💖 by
              <a
                href="mailto:hamim.alam.personal@gmail.com"
                className="text-warning text-decoration-none ms-1"
                title="Email me about code, memes, or spaghetti! 🍝"
              >
                @noodlescripter 🍜
              </a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}