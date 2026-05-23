import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-primary mb-4" />
          <h2 className="text-4xl font-bold uppercase tracking-tight">About</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.cdn-files-a.com/ready_uploads/media/1720/400_5cc99b8d8440b.jpg" 
              alt="About SocialTush" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-600 leading-relaxed"
          >
            <p>
              At <strong className="text-foreground">SocialTush</strong>, we are dedicated to providing top-quality marketing services to help businesses grow and succeed.
            </p>
            <p>
              Our team of experienced professionals has a deep understanding of the latest marketing trends and techniques, and we are committed to delivering results that exceed our clients' expectations.
            </p>
            <p>
              We offer a wide range of marketing services, including search engine optimization, social media marketing, content marketing, email marketing, and more. Our goal is to help businesses increase their online visibility, engage with their audience, and drive more traffic and sales.
            </p>
            <p>
              Our team is passionate about what we do, and we work closely with our clients to develop customized marketing strategies that align with their goals and target audience. We are committed to providing exceptional customer service, and we pride ourselves on our ability to build long-lasting relationships with our clients.
            </p>
            <p>
              If you are looking to take your business to the next level, we invite you to contact us to learn more about our marketing services and how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
