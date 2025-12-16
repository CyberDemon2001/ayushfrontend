const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gray-50 text-center">
     <h1 className="text-4xl md:text-5xl font-bold mb-4">
  Digital Marketing Enthusiast
  <span className="text-green-600"> Focused on Growth & Visibility</span>
</h1>

<p className="max-w-2xl mx-auto text-gray-600 mb-6">
  SEO • Google Ads • Social Media Marketing • Data-Driven Strategy
</p>

      <div className="flex justify-center gap-4">
        <a
          href="#contact"
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Get Free Consultation
        </a>
        <a
          href="#case-studies"
          className="border px-6 py-3 rounded"
        >
          View Results
        </a>
      </div>
    </section>
  );
};

export default Hero;
