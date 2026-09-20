const experiences = [
  {
    period: "Present",
    role: "Operations Officer",
    company: "Central Finance Company PLC",
    description:
      "Managing day-to-day operations, ensuring smooth workflow, and implementing process improvements to enhance efficiency and productivity.",
  },
  {
    period: "Undergraduate (2025-Present)",
    role: "BIT Student",
    company: "University of Colombo School of Computing",
    description:
      "Developing a strong foundation in software engineering, web development, databases, and modern technology stacks.",
  },
  {
    period: "2023-2024",
    role: "HR Intern",
    company: "Kosgoda Vogue Textiles (Pvt) Ltd",
    description:
      "Assisting in the recruitment and onboarding of new employees, managing employee relations, and supporting the HR team in various administrative tasks.",
  },
  {
    period: "2022-2023",
    role: "HR Diploma Student",
    company: "IMBS Green University",
    description:
      "Gaining knowledge and practical skills in human resource management, including talent acquisition, employee engagement, and performance management.",
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
      <div className="relative space-y-8 border-l border-[var(--white-icon-tr)] ml-2 md:ml-0">
        {experiences.map((experience) => (
          <article
            key={`${experience.role}-${experience.company}`}
            className="relative grid grid-cols-1 md:grid-cols-[9rem_1fr] gap-3 md:gap-8 pl-6 md:pl-8"
          >
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--background)] bg-[var(--sec)] shadow-[0_0_0_3px_#a476ff33]" />
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
