import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@blinkdotnew/ui';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 pointer-events-none"
        >
          <div className="container mx-auto max-w-4xl pointer-events-auto">
            <div className="bg-[#171313] text-white p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-6 border border-white/5">
              <p className="flex-1 text-sm md:text-base text-gray-300">
                This website uses cookies to ensure you get the best experience on our website.
              </p>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <Button 
                  onClick={handleAccept}
                  className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest px-8 py-6 rounded-2xl flex-1 md:flex-none"
                >
                  Got it!
                </Button>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="p-2 text-gray-500 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
