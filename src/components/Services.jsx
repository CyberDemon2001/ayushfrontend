import { services } from "../data/data.js";

const Services = () => {
  return (
    <section id="services" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Services I Offer
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 shadow rounded hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
