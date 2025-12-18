import React from "react";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-cyan-400/20 bg-slate-950/80 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold tracking-widest text-cyan-400">
          PORTOFOLIO
        </h1>

        <ul className="hidden gap-8 text-sm md:flex">
          <li>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
