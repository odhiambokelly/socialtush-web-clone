import { motion } from 'framer-motion';
import { Button, Input, Textarea, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@blinkdotnew/ui';

export function AffiliateSection() {
  return (
    <section id="affiliate" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-primary mb-4" />
          <h2 className="text-4xl font-bold uppercase tracking-tight">Affiliate</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 md:p-12 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider">Start making money with us today.</h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Earn 15% commission for every client you bring aboard. Join our affiliate program and enjoy 15% earnings from every successful referral. Grow with us and build your income online.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">15%</div>
                  <div className="text-xs uppercase font-bold tracking-widest text-gray-400">Commission</div>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">Refer</div>
                  <div className="text-xs uppercase font-bold tracking-widest text-gray-400">Earn Daily</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Full Name *</label>
                <Input placeholder="Full Name" required className="rounded-xl border-gray-200 focus:ring-primary" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">E-mail *</label>
                  <Input placeholder="E-mail" type="email" required className="rounded-xl border-gray-200 focus:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Phone Number *</label>
                  <Input placeholder="Phone Number" required className="rounded-xl border-gray-200 focus:ring-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Area of specialisation *</label>
                <Select>
                  <SelectTrigger className="rounded-xl border-gray-200 focus:ring-primary">
                    <SelectValue placeholder="What are you offering?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="social">Social Media Marketing</SelectItem>
                    <SelectItem value="email">Customize Email Address</SelectItem>
                    <SelectItem value="website">Live Website (Building Live Website)</SelectItem>
                    <SelectItem value="article">Article (Charges Per Page)</SelectItem>
                    <SelectItem value="logo">LOGO(s) Customized Preferred Logo</SelectItem>
                    <SelectItem value="seo">Search engine optimization</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">How much do you charge in USD($) *</label>
                <Input placeholder="0.00" type="number" required className="rounded-xl border-gray-200 focus:ring-primary" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Additional inquiry?</label>
                <Textarea placeholder="Any other details..." className="rounded-xl border-gray-200 focus:ring-primary min-h-[100px]" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">File Upload</label>
                <Input type="file" className="rounded-xl border-gray-200 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
                Join Affiliate Program
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
