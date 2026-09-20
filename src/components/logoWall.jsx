const technologies = [
	{ slug: "vue", label: "Vue" },
	{ slug: "react", label: "React" },
	{ slug: "typeScript", label: "TypeScript" },
	{ slug: "tailwindcss", label: "Tailwind CSS" },
	{ slug: "next", label: "Next.js" },
	{ slug: "nodejs", label: "Node.js" },
	{ slug: "expressjs", label: "Express.js" },
	{ slug: "mongodb", label: "MongoDB" },
	{ slug: "springboot", label: "Spring Boot" },
	{ slug: "HTML5", label: "HTML5" },
	{ slug: "CSS3", label: "CSS3" },
	{ slug: "javaScript", label: "JavaScript" },
	{ slug: "git", label: "Git" },
	{ slug: "mysql", label: "MySQL" },
	{ slug: "bash", label: "Bash" },
];

const LogoWall = () => (
	<>
		<div className="relative overflow-x-hidden py-8">
			<div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-[var(--background)] to-transparent" />
			<div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-[var(--background)] to-transparent" />
			<div className="flex w-max animate-scroll will-change-transform">
				{[...technologies, ...technologies].map((technology, index) => (
					<div
						key={`${technology.slug}-${index}`}
						className="group flex items-center gap-2 pr-12 transition-all duration-300 md:pr-20"
						aria-hidden={index >= technologies.length}
					>
						<img
							src={`/svg/${technology.slug}.svg`}
							alt={technology.label}
							className="h-7 w-auto object-contain opacity-60 transition-transform group-hover:scale-110"
							width="30"
							height="30"
							loading={index < technologies.length ? "eager" : "lazy"}
							decoding="async"
						/>
						<span className="whitespace-nowrap text-lg font-medium text-[var(--white-icon)]">
							{technology.label}
						</span>
					</div>
				))}
			</div>
		</div>
		<style>{`@keyframes scroll { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-50%, 0, 0); } } .animate-scroll { animation: scroll 60s linear infinite; } @media (min-width: 768px) { .animate-scroll { animation-duration: 50s; } }`}</style>
	</>
);

export default LogoWall;
