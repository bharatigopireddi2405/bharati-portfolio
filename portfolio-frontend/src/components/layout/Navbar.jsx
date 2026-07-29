import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navigationLinks } from "../../constants/constants";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-xl font-bold tracking-wide text-white"
          onClick={handleLinkClick}
        >
          Bharati<span className="text-cyan-400">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={handleMenuToggle}
          className="text-2xl text-white md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-3 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;