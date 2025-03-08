export default function FooterComponent() {
  return (
    <footer className="bg-dark text-white w-full mt-auto py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <small>&copy; {new Date().getFullYear()} ShadowdriverJS</small>
          </div>
          <div className="text-center md:text-right">
            <small className="flex items-center justify-center md:justify-end">
              Crafted with 💖 by
              <a href="mailto:hamim.alam.personal@gmail.com"
                className="text-yellow-400 hover:text-yellow-300 no-underline ml-1"
                title="Email me about code, memes, or spaghetti! 🍝" >
                @noodlescripter 🍜
              </a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}