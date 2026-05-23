import { motion } from 'framer-motion';
import { Button, Input, Textarea } from '@blinkdotnew/ui';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-primary mb-4" />
          <h2 className="text-4xl font-bold uppercase tracking-tight">Contact</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 uppercase tracking-wider">Address</h4>
                  <p className="text-gray-600">Homa Bay Town, Kenya</p>
                  <p className="text-gray-600">20 NYANGWESO, Homa Bay, 40311, Kenya</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 uppercase tracking-wider">Phone</h4>
                  <a href="tel:+254-727424569" className="text-gray-600 hover:text-primary transition-colors">+254-727424569 - Kokombo Fast</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 uppercase tracking-wider">Email</h4>
                  <a href="mailto:support@socialtush.com" className="text-gray-600 hover:text-primary transition-colors">support@socialtush.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 uppercase tracking-wider">Hours</h4>
                  <p className="text-gray-600">24 Hours</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-600 italic">
                Have questions or need assistance? Send us a message — we’d love to hear from you.
              </p>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Name</label>
                  <Input placeholder="Your Name" className="rounded-xl border-gray-200 focus:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Phone</label>
                  <Input placeholder="Your Phone" className="rounded-xl border-gray-200 focus:ring-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Email</label>
                <Input placeholder="Email Address" type="email" className="rounded-xl border-gray-200 focus:ring-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Message</label>
                <Textarea placeholder="How can we help?" className="rounded-xl border-gray-200 focus:ring-primary min-h-[150px]" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 rounded-3xl overflow-hidden shadow-2xl h-[400px] border-8 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.5189283734!2d34.43634035!3d-0.52562475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d94943f383c07b%3A0x6a0f3979573ce!2sHoma+Bay+Town%2C+Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
          />
        </div>
      </div>
    </section>
  );
}
