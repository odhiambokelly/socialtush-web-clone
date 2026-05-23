import { motion } from 'framer-motion';
import { Button } from '@blinkdotnew/ui';

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.cdn-files-a.com/ready_uploads/media/11411/2000_5cda9c9301ec9.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 font-logo"
        >
          Explore and Grow
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto"
        >
          Moving you closure to your clients
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105 active:scale-95">
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* Bottom Shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-16 md:h-24 fill-background"
        >
          <path d="M0,100.136212 L0,41.5975353 C18.8339184,71.5220681 35.500585,72.0482732 50,43.1761506 C71.7491224,-0.132033358 87.1919401,-17.6187176 100,25.6894663 C100,64.7152509 100,89.7060071 100,100.661735 L0,100.136212 Z"></path>
        </svg>
      </div>
    </section>
  );
}
