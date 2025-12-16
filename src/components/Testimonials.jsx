import { testimonials } from "../data/data.js";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Clients Say
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-6">
        {testimonials.map((t, index) => (
          <div key={index} className="p-6 bg-white rounded shadow">
            <p className="italic text-gray-600 mb-4">
              "{t.feedback}"
            </p>
            <h4 className="font-semibold">{t.name}</h4>
            <span className="text-sm text-gray-500">
              {t.role}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
