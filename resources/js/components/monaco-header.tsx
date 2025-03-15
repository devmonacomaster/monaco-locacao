import React, { useState } from 'react';
import FacebookIcon from '@/components/ui/icon-facebook';
import InstagramLogo from '@/components/ui/icon-instagram';
import MonacoLogo from '@/components/ui/icon-monaco-logo';
import ArrowHeader from '@/components/ui/icon-arrow-header';
import { Menu, X } from 'lucide-react';

function MonacoHeader() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-between items-center h-20 bg-white w-full px-6 md:px-8 relative z-50">
            {/* Logo */}
            <a href={route('home')} aria-label="Página inicial">
                <MonacoLogo className="h-9" />
            </a>

            {/* Botão do menu mobile */}
            <button
                className="md:hidden text-black"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Abrir menu"
            >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>

            {/* Menu mobile */}
            <nav
                className={`fixed top-20 left-0 w-full bg-white p-6 shadow-md md:shadow-none md:p-0 md:static md:w-auto md:flex md:items-center transition-all z-50 ${isOpen ? 'block' : 'hidden'
                    }`}
            >
                <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                    <li>
                        <a
                            href="https://www.facebook.com/GrupoMonacoOficial/?locale=pt_BR"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FacebookIcon className="h-5" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/monacolocacao/"
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InstagramLogo className="h-5" />
                        </a>
                    </li>
                    <li>
                        <a href={route('home')} className="text-black font-bold">
                            Nossos Carros
                        </a>
                    </li>
                    <li>
                        <a href={route('home')} className="text-black font-bold">
                            Sobre a Mônaco Locação
                        </a>
                    </li>
                    <li>
                        <a
                            href={route('home')}
                            className="text-[#fe6c12] font-extrabold flex items-center space-x-2"
                        >
                            <span>RECEBA UMA PROPOSTA</span>
                            <ArrowHeader className="h-10" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MonacoHeader;
