import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-display text-4xl text-primary font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.form 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="bg-background rounded-2xl shadow-lg border-2 border-gold p-8 flex flex-col gap-4"
          >
            <input name="name" type="text" required placeholder="Your Name" value={form.name} onChange={handleChange} className="border-b-2 border-gold bg-transparent py-2 px-3 text-dark focus:outline-none focus:border-primary transition" />
            <input name="email" type="email" required placeholder="Your Email" value={form.email} onChange={handleChange} className="border-b-2 border-gold bg-transparent py-2 px-3 text-dark focus:outline-none focus:border-primary transition" />
            <textarea name="message" required placeholder="Your Message" value={form.message} onChange={handleChange} className="border-b-2 border-gold bg-transparent py-2 px-3 text-dark focus:outline-none focus:border-primary transition h-32 resize-none" />
            <button type="submit" className="bg-gold text-dark font-bold py-3 rounded-full mt-4 hover:bg-primary hover:text-gold transition">Send Message</button>
            {submitted && <div className="text-primary font-semibold mt-2">Thank you for contacting us!</div>}
          </motion.form>
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <div className="text-lg text-dark">
              <b>Address:</b> Kolhapur Tourism Office, Main Road, Kolhapur, Maharashtra, India
            </div>
            <div className="text-lg text-dark">
              <b>Email:</b> info@kolhapurtourism.in
            </div>
            <div className="text-lg text-dark">
              <b>Phone:</b> +91 12345 67890
            </div>
            <iframe
              title="Kolhapur Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.019282019994!2d74.2432523148926!3d16.70503498850759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1001e7e7e7e7e%3A0x7e7e7e7e7e7e7e7e!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
