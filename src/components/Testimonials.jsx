import { Quote,ArrowUpRight } from 'lucide-react';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="py-32 bg-gray-950 border-t border-gray-800">
      {/* 1. Modern Heading Style */}
      <div className="text-center mb-20 max-w-5xl mx-auto px-6">
        <p className="text-sm font-semibold uppercase text-red-500 tracking-[0.25em] mb-3">
          Trust & Authority
        </p>
        <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
          What Clients Say
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            // Modern Card Styling: rounded, lifted hover
            className="group p-8 bg-gray-900 rounded-xl border border-gray-800 transition-all duration-300 transform hover:border-red-500 hover:shadow-2xl"
          >
            {/* Quote Icon */}
            <Quote className="w-8 h-8 text-red-500 mb-4 opacity-75 group-hover:opacity-100 transition" />
            
            {/* Feedback/Quote Text: Larger and more emphasized */}
            <p className="italic text-gray-300 mb-6 text-xl leading-relaxed">
              "{t.feedback}"
            </p>
            
            <div className="pt-4 border-t border-gray-700">
                {/* Client Name */}
                <h4 className="font-bold text-white text-lg">{t.name}</h4>
                {/* Client Role - Highlighted in accent color */}
                <span className="text-base text-red-500 font-medium">
                  {t.role}
                </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Optional: CTA for Review Sites */}
      <div className="text-center mt-16">
        <a
          href="#reviews" // Link to a LinkedIn endorsement section or review site
          className="inline-flex items-center text-gray-400 hover:text-red-500 transition"
        >
          View More Endorsements
          <ArrowUpRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Testimonials;