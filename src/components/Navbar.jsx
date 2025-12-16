import { Menu, X } from 'lucide-react'; // Icons for the mobile menu

// Note: You would typically use React state (useState) here to handle
// the mobile menu open/close state. For simplicity, I'm just including
// the necessary classes and icon for the mobile button.

const Navbar = () => {
  // Define links once for cleaner usage
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#case-studies", label: "Cases" },
  ];

  return (
    // Fixed, dark background, subtle shadow
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800 transition-shadow duration-300 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* 1. Logo / Name Branding */}
        <a href="#" className="text-2xl font-black text-white tracking-widest uppercase hover:text-red-500 transition">
          Ayush Rawat
        </a>
        
        {/* 2. Desktop Navigation Links */}
        {/* Hidden on small screens, shown on medium and up */}
        <ul className="hidden md:flex gap-10 text-sm font-medium uppercase tracking-wider">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Contact Button (Primary CTA) - Use the accent color */}
          <li>
            <a 
              href="#contact" 
              className="text-red-500 hover:text-white border border-red-500 hover:border-white px-4 py-1 rounded-full transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* 3. Mobile Menu Button (Hamburger) */}
        {/* Hidden on desktop, shown on small screens */}
        <button 
          className="md:hidden text-white hover:text-red-500 transition"
          aria-label="Toggle Navigation Menu"
          // In a real app, onClick would toggle state
          // onClick={() => setIsMenuOpen(!isMenuOpen)} 
        >
          {/* Use X when open, Menu when closed */}
          {/* {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} */}
          <Menu className="w-6 h-6" /> 
        </button>
      </div>
      
      {/* 4. Mobile Menu Overlay (Requires state management to show/hide) */}
      {/* <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-900 border-t border-gray-800`}>
        <ul className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-lg text-gray-400 hover:text-white transition">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="inline-block bg-red-500 text-black px-6 py-2 rounded-lg text-lg font-bold mt-2">
              Contact
            </a>
          </li>
        </ul>
      </div> 
      */}
    </nav>
  );
};

export default Navbar;