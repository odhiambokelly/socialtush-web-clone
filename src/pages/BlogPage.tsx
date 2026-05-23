import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { Card, CardContent } from '@blinkdotnew/ui';
import { Calendar } from 'lucide-react';

export function BlogPage() {
  const posts = [
    {
      id: "email-marketing",
      title: "Email Marketing for Small Businesses: Getting Started",
      date: "03/04/2024",
      excerpt: "Email marketing might seem like a daunting venture for small business owners just starting. However, it's more akin to planting a garden - with the right tools and knowledge, you'll soon see your efforts bloom into something beautiful and rewarding.",
      link: "/blog/email-marketing"
    },
    {
      id: "10-rules",
      title: "10 RULES TO BUILD A WILDLY SUCCESSFUL BUSINESS",
      date: "06/16/2020",
      excerpt: "Elevate your online presence with expert tips, tricks, and insights. Boost engagement, drive traffic, and climb the search engine ladder with our comprehensive guide. #SocialMediaMarketing #GoogleRanking#Social Media",
      link: "/blog/10-rules"
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block w-12 h-1 bg-primary mb-4" />
            <h1 className="text-4xl font-bold uppercase tracking-tight">Blog</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary group">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 text-primary mb-4 text-sm font-semibold">
                      <Calendar size={16} />
                      {post.date}
                    </div>
                    <Link
                      to="/blog/$id"
                      params={{ id: post.id }}
                      className="block group"
                    >
                      <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link
                      to="/blog/$id"
                      params={{ id: post.id }}
                      className="text-primary font-bold uppercase tracking-widest text-sm hover:underline"
                    >
                      Read More
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
