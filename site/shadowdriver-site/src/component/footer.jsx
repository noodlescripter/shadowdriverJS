export default function FooterComponent() {
  return (
    <footer className="bg-dark text-white text-center sticky-bottom shadow py-3">
      <p>
        &copy; {new Date().getFullYear()} ShadowdriverJS. All rights reserved.
      </p>
      <address>
        Crafted with 💖 and a pinch of caffeine by your favorite coding wizard,
        <a
          href="mailto:hamim.alam.personal@gmail.com"
          className="text-warning text-decoration-none ms-1"
        >
          @noodlescripter (🍜)
        </a>
        <br />
        <span class="text-white">
          Send me an email if you want to talk code, memes, or how awesome
          spaghetti is (🍝)!
        </span>
      </address>
    </footer>
  )
}
