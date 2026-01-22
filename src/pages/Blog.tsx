import React, { useState } from "react";
import LinkedInEmbed from "../features/components/LinkedInEmbed";
import { useEffect } from "react";
import { getLinkedinPosts } from "../features/utils/getLinkedinPosts";

const Blog: React.FC = () => {
  const [remoteLinkedin, setRemoteLinkedin] = useState<{ url: string; title?: string }[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    (async () => {
      const posts = await getLinkedinPosts();
      if (posts.length) setRemoteLinkedin(posts);
    })();
  }, []);

  // Auto-refresh desactivado: se actualiza únicamente al cargar la página o manualmente desde el panel admin.

  const combinedLinkedin = remoteLinkedin;

  return (
    <section className="w-full flex flex-col items-center gap-8 py-10 px-6">
      <div className="max-w-6xl w-full">
        {/* Título ocultado por solicitud */}

        {/* Panel de feed remoto ocultado por solicitud */}

        <div className="space-y-8">
          {/* Encabezado ocultado por simplicidad: solo tarjetas */}
          {combinedLinkedin.slice(0, visibleCount).map((p, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4">
              {p.title && <h3 className="text-lg font-semibold mb-3">{p.title}</h3>}
              <LinkedInEmbed url={p.url} />
              <div className="mt-2 text-sm">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ver en LinkedIn</a>
              </div>
            </div>
          ))}
        </div>
        {combinedLinkedin.length > visibleCount && (
          <div className="flex justify-center mt-6">
            <button
              className="px-4 py-2 bg-gray-900 text-white rounded-lg"
              onClick={() => setVisibleCount((c) => Math.min(c + 4, combinedLinkedin.length))}
            >Cargar más</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
