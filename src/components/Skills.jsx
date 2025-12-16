import { skills } from "../data/data.js";

const Skills = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Tools & Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 border rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
