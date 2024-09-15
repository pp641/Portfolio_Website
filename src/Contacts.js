import React from 'react';
import SocialLinks from './Social_Links';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Contact Me</h3>
        <p className="mb-4">Feel free to reach out via email or social media.</p>
        <a href="mailto:your-email@example.com" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Send Email (prajjwalpandey641@gmail.com)
        </a>
      </div>
    </section>
  );
};

export default Contact;
