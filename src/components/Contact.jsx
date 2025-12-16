const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Get In Touch
      </h2>
      <form className="max-w-xl mx-auto px-6 flex flex-col gap-4">
        <input type="text" placeholder="Name" className="border p-3 rounded" />
        <input type="email" placeholder="Email" className="border p-3 rounded" />
        <textarea
  placeholder="Tell me about your business or project..."
  rows="4"
  className="border p-3 rounded"
></textarea>

        <button className="bg-green-600 text-white py-3 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
