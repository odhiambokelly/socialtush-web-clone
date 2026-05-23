import { Link } from '@tanstack/react-router';
import { Button } from '@blinkdotnew/ui';
import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
    { label: 'PRICING', href: '/pricing' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Affiliate', href: '/affiliate' },
    { label: 'Blog', href: '/blog' },
    { label: 'Schedule Booking', href: '/schedule-booking' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#171313] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="https://images.cdn-files-a.com/uploads/7651200/400_640c7883f383c.png" 
              alt="SocialTush" 
              className="h-10 w-auto"
            />
            <span className="font-logo text-xl font-bold tracking-tight">SocialTush</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                activeProps={{ className: 'text-primary font-semibold' }}
                className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <Link to="/password-generator" className="text-sm font-medium hover:text-primary uppercase tracking-wider">
                PassWord Generator
              </Link>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <User size={20} />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-primary">
              <User size={20} />
            </Button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "lg:hidden absolute top-16 left-0 right-0 bg-[#171313] border-t border-white/10 transition-all duration-300 overflow-hidden",
        isOpen ? "max-height-[100vh] py-4" : "max-h-0"
      )}>
        <div className="container mx-auto px-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/password-generator"
            onClick={() => setIsOpen(false)}
            className="py-3 text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
          >
            PassWord Generator
          </Link>
        </div>
      </div>
    </nav>
  );
}
