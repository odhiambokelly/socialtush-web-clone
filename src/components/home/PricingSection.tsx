import { motion } from 'framer-motion';

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-primary mb-4" />
          <h2 className="text-4xl font-bold uppercase tracking-tight">PRICING</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6 text-center md:text-left"
          >
            <p>
              Our pricing model is intricately designed to reflect the comprehensive range of services we offer, customized to address your unique requirements. Following a thorough agreement process and in-depth consultation session, wherein we delve into the intricacies of your business goals and challenges, we tailor our services to align perfectly with your objectives.
            </p>
            <p>
              At SocialTush, we understand the importance of clarity and transparency in pricing. Our aim is to provide you with a detailed breakdown of costs associated with the services rendered, ensuring that you have a clear understanding of the value you receive.
            </p>
            <p>
              Moreover, we encourage open communication and collaboration throughout the process. Our team is readily available to address any questions or concerns you may have, offering dedicated support every step of the way.
            </p>
            <p>
              By partnering with SocialTush, you gain access to a wealth of expertise and resources aimed at propelling your business forward. We are committed to fostering a mutually beneficial relationship, working closely with you to achieve success and drive growth.
            </p>
            <p className="font-bold text-foreground">
              Reach out to us today to discover how SocialTush can help elevate your business to new heights
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <img 
              src="https://files.cdn-files-a.com/uploads/7651200/normal_65e66fbd1520b.jpg" 
              alt="Pricing" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
