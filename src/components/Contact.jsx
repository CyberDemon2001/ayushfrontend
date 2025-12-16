import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'; // Icons for contact info

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gray-950 border-t border-gray-800">
      {/* 1. Modern Heading Style */}
      <div className="text-center mb-16 max-w-5xl mx-auto px-6">
        <p className="text-sm font-semibold uppercase text-red-500 tracking-[0.25em] mb-3">
          Get Started
        </p>
        <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
          Let's Work Together
        </h2>
        <p className="max-w-xl mx-auto text-gray-400 mt-4 text-lg">
          Fill out the form or reach out directly to discuss how we can elevate your digital presence.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* === Column 1: Contact Form === */}
        <div className="bg-gray-900 p-8 md:p-10 rounded-xl shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Send a Quick Message</h3>
          <form className="flex flex-col gap-6">
            {/* Input fields updated for clean, dark aesthetic */}
            <input 
              type="text" 
              placeholder="Your Name" 
              className="border border-gray-700 bg-gray-950 p-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 text-white placeholder-gray-500 transition duration-300" 
            />
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="border border-gray-700 bg-gray-950 p-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 text-white placeholder-gray-500 transition duration-300" 
            />
            {/* Textarea for Project Details */}
            <textarea
              placeholder="Tell me about your business or project needs..."
              rows="5"
              className="border border-gray-700 bg-gray-950 p-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 text-white placeholder-gray-500 transition duration-300 resize-none"
            ></textarea>

            {/* Button consistent with Hero section */}
            <button 
              type="submit"
              className="mt-4 inline-flex items-center justify-center text-black bg-white px-10 py-4 text-lg font-bold rounded-xl shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-[1.01]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* === Column 2: Direct Contact Info (Sleek List) === */}
        <div className="flex flex-col justify-center space-y-8 p-4">
          <h3 className="text-2xl font-bold text-white border-b border-gray-700 pb-3 mb-4">Direct Contact</h3>

          <ContactItem icon={Phone} label="Phone" value="+63 (967) 245-9345" link="tel:+639672459345" />
          <ContactItem icon={Mail} label="Email" value="chrisalyn.tabiolo1@gmail.com" link="mailto:chrisalyn.tabiolo1@gmail.com" />
          <ContactItem icon={Linkedin} label="LinkedIn" value="/in/chrisalyn-tabiolo" link="https://linkedin.com/in/chrisalyn-tabiolo" />
          <ContactItem icon={MapPin} label="Location" value="Based in the Philippines" />
          
        </div>
      </div>
    </section>
  );
};

// Helper component for cleaner list items
const ContactItem = ({ icon: Icon, label, value, link }) => (
  <div className="flex items-start space-x-4">
    <Icon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
    <div>
      <p className="text-sm font-semibold uppercase text-gray-500">{label}</p>
      {link ? (
        <a 
          href={link} 
          className="text-lg font-medium text-white hover:text-red-500 transition"
          target={label === 'LinkedIn' ? '_blank' : '_self'}
          rel="noopener noreferrer"
        >
          {value}
        </a>
      ) : (
        <p className="text-lg font-medium text-white">{value}</p>
      )}
    </div>
  </div>
);

export default Contact;