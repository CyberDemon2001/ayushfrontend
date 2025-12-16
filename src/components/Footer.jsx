import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Darkest background, substantial padding, and a clear separation border
    <footer className="bg-gray-950 border-t border-gray-800 pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* 1. Copyright Text */}
        <p className="text-sm text-gray-400 font-medium tracking-wide">
          © {currentYear} Ayush Rawat. All rights reserved.
        </p>

        {/* 2. Social Links */}
        <div className="flex space-x-6">
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-red-500 transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://twitter.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-red-500 transition-colors duration-200"
            aria-label="Twitter Profile"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a 
            href="https://instagram.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-red-500 transition-colors duration-200"
            aria-label="Instagram Profile"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        
        {/* 3. Portfolio Branding/Link */}
        <p className="text-sm font-bold text-white uppercase tracking-widest">
            Digital Marketing Portfolio
        </p>
      </div>
    </footer>
  );
};

export default Footer;