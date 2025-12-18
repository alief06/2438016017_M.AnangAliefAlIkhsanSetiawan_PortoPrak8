import React from "react";
import FotoAl from "../assets/fotoal.jpg";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 bg-slate-950">
      <div className="grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">

        {/* Text Section */}
        <div className="text-center md:text-left">
          <p className="mb-2 tracking-widest text-cyan-400">
            MAHASISWA SISTEM INFORMASI
          </p>

          <h1 className="mb-2 text-4xl font-extrabold text-white md:text-6xl">
            M. Anang Alief Al Ikhsan Setiawan
          </h1>

          <p className="mb-4 text-sm font-medium text-slate-300 md:text-base">
            Website Development | Cyber Security Enthusiast
          </p>

          <p className="mb-6 max-w-xl text-slate-400">
            Selamat datang di website pribadi saya! Saya tertarik pada
            pengembangan website modern serta keamanan siber untuk
            membangun solusi digital yang aman dan efektif.
          </p>

          <a
            href="#projects"
            className="inline-block rounded-md border border-cyan-400 px-8 py-3 text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Lihat Proyek
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={FotoAl}
            alt="Foto Profil"
            className="
              w-72 h-72
              md:w-96 md:h-96
              rounded-full
              object-cover
              border-4 border-cyan-400
              shadow-[0_0_40px_rgba(34,211,238,0.6)]
            "
          />
        </div>

      </div>
    </section>
  );
}
