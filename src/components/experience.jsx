const experiences = [
  {
    period: "Present",
    role: "Web Developer",
    company: "Independent Projects",
    description:
      "Building responsive web experiences and full-stack applications with modern JavaScript, React, Java, and Spring Boot.",
  },
  {
    period: "Undergraduate",
    role: "Computer Science Student",
    company: "University of Colombo School of Computing",
    description:
      "Developing a strong foundation in software engineering, web development, databases, and modern technology stacks.",
  },
];

const Experience = () => (
  <section
    id="experience"
    className="py-12 border-t border-[#ffffff10] text-[var(--white)]"
  >
    <div className="max-w-5xl mx-auto">
      <h2 className="text-lg text-[var(--sec)] mb-2 shiny-sec">My journey</h2>
      <h3 className="text-4xl md:text-5xl font-medium mb-8">Experience</h3>
      <div className="space-y-6">
        {experiences.map((experience) => (
          <article
            key={`${experience.role}-${experience.company}`}
            className="grid grid-cols-1 md:grid-cols-[9rem_1fr] gap-3 md:gap-8 border-l border-[var(--white-icon-tr)] pl-5 md:pl-6"
          >
            <p className="text-sm text-[var(--sec)] pt-1">{experience.period}</p>
            <div>
              <h4 className="text-2xl font-semibold">{experience.role}</h4>
              <p className="mt-1 text-[var(--white-icon)]">{experience.company}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-[var(--white-icon)]">
                {experience.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
