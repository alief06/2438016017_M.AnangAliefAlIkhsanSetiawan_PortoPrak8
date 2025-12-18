import React from "react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl py-24 px-6"
    >
      <h2 className="mb-10 text-3xl font-bold text-cyan-400">
        Proyek & Pengalaman
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Pengembangan Web",
            desc: "Membangun website modern yang responsif dengan fokus pada performa dan pengalaman pengguna."
          },
          {
            title: "Hackathon",
            desc: "Pengalaman berkolaborasi dalam tim untuk menciptakan solusi inovatif dalam waktu terbatas."
          },
          {
            title: "Pengembangan Perangkat Lunak",
            desc: "Mengembangkan aplikasi dan sistem perangkat lunak yang terstruktur, efisien, dan scalable."
          }
        ].map((project, index) => (
          <div
            key={index}
            className="border border-cyan-400/30 p-6 transition hover:scale-105"
          >
            <h3 className="mb-2 font-semibold">
              {project.title}
            </h3>

            <p className="text-sm text-slate-400">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
