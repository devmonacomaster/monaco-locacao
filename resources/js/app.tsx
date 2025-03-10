import '../css/app.css';

// É responsável por inicializar o Inertia.js no React.
import { createInertiaApp } from '@inertiajs/react';
// Ajuda o Laravel a encontrar os componentes das páginas React.
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// API do React 18 para renderizar componentes.
import { createRoot } from 'react-dom/client';
// hook customizado para gerenciar temas (dark/light).
import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`, // Define o título da página
    // Quando o Laravel retorna uma página, o Inertia usa essa função para localizar o componente correto em ./pages/.
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    // Pega o elemento HTML (el), cria a raiz do React e renderiza o componente da página com App {...props}.
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    // Animação de carregamento
    progress: {
        color: '#4B5563',
    },
});

// garante que o tema (claro ou escuro) seja configurado corretamente assim que a aplicação for carregada.
initializeTheme();
