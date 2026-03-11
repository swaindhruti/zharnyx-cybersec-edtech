export function PrivacyContent() {
  return (
    <section className="bg-[#050505] font-sans py-[80px] px-6 min-h-[500px]">
      <div className="container mx-auto max-w-[800px] text-[#f2f2f2] text-[15px] leading-relaxed space-y-[48px]">
        
        {/* Section 1 */}
        <div className="space-y-[16px]">
          <h2 className="text-[20px] font-bold text-[#ffffff]">1. Introduction</h2>
          <p className="text-[#a3a3a3]">
            Zharnyx Cybersecurity Academy ("Zharnyx", "we", "us") is committed to protecting the privacy of our students, visitors,
            and users in compliance with the Digital Personal Data Protection (DPDP) Act, 2023 of India.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-[16px]">
          <h2 className="text-[20px] font-bold text-[#ffffff]">2. Data We Collect</h2>
          <ul className="list-disc pl-[24px] space-y-[8px] text-[#a3a3a3]">
            <li>Personal information: Name, email, phone number, city</li>
            <li>Student portal data: Login credentials, course progress, submissions</li>
            <li>Payment information: Processed through secure third-party gateways</li>
            <li>Communication data: Messages via contact form or WhatsApp</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="space-y-[16px]">
          <h2 className="text-[20px] font-bold text-[#ffffff]">3. How We Use Data</h2>
          <p className="text-[#a3a3a3]">
            We use collected data for enrollment processing, course delivery, placement support, communication about programs,
            and improving our services. GST data is processed as required by Indian tax law.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-[16px]">
          <h2 className="text-[20px] font-bold text-[#ffffff]">4. Third-Party Services</h2>
          <p className="text-[#a3a3a3]">
            We use third-party services for payment processing and video hosting. These providers have their own privacy policies
            and we ensure they comply with applicable data protection standards.
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-[16px]">
          <h2 className="text-[20px] font-bold text-[#ffffff]">5. Student Consent</h2>
          <p className="text-[#a3a3a3]">
            By enrolling in our programs, students consent to the collection and processing of their personal data as described in
            this policy. Students may request data access, correction, or deletion by contacting us.
          </p>
        </div>

        {/* Section 6 */}
        <div className="space-y-[16px]">
          <h2 className="text-[20px] font-bold text-[#ffffff]">6. Contact</h2>
          <p className="text-[#a3a3a3]">
            For data-related requests, contact us at hello@zharnyx.com or through our enrollment form.
          </p>
        </div>

      </div>
    </section>
  );
}
