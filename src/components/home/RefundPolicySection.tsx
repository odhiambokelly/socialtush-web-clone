import { motion } from 'framer-motion';

export function RefundPolicySection() {
  return (
    <section id="refund-policy" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-primary mb-4" />
          <h2 className="text-4xl font-bold uppercase tracking-tight">Refund Policy</h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100"
        >
          <div className="prose prose-sm md:prose-base max-w-none text-gray-600 leading-relaxed space-y-8">
            <p>
              At SocialTush Marketing, we strive to provide exceptional services to our esteemed clients around the World. We value your satisfaction and are committed to ensuring a positive experience throughout your engagement with us. This refund policy outlines the terms and conditions regarding refunds for our services.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground uppercase tracking-wider">1. Scope of Refund Policy:</h3>
              <p>This refund policy is applicable to all services provided by SocialTush Marketing to clients. It covers the circumstances under which refunds may be considered.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground uppercase tracking-wider">2. Refund Eligibility:</h3>
              <p>Refunds will only be considered if the following conditions are met:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Services were purchased and delivered stipulated period.</li>
                <li>The refund request is made within 36 hours of receiving the services.</li>
                <li>The client has experienced significant technical difficulties or service disruptions that prevent the satisfactory utilization of the services provided by SocialTush Marketing.</li>
                <li>The refund request is accompanied by sufficient evidence to substantiate the claim.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground uppercase tracking-wider">3. Exclusions:</h3>
              <p>The following circumstances are excluded from our refund policy:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Changes in the client's business strategy or objectives.</li>
                <li>Dissatisfaction with the general outcome of the marketing campaign.</li>
                <li>Failure to achieve specific business or financial results.</li>
                <li>Any circumstances beyond the control of SocialTush Marketing that may hinder the desired outcome.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground uppercase tracking-wider">4. Refund Process:</h3>
              <p>To request a refund, clients must adhere to the following steps:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Submit a written refund request, clearly stating the reasons for the request and providing relevant evidence.</li>
                <li>The refund request should be sent to our designated email address: <strong>support@socialtush.com</strong>.</li>
                <li>SocialTush Marketing will review the refund request within a reasonable time frame and assess its validity based on the provided evidence.</li>
                <li>If the refund request is approved, SocialTush Marketing will initiate the refund process within 15 business days.</li>
                <li>The refund will be processed using the same payment method used for the initial purchase, unless otherwise mutually agreed upon.</li>
              </ol>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground uppercase tracking-wider">5. Dispute Resolution:</h3>
              <p>
                In the event of a dispute regarding a refund request, SocialTush Marketing and the client will engage in a good-faith negotiation process to reach a fair resolution. If a mutually agreeable resolution cannot be achieved, either party may seek legal remedies available under Kenyan law.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground uppercase tracking-wider">6. Amendment of Refund Policy:</h3>
              <p>SocialTush Marketing reserves the right to amend or modify this refund policy at any time. Any changes made will be effective immediately upon posting the updated policy on our website. It is the client's responsibility to review the refund policy periodically for any updates.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground uppercase tracking-wider">7. Contact Information:</h3>
              <p>
                For any questions, clarifications, or refund requests, please contact our customer support team at <strong>support@socialtush.com</strong>. We are committed to addressing your concerns promptly and efficiently.
              </p>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <p className="font-bold text-foreground italic text-center">
                We appreciate your trust in SocialTush Marketing and remain dedicated to delivering exceptional services that meet your marketing needs around the World.
                This refund policy is effective from date of receiving the services that last for 36Hours, after that the refund will be invalid.
              </p>
              <p className="text-center font-bold text-primary mt-4">SocialTush Marketing Team</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
