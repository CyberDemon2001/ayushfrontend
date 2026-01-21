const Hero = () => {
  return (
    // Full viewport height, deep black background, centered content
    <section className="min-h-screen flex items-center justify-center bg-gray-950 text-center px-4 md:px-8">
      <div className="max-w-6xl mx-auto py-24">
        <h1 className="text-8xl sm:text-9xl lg:text-10xl xl:text-12xl font-black uppercase tracking-tighter leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
          DIGITAL
          <br />
          MARKETING
          <br />
          PORTFOLIO
        </h1>

        {/* Updated secondary text: clearer and more direct */}
        <p className="max-w-3xl mx-auto text-gray-400 text-xl md:text-2xl font-light mb-16 px-4">
          Full spectrum of Digital Marketing solutions to aspiring and established brands. Create and implement effective strategies that boost sales and engagement.
        </p>

        {/* Modern Button Group */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href="#contact"
            className="inline-flex items-center justify-center text-black bg-white px-10 py-4 text-lg font-bold rounded-xl shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-[1.02]"
          >
            Let's Talk
          </a>
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center text-gray-200 border border-gray-700 px-10 py-4 text-lg font-medium rounded-xl hover:border-white hover:text-white transition-all duration-300"
          >
            View Cases
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;