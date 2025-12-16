import { ArrowRight, TrendingUp, Cpu, Lightbulb } from 'lucide-react'; // Icons for visual appeal

const About = () => {
  return (
    // Updated background (assuming parent context is dark/gray-950)
    <section id="about" className="py-32 max-w-6xl mx-auto px-6">
      {/* 1. Modern Heading Style */}
      <div className="text-center mb-20">
        <p className="text-sm font-semibold uppercase text-gray-500 tracking-[0.25em] mb-3">
          My Mission
        </p>
        <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
          A Strategy-First Approach
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12 items-start">
        {/* === COLUMN 1: Main Bio === */}
        <div className="md:col-span-2 text-left space-y-8">
          {/* Main biographical text, emphasized */}
          <p className="text-gray-300 leading-relaxed text-xl border-l-4 border-white pl-4 italic">
            "An Entrepreneurial Marketing graduate who can manage most Digital Marketing aspects of your business. Specializing in **market research**, **trend analysis**, and creating data-driven strategies that turn attention into revenue."
          </p>

          <p className="text-gray-400 leading-relaxed text-lg">
            I plan and deliver content across all primary channels: social media, website, email marketing, and paid advertisements. My goal is to serve as your comprehensive digital partner, ensuring every campaign is not just creative, but also measurable and scalable.
          </p>

          {/* Contact/CTA Block - Cleaned up and focused */}
          <div className="pt-6">
            <a
              href="#contact"
              className="inline-flex items-center text-white font-bold text-lg group hover:text-gray-400 transition"
            >
              Let's Discuss Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* === COLUMN 2: Identity Card & Quote === */}
        <div className="flex flex-col space-y-6">
          {/* Identity Card: Sleek, high contrast */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border-t-4 border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-1">Ayush Rawat</h3>
            <p className="text-md text-red-500 font-semibold uppercase tracking-wider">
              Digital Marketing Specialist
            </p>
            <div className="mt-6 border-t border-gray-700 pt-4">
               <p className="text-gray-400 text-sm">
                 <span className="font-bold text-white">Experience:</span> 5+ Years
               </p>
               <p className="text-gray-400 text-sm">
                 <span className="font-bold text-white">Focus:</span> Strategy & Execution
               </p>
            </div>
          </div>

          <p className="text-gray-500 text-base italic leading-relaxed">
            From strategies to execution to results; I am your creative digital marketing partner that will propel your brand to new heights.
          </p>
        </div>
      </div>

      {/* 2. Key Pillars/Skills Section - Presented as modern cards */}
      <div className="mt-24 pt-12 border-t border-gray-800">
          <h3 className="text-3xl font-bold text-white mb-10 text-center">My Core Strengths</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <PillarCard
              icon={Cpu}
              title="Algorithm Precision"
              description="Mastering platform mechanics and data interpretation to ensure your content wins the organic race."
            />
            <PillarCard
              icon={Lightbulb}
              title="Creative Fix"
              description="Developing innovative content concepts and campaigns that capture attention and resonate with target audiences."
            />
            <PillarCard
              icon={TrendingUp}
              title="Breakthrough Results"
              description="Focusing on measurable KPIs (Key Performance Indicators) to guarantee maximum ROI and sustained growth."
            />
          </div>
      </div>
    </section>
  );
};

// Helper component for the Key Pillars
const PillarCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-900 hover:bg-gray-800/50 p-6 rounded-xl border border-gray-800 transition-all duration-300 transform hover:-translate-y-1">
    <Icon className="w-8 h-8 text-red-500 mb-4" />
    <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
    <p className="text-gray-400 text-base">{description}</p>
  </div>
);

export default About;