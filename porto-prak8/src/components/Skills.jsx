import React from "react";

const skills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 75 },
  { name: "JavaScript", level: 70 },
  { name: "React", level: 70 },
  { name: "Tailwind", level: 75 },
  { name: "Git", level: 75 }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900/40 py-24 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-bold text-cyan-400">
          Skills
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl border border-cyan-400/30 p-6"
            >
              {/* Skill Name & Percentage */}
              <div className="mb-3 flex justify-between text-sm">
                <span className="font-medium tracking-wider">
                  {skill.name}
                </span>
                <span className="text-cyan-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                <div
                  className="h-full rounded-full bg-cyan-400 transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
