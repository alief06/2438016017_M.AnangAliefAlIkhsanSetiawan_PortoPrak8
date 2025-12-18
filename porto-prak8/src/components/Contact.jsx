import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900/40 py-24 px-6"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="contact-heading"
          className="mb-6 text-3xl font-bold text-cyan-400"
        >
          Contact
        </h2>

        <p className="mb-8 max-w-xl text-slate-400">
          Anda dapat menghubungi saya melalui beberapa platform berikut.
          Jangan ragu untuk berdiskusi atau berkolaborasi 🚀
        </p>

        <ul className="space-y-3 text-slate-400">
          <li>
            <span className="font-medium text-slate-300">Email:</span>{" "}
            <a
              href="mailto:alikhsanalief@gmail.com"
              className="underline hover:text-cyan-300"
            >
              alikhsanalief@gmail.com
            </a>
          </li>

          <li>
            <span className="font-medium text-slate-300">Instagram:</span>{" "}
            <a
              href="https://instagram.com/aliefalikhsan"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cyan-300"
            >
              @aliefalikhsan
            </a>
          </li>

          <li>
            <span className="font-medium text-slate-300">WhatsApp:</span>{" "}
            <a
              href="https://wa.me/6282154242362"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cyan-300"
            >
              0821-5424-2362
            </a>
          </li>

          <li>
            <span className="font-medium text-slate-300">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cyan-300"
            >
              M. Anang Alief Al Ikhsan Setiawan
            </a>
          </li>

          <li>
            <span className="font-medium text-slate-300">TikTok:</span>{" "}
            <a
              href="https://www.tiktok.com/@aliefikhsan06"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cyan-300"
            >
              @aliefikhsan06
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
