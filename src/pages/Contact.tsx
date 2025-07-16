import React, { useState } from "react";
import contacUs from "../assets/image/Contact us-rafiki.svg"

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validateEmail = (email: string) =>
  /^\S+@\S+\.\S+$/.test(email);

const Contact: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!validateEmail(form.email)) newErrors.email = "Invalid email";
    if (!form.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center py-10 px-4 bg-white">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 font-quicksand text-[var(--color-logo-cuatro)]">
          ¿Tienes dudas? ¡Contáctanos!
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Estamos aquí para ayudarte. Completa el formulario o usa los medios de contacto.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Formulario */}
          <form
            className="flex-1 bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 border border-[var(--color-logo-tres)]"
            onSubmit={handleSubmit}
            noValidate
          >
            <label className="font-semibold">Nombre completo *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`p-2 rounded border ${errors.name ? "border-red-400" : "border-gray-300"}`}
              placeholder="Tu nombre"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

            <label className="font-semibold">Correo electrónico *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`p-2 rounded border ${errors.email ? "border-red-400" : "border-gray-300"}`}
              placeholder="tucorreo@email.com"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

            <label className="font-semibold">Asunto</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="p-2 rounded border border-gray-300"
              placeholder="Asunto (opcional)"
            />

            <label className="font-semibold">Mensaje *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className={`p-2 rounded border ${errors.message ? "border-red-400" : "border-gray-300"}`}
              placeholder="Escribe tu mensaje"
              rows={4}
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

            <button
              type="submit"
              className="mt-2 bg-[var(--color-logo-cuatro)] text-white font-bold py-2 rounded hover:bg-[var(--color-logo-tres)] transition-colors"
            >
              Enviar
            </button>
            {submitted && (
              <span className="text-green-600 text-sm mt-2">¡Mensaje enviado correctamente!</span>
            )}
          </form>

          {/* Info de contacto y redes */}
          <div className="flex-1 flex flex-col gap-6 justify-between items-center md:items-start ">
            <div className="bg-white rounded-2xl p-6 border border-r-8 border-b-8 border-[var(--color-logo-cuatro)] w-full flex flex-col gap-2">
              <h2 className="font-bold mb-2 text-lg text-[var(--color-logo-cuatro)]">Información de contacto</h2>
              <div className="flex items-center gap-2">
                <svg className="text-[var(--color-logo-cuatro)]" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M21 8V7l-3 2-2-2-2 2-2-2-2 2-2-2-3 2v1l3-2 2 2 2-2 2 2 2-2 3 2z"/><path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8.5l9 5.25 9-5.25z"/></svg>
                <span className="text-sm">Email: <a href="mailto:soporte@careerinsights.com" className="text-[var(--color-logo-cuatro)] underline">soporte@careerinsights.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="text-[var(--color-logo-cuatro)]" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.35.27 2.67.76 3.88a1 1 0 0 1-.21 1.11l-2.2 2.2z"/></svg>
                <span className="text-sm">Teléfono: <a href="tel:+34123456789" className="text-[var(--color-logo-cuatro)] underline">+34 123 456 789</a></span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="text-[var(--color-logo-cuatro)]" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6 0 1.31.42 2.52 1.13 3.5C8.48 15.36 10.18 16 12 16s3.52-.64 4.87-1.5A5.978 5.978 0 0 0 18 12c0-3.31-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>
                <span className="text-sm">Ubicación: Madrid, España</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-md transition-colors flex items-center justify-center  w-15 h-15" aria-label="LinkedIn">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              </a>
              <a href="#" className="bg-black hover:bg-gray-800 text-white p-3 rounded-full shadow-md transition-colors flex items-center justify-center w-15 h-15" aria-label="TikTok">
                {/* TikTok SVG oficial */}
                <svg width="30" height="30"  fill="currentColor" viewBox="0 0 48 48" className="pe-1 w-30"><path d="M41.5 15.5c-3.6 0-6.5-2.9-6.5-6.5h-5.5v25.5c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.3 0 .7 0 1 .1v-5.1c-.3 0-.7-.1-1-.1-5 0-9 4-9 9s4 9 9 9 9-4 9-9V21.2c1.8 1.1 3.9 1.8 6.1 1.8h1.4v-7.5h-1.4z"/></svg>
              </a>
              <a href="mailto:soporte@careerinsights.com" className="bg-pink-400 hover:bg-pink-500 text-white p-3 rounded-full shadow-md transition-colors flex items-center justify-center  w-15 h-15" aria-label="Email">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.2-7.065h22.4l-11.2 7.065zm-12-8.065v14h24v-14h-24zm22 2.236v9.764h-20v-9.764l10 6.299 10-6.299z"/></svg>
              </a>
            </div>
            <div className="hidden md:block mt-8 w-full">
              {/* Ilustración decorativa, reemplaza el src por la imagen de Storyset que prefieras */}
              <img src={contacUs} alt="Ilustración contacto" className="w-100  max-w-xs mx-auto" />
            </div>
          </div>
        </div>
        {/* Ilustración en mobile */}
        <div className="block md:hidden mt-8 w-full">
          <img src={contacUs} alt="Ilustración contacto" className="w-full max-w-xs mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Contact; 