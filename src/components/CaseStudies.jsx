import { ArrowUpRight, Megaphone, Zap, BarChart3 } from 'lucide-react';

const CaseStudies = ({ caseStudies }) => {
  // Function to determine an icon based on a hypothetical category field
  const getIcon = (category) => {
    switch (category) {
      case 'Performance Marketing':
        return Megaphone;
      case 'SEO':
        return BarChart3;
      default:
        return Zap;
    }
  };

  return (
    <section id="case-studies" className="py-32 bg-gray-950">
      {/* 1. Modern Heading Style */}
      <div className="text-center mb-20 max-w-5xl mx-auto px-6">
        <p className="text-sm font-semibold uppercase text-red-500 tracking-[0.25em] mb-3">
          Proof of Work
        </p>
        <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
          Client Success Stories
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {caseStudies.map((item, index) => {
          const IconComponent = getIcon(item.category); // Use the function to get the icon

          return (
            // Modern Card Design
            <a
              key={index}
              href={`#case-study-${index}`} // Link to a detail page or modal
              className="group block p-8 bg-gray-900 rounded-2xl border border-gray-800 transition-all duration-300 transform hover:border-red-500 hover:shadow-2xl hover:scale-[1.01]"
            >
              <div className="flex items-center justify-between mb-4">
                <IconComponent className="w-6 h-6 text-red-500" />
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-red-500 transition" />
              </div>
              
              {/* Highlight the main result/impact */}
              <p className="text-2xl font-extrabold text-white mb-3 leading-snug">
                {item.result}
              </p>

              {/* Brand and Description */}
              <h3 className="text-lg font-semibold text-gray-400 mb-4">
                Client: <span className="text-white font-bold">{item.brand}</span>
              </h3>
              
              <p className="text-gray-500 text-sm line-clamp-3">
                {item.desc}
              </p>
              
            </a>
          );
        })}
      </div>
      
      {/* CTA Button */}
      <div className="text-center mt-20">
        <a
          href="#contact"
          className="inline-flex items-center text-white border border-gray-700 px-10 py-4 text-lg font-medium rounded-xl hover:border-white hover:text-white transition-all duration-300"
        >
          Request Full Case Study Deck
        </a>
      </div>
    </section>
  );
};

export default CaseStudies;