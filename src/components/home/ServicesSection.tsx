import { motion } from 'framer-motion';
import { Card, CardContent } from '@blinkdotnew/ui';

export function ServicesSection() {
  const services = [
    {
      title: "Social Media Marketing",
      image: "https://images.cdn-files-a.com/uploads/2031/800_5a15ab3119d59.jpg",
      description: "Social media marketing is a powerful way for businesses of all sizes to reach prospects and customers. People discover, learn about, follow, and shop from brands on social media.",
    },
    {
      title: "Customize Email Address",
      image: "https://images.cdn-files-a.com/uploads/2031/800_5a281d5cab608.jpg",
      description: "The name of your brand or website domain that you use to generate email addresses for your company. Name@domain.com, net, biz. No monthly charges.",
    },
    {
      title: "Live Website",
      image: "https://images.cdn-files-a.com/uploads/7651200/800_640bb1f58d37b.jpg",
      description: "Complete build Website to get you started. Ecommerce Online Store, SSL Certificate, Hosting, malware protection, and data backup.",
    },
    {
      title: "Article (Charges Per Page)",
      image: "https://images.cdn-files-a.com/uploads/7651200/800_640c54635a0d0.jpg",
      description: "An article for blogging is a piece of written content that is published on a blog or website. It can be about any topic and is typically intended to inform.",
    },
    {
      title: "LOGO(s)",
      image: "https://images.cdn-files-a.com/uploads/7651200/800_640c55901987b.jpg",
      description: "Over 50 Logo design to choose. Simple, Memorable, Versatile, Scalable, Appropriate, Unique, Timeless. Helps to build a strong connection with customers.",
    },
    {
      title: "Search engine optimization",
      image: "https://images.cdn-files-a.com/uploads/7651200/800_6418fc0db4e03.jpg",
      description: "SEO is the practice of improving the visibility and ranking of a website or web page in search engine results pages (SERPs). Increase organic traffic.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-primary mb-4" />
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground">Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-t-4 border-t-primary group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-600 line-clamp-4 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
