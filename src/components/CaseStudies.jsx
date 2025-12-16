import { caseStudies } from "../data/data.js";

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Case Studies
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-6">
        {caseStudies.map((item, index) => (
          <div key={index} className="p-6 bg-white rounded shadow">
            <h3 className="font-bold mb-2">{item.brand}</h3>
            <p className="text-green-600 font-semibold">
              {item.result}
            </p>
            <p className="text-gray-600 mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
