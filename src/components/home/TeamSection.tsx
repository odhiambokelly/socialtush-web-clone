import { motion } from 'framer-motion';

export function TeamSection() {
  return (
    <section id="team" className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-primary mb-4" />
          <h2 className="text-4xl font-bold uppercase tracking-tight">Team</h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] md:h-auto"
          >
            <img 
              src="https://files.cdn-files-a.com/uploads/7651200/2000_69fdde94dd45c.png" 
              alt="Odhiambo Vincent Kelly" 
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary p-12 text-white flex flex-col justify-center text-center md:text-left"
          >
            <h3 className="text-3xl font-bold mb-2">Odhiambo Vincent Kelly</h3>
            <div className="w-16 h-1 bg-white/50 mb-6 mx-auto md:mx-0" />
            <p className="text-white/80 font-medium uppercase tracking-widest text-sm mb-4">C.E.O</p>
            <p className="text-lg leading-relaxed italic">
              Founder & SEO Specialist at SocialTush
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
