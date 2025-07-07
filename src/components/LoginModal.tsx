import React, { useState } from 'react';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-40 ">
      <div className="perspective-1000 w-full max-w-sm">
        <div
          className={`relative w-full h-[455px] border border-[var(--color-border-navbar)] rounded-2xl shadow-2xl bg-white duration-500 transform-style-preserve-3d transition-transform ${isRegister ? 'rotate-y-180' : ''}`}
        >
          {/* Cara Login */}
          <div className="absolute inset-0 p-8 flex flex-col justify-center backface-hidden">
            <button
              className="absolute top-4 right-4 text-[var(--color-logo-uno)] hover:text-[var(--color-logo-cuatro)] text-xl font-bold focus:outline-none"
              onClick={onClose}
              aria-label="Cerrar"
              style={{lineHeight: '1'}}
            >
              ×
            </button>
            <h2 className="text-3xl font-chloe font-bold mb-6 text-center" style={{ color: 'var(--color-career)' }}>
              Iniciar sesión
            </h2>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="border border-[var(--color-border-navbar)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-career)] text-base placeholder-gray-400"
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="border border-[var(--color-border-navbar)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-career)] text-base placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[var(--color-career)] to-[var(--color-logo-cuatro)] text-white rounded-lg py-2 font-semibold shadow hover:scale-105 transition-transform text-base"
                style={{ boxShadow: '0 2px 8px 0 #fbc6b433' }}
              >
                Iniciar sesión
              </button>
            </form>
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-[var(--color-border-navbar)]" />
              <span className="mx-2 text-[var(--color-logo-tres)] text-sm">o</span>
              <div className="flex-grow h-px bg-[var(--color-border-navbar)]" />
            </div>
            <button
              className="w-full flex items-center justify-center gap-3 border border-[var(--color-logo-uno)] text-[var(--color-logo-uno)] rounded-lg py-2 font-medium hover:bg-[var(--color-career)]/10 transition-colors text-base"
              style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
            >
              <span className="flex items-center justify-center bg-white rounded-full p-1 border border-[var(--color-logo-uno)]">
                <svg className="w-6 h-6" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.1 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.6 0 5 .8 7 2.3l6.4-6.4C33.5 5.1 28.1 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 16.1 19.2 13 24 13c2.6 0 5 .8 7 2.3l6.4-6.4C33.5 5.1 28.1 3 24 3c-7.2 0-13.4 4.1-16.7 10.1z"/><path fill="#FBBC05" d="M24 43c5.7 0 10.5-1.9 14-5.1l-6.5-5.3C29.9 34.9 27.1 36 24 36c-6.1 0-10.7-2.9-11.7-7.5l-7 5.4C7.6 39.1 15.1 43 24 43z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.1 3.2-4.2 5.5-7.7 5.5-4.7 0-8.6-3.8-8.6-8.5s3.9-8.5 8.6-8.5c2.1 0 4 .7 5.5 2.1l6.6-6.6C37.5 7.1 31.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z"/></g></svg>
              </span>
              <span>Iniciar sesión con Google</span>
            </button>
            <div className="mt-4 text-center">
              <a href="#" className="text-sm font-medium text-[var(--color-logo-uno)]" onClick={e => { e.preventDefault(); setIsRegister(true); }}>
                ¿No tienes cuenta? <span className="underline">Regístrate</span>
              </a>
            </div>
          </div>
          {/* Cara Registro */}
          <div className="absolute inset-0 p-8 flex flex-col justify-center backface-hidden rotate-y-180">
            <button
              className="absolute top-4 right-4 text-[var(--color-logo-uno)] hover:text-[var(--color-logo-cuatro)] text-xl font-bold focus:outline-none"
              onClick={onClose}
              aria-label="Cerrar"
              style={{lineHeight: '1'}}
            >
              ×
            </button>
            <h2 className="text-3xl font-chloe font-bold mb-6 text-center" style={{ color: 'var(--color-career)' }}>
              Regístrate
            </h2>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Nombre completo"
                className="border border-[var(--color-border-navbar)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-career)] text-base placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="border border-[var(--color-border-navbar)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-career)] text-base placeholder-gray-400"
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="border border-[var(--color-border-navbar)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-career)] text-base placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[var(--color-career)] to-[var(--color-logo-cuatro)] text-white rounded-lg py-2 font-semibold shadow hover:scale-105 transition-transform text-base"
                style={{ boxShadow: '0 2px 8px 0 #fbc6b433' }}
              >
                Registrarme
              </button>
            </form>
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-[var(--color-border-navbar)]" />
              <span className="mx-2 text-[var(--color-logo-tres)] text-sm">o</span>
              <div className="flex-grow h-px bg-[var(--color-border-navbar)]" />
            </div>
            <button
              className="w-full flex items-center justify-center gap-3 border border-[var(--color-logo-uno)] text-[var(--color-logo-uno)] rounded-lg py-2 font-medium hover:bg-[var(--color-career)]/10 transition-colors text-base"
              style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
            >
              <span className="flex items-center justify-center bg-white rounded-full p-1 border border-[var(--color-logo-uno)]">
                <svg className="w-6 h-6" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.1 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.6 0 5 .8 7 2.3l6.4-6.4C33.5 5.1 28.1 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 16.1 19.2 13 24 13c2.6 0 5 .8 7 2.3l6.4-6.4C33.5 5.1 28.1 3 24 3c-7.2 0-13.4 4.1-16.7 10.1z"/><path fill="#FBBC05" d="M24 43c5.7 0 10.5-1.9 14-5.1l-6.5-5.3C29.9 34.9 27.1 36 24 36c-6.1 0-10.7-2.9-11.7-7.5l-7 5.4C7.6 39.1 15.1 43 24 43z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.1 3.2-4.2 5.5-7.7 5.5-4.7 0-8.6-3.8-8.6-8.5s3.9-8.5 8.6-8.5c2.1 0 4 .7 5.5 2.1l6.6-6.6C37.5 7.1 31.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z"/></g></svg>
              </span>
              <span>Registrarme con Google</span>
            </button>
            <div className="mt-4 text-center">
              <a href="#" className="text-sm font-medium text-[var(--color-logo-uno)]" onClick={e => { e.preventDefault(); setIsRegister(false); }}>
                ¿Ya tienes cuenta? <span className="underline">Inicia sesión</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS para el efecto flip
// Agrega esto a tu archivo global de estilos o tailwind.config.js:
// .perspective-1000 { perspective: 1000px; }
// .rotate-y-180 { transform: rotateY(180deg); }

export default LoginModal; 