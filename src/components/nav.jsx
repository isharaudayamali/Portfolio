import { useEffect, useRef } from "react";
const navItems = [
  { label: "Home", href: "#home", icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path></svg>' },
  { label: "Experience", href: "#experience", icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M9 4C9 2.89543 9.89543 2 11 2H13C14.1046 2 15 2.89543 15 4V5H19C20.1046 5 21 5.89543 21 7V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7C3 5.89543 3.89543 5 5 5H9V4ZM11 5H13V4H11V5ZM5 7V19H19V7H5ZM7 9H17V11H7V9ZM7 13H14V15H7V13Z"></path></svg>' },
  { label: "Projects", href: "#projects", icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2 3 3 3H10.4142L12.4142 5Z"></path></svg>' },
  { label: "Contact", href: "#contact", icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"></path></svg>' },
];
const Nav = () => {
  const navRef = useRef(null);
  useEffect(() => {
    const nav = navRef.current; let rafId = null;
    const links = nav.querySelectorAll("a[href^='#']");
    const sections = [...document.querySelectorAll("section[id]")];
    const updateActiveLink = () => {
      const marker = window.scrollY + window.innerHeight * 0.3;
      const activeSection = sections.reduce((current, section) => (
        section.offsetTop <= marker ? section : current
      ), sections[0]);
      links.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${activeSection?.id}`
        );
      });
    };
    const updateNav = () => { if (!nav) return; if (window.scrollY > 0) { nav.classList.add("scrolling"); const progress = Math.min(window.scrollY / 1000, 1); const ease = 1 - Math.pow(1 - progress, 4); const maxWidth = window.innerWidth * 0.8; if (window.innerWidth >= 768) nav.style.setProperty("width", `${maxWidth - (maxWidth - 528) * ease}px`); } else { nav.classList.remove("scrolling"); nav.style.setProperty("width", "80%"); } updateActiveLink(); rafId = null; };
    const handleScroll = () => { if (!rafId) rafId = requestAnimationFrame(updateNav); };
    const handleClick = (event) => { const target = event.currentTarget; const element = document.getElementById(target.getAttribute("href").substring(1)); if (element) { event.preventDefault(); element.scrollIntoView({ behavior: "smooth" }); } };
    const anchors = document.querySelectorAll('a[href^="#"]'); anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    updateNav();
    return () => { window.removeEventListener("scroll", handleScroll); window.removeEventListener("resize", handleScroll); anchors.forEach((anchor) => anchor.removeEventListener("click", handleClick)); if (rafId) cancelAnimationFrame(rafId); };
  }, []);
  return <><div className="flex justify-center w-full"><nav ref={navRef} id="main-nav" className="fixed left-1/2 -translate-x-1/2 z-[100] bg-[var(--background)] border border-1 border-transparent backdrop-blur-xl transition-all duration-500 ease-in-out md:top-6 md:bottom-auto bottom-0 w-[80%]"><div className="container mx-auto flex justify-center items-center p-3"><ul className="flex w-full justify-between md:space-x-6 md:justify-center md:gap-12 gap-6">{navItems.map((item) => <li key={item.href} className="flex-1 md:flex-none"><a href={item.href} className="flex flex-col items-center gap-1 text-[var(--white-icon)] transition-colors text-xs md:text-base relative group"><div className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 scale-0 opacity-0 bg-[#A9FF5B] nav-indicator hidden md:block" /><span className="md:hidden flex items-center justify-center w-6 h-6" dangerouslySetInnerHTML={{ __html: item.icon }} /><span className="hidden md:inline-block">{item.label}</span><span className="md:hidden">{item.label}</span></a></li>)}</ul></div></nav></div><style>{`nav { transform: translateX(-50%); background-color: var(--background); transition: background-color 0.3s ease, border-radius 0.3s ease, border-color 0.3s ease; } nav.scrolling { background-color: var(--component-bg); border-color: #ffffff10; border-radius: 9999px; } nav a.active .nav-indicator { transform: translateY(-50%) scale(1); opacity: 1; } nav a.active { color: white !important; } @media (max-width: 767px) { nav { width: 100% !important; transform: translateX(-50%); bottom: 0; left: 50%; position: fixed; border-radius: 1rem 1rem 0 0; border-color: #ffffff10; } nav.scrolling { border-radius: 1rem 1rem 0 0; background-color: var(--component-bg); } body { padding-bottom: 70px; } }`}</style></>;
};
export default Nav;