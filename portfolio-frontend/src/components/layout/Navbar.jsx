import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navigationLinks } from "../../constants/constants";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#hero"
          onClick={() => handleLinkClick("hero")}
          className="text-xl font-bold tracking-wide text-white"
        >
          Bharati<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-7 md:flex">
          {navigationLinks.map((link) => {
            const section = link.href.replace("#", "");

            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(section)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === section
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={handleMenuToggle}
          className="text-2xl text-white md:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navigationLinks.map((link) => {
              const section = link.href.replace("#", "");

              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(section)}
                    className={`block py-3 text-sm font-medium transition-colors duration-300 ${
                      activeSection === section
                        ? "text-cyan-400"
                        : "text-slate-300 hover:text-cyan-400"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;