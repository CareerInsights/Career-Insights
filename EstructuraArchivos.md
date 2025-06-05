/src
├── assets/                           # Imágenes, logos, íconos, etc.
│
├── components/                       # Componentes compartidos globales
│   ├── ButtonLink.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── NavLink.tsx
│
├── context/                          # Contextos globales
│   └── AuthContext.tsx              # Estado de autenticación (login/logout)
│
├── features/
│   └── chaside/
│       ├── components/              # Componentes específicos de CHASIDE
│       ├── data/                    # Archivos de datos estáticos y configuraciones
│       │   ├── navItems.ts          # Ítems de navegación del navbar
│       │   └── questions.ts         # Preguntas o estructura de test CHASIDE
│       ├── pages/                   # Vistas/páginas relacionadas con esta feature
│       └── types.tsx                # Interfaces y tipos del dominio CHASIDE
│
├── pages/
│   └── Home.tsx                     # Página principal (landing page)
│
├── routes/
│   └── Routes.tsx                   # Definición de rutas SPA
│
├── styles/
│   └── (Tailwind config, index.css, etc.)
│
├── main.tsx                         # Entry point con Context Providers
├── vite-env.d.ts                    # Configuración global de TS
└── index.html                       # HTML base de la app
