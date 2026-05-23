import { motion } from 'framer-motion';
import { useParams, Link } from '@tanstack/react-router';
import { Calendar, ChevronLeft, User, Share2 } from 'lucide-react';
import { Button } from '@blinkdotnew/ui';

export function PostPage() {
  const { id } = useParams({ from: '/blog/$id' });

  // Mock data for posts
  const posts: Record<string, any> = {
    "email-marketing": {
      title: "Email Marketing for Small Businesses: Getting Started",
      date: "03/04/2024",
      author: "Odhiambo Vincent",
      content: `
        <p>Email marketing might seem like a daunting venture for small business owners just starting. However, it's more akin to planting a garden - with the right tools and knowledge, you'll soon see your efforts bloom into something beautiful and rewarding. Let's dive deep into understanding why email marketing is essential, uncover its benefits specifically for small businesses, and set some realistic expectations for beginners.</p>
        <h3>Why Email Marketing?</h3>
        <p>In today's digital age, your email list is one of the few assets you truly own. Unlike social media algorithms that can change overnight, email gives you a direct line to your customers.</p>
        <p>Email marketing allows you to build relationships, nurture leads, and drive sales through consistent communication. For small businesses, it's one of the most cost-effective marketing channels available.</p>
        <h3>Getting Started</h3>
        <p>1. Choose an Email Service Provider (ESP).<br/>2. Build your email list (legally).<br/>3. Segment your audience.<br/>4. Create compelling content.<br/>5. Analyze and optimize.</p>
      `,
    },
    "10-rules": {
      title: "10 RULES TO BUILD A WILDLY SUCCESSFUL BUSINESS",
      date: "06/16/2020",
      author: "Odhiambo Vincent",
      content: `
        <p>Elevate your online presence with expert tips, tricks, and insights. Boost engagement, drive traffic, and climb the search engine ladder with our comprehensive guide. #SocialMediaMarketing #GoogleRanking #SocialMedia</p>
        <h3>The 10 Rules</h3>
        <p>1. Solve a real problem.<br/>2. Focus on customer experience.<br/>3. Build a strong brand identity.<br/>4. Embrace digital marketing.<br/>5. Be consistent.<br/>6. Invest in your team.<br/>7. Monitor your metrics.<br/>8. Stay adaptable.<br/>9. Provide immense value.<br/>10. Never stop learning.</p>
      `,
    }
  };

  const post = posts[id] || posts["email-marketing"];

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <article className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-8 font-bold uppercase tracking-widest text-xs">
            <ChevronLeft size={16} /> Back to Blog
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm border-y border-gray-100 py-4">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User size={16} className="text-primary" />
                By {post.author}
              </div>
              <div className="ml-auto">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Share2 size={16} /> Share
                </Button>
              </div>
            </div>
          </header>

          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
            <div className="flex gap-4">
              <span className="font-bold text-sm uppercase tracking-widest">Tags:</span>
              <span className="text-primary text-sm">#Marketing</span>
              <span className="text-primary text-sm">#Business</span>
              <span className="text-primary text-sm">#Growth</span>
            </div>
          </footer>
        </motion.div>
      </article>
    </div>
  );
}
