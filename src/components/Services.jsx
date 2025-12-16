import { ArrowUpRight, TrendingUp, Search, User, Mail, Zap } from 'lucide-react'; 

const Services = ({ services }) => {
  // Function to return an appropriate icon based on the service title
  const getServiceIcon = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('seo')) return Search;
    if (lowerTitle.includes('performance') || lowerTitle.includes('ads')) return TrendingUp;
    if (lowerTitle.includes('social')) return User;
    if (lowerTitle.includes('email')) return Mail;
    return Zap; // Default icon
  };

  return (
    <section id="services" className="py-32 bg-gray-950">
      {/* 1. Modern Heading Style */}
      <div className="text-center mb-20 max-w-5xl mx-auto px-6">
        <p className="text-sm font-semibold uppercase text-red-500 tracking-[0.25em] mb-3">
          What I Do
        </p>
        <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
          Services I Offer
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {services.map((service, index) => {
          const IconComponent = getServiceIcon(service.title);

          return (
            <div
              key={index}
              // Modern Card Styling: rounded, slight background difference, enhanced hover
              className="group p-8 bg-gray-900 rounded-2xl border border-gray-800 transition-all duration-300 transform hover:border-red-500 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                {/* Icon for visual category */}
                <IconComponent className="w-8 h-8 text-red-500 transition-colors group-hover:text-white" />
                {/* Arrow for indication of action/detail */}
                <ArrowUpRight className="w-6 h-6 text-gray-700 transition-colors group-hover:text-red-500" />
              </div>
              
              {/* Service Title */}
              <h3 className="font-extrabold text-xl mb-3 text-white">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-gray-400 text-base leading-relaxed">
                {service.desc}
              </p>
              
            </div>
          );
        })}
      </div>
      
      {/* CTA Button */}
      <div className="text-center mt-20">
        <a
          href="#contact"
          className="inline-flex items-center text-white border border-red-500 px-10 py-4 text-lg font-medium rounded-xl hover:bg-red-500 hover:text-black transition-all duration-300"
        >
          Start Your Strategy Session
        </a>
      </div>
    </section>
  );
};

export default Services;