import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl py-24 px-6"
    >
      <h2 className="mb-6 text-3xl font-bold text-cyan-400">
        Tentang Saya
      </h2>

      <div className="max-w-2xl space-y-4 text-slate-400">
        <p>
          Halo! Saya <span className="font-medium text-slate-200">
          M. Anang Alief Al Ikhsan Setiawan</span>, seorang mahasiswa Program
          Studi Sistem Informasi di Universitas Ahmad Dahlan. Saya memiliki
          minat dalam Website Development, Cyber Security, dan Data Analysis,
          serta ketertarikan di bidang jurnalistik dan musik.
        </p>

        <p>
          Selain fokus pada akademik, saya aktif mengikuti berbagai seminar,
          pelatihan, dan bootcamp untuk memperluas wawasan dan keterampilan.
        </p>

        <p className="italic text-slate-300">
          Fun Fact: Saya sangat menikmati belajar hal baru setiap harinya
          dan percaya bahwa teknologi dapat membawa perubahan positif
          dalam kehidupan.
        </p>
      </div>
    </section>
  );
}
