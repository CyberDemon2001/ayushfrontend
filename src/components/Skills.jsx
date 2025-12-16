const Skills = ({ skills }) => {
  return (
    <section className="py-32 bg-gray-950">
      {/* 1. Modern Heading Style */}
      <div className="text-center mb-20 max-w-5xl mx-auto px-6">
        <p className="text-sm font-semibold uppercase text-red-500 tracking-[0.25em] mb-3">
          My Toolkit
        </p>
        <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
          Tools & Expertise
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto px-6">
        {skills.map((skill, index) => (
          <span
            key={index}
            /* Modern, bold tag style with accent glow */
            className="
              px-8 py-3 
              text-base font-semibold 
              text-white 
              bg-gray-900 
              rounded-lg 
              border border-gray-800 
              transition-all duration-300 
              cursor-pointer
              
              /* Hover Effect: Red Accent Glow */
              hover:bg-gray-800 
              hover:border-red-500
              shadow-lg hover:shadow-red-500/30
            "
          >
            {skill}
          </span>
        ))}
      </div>
      
      {/* Optional: Add a subtle CTA */}
      <div className="text-center mt-16">
        <a 
          href="#contact"
          className="text-gray-400 text-lg hover:text-red-500 transition"
        >
          Have a specific tool requirement? Let me know.
        </a>
      </div>
    </section>
  );
};

export default Skills;