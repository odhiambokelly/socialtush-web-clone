import { Link } from '@tanstack/react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171313] text-white py-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold font-logo block mb-2">SocialTush</span>
            <p className="text-gray-400 text-sm">
              Copyright © {currentYear} All rights reserved
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm font-medium uppercase tracking-wider">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link to="/team" className="hover:text-primary transition-colors">Team</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link to="/pricing" className="hover:text-primary transition-colors">PRICING</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
