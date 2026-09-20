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
						className="group flex items-center gap-3 pr-14 transition-all duration-300 md:gap-4 md:pr-24"
						aria-hidden={index >= technologies.length}
					>
						<img
							src={`/svg/${technology.slug}.svg`}
							alt={technology.label}
							className="h-9 w-auto object-contain opacity-75 drop-shadow-[0_0_10px_#a476ff33] transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:drop-shadow-[0_0_14px_#a476ff88] md:h-11"
							width="44"
							height="44"
							loading={index < technologies.length ? "eager" : "lazy"}
							decoding="async"
						/>
						<span className="whitespace-nowrap text-lg font-medium text-[var(--white)] md:text-xl">
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
