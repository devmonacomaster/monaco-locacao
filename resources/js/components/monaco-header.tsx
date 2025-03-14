import React from 'react';
import FacebookIcon from '@/components/ui/facebook-icon';
import InstagramLogo from '@/components/ui/instagram-icon';
import MonacoLogo from '@/components/ui/monaco-icon';
import ArrowHeader from '@/components/ui/arrow-header';

function MonacoHeader() {
    return (
        <>
            <header className="flex justify-between items-center h-20 bg-white w-full px-8">
                <a href={route('home')} aria-label="Página inicial">
                    <MonacoLogo className="h-9" />
                </a>
                <nav>
                    <ul className="flex items-center space-x-6">
                        <li>
                            <a href="https://www.facebook.com/GrupoMonacoOficial/?locale=pt_BR"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FacebookIcon className="h-5" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/monacolocacao/"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer">
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
                            <a href={route('home')} className="text-[#fe6c12] font-bold flex items-center space-x-2">
                                <span>RECEBA UMA PROPOSTA</span>
                                <ArrowHeader className="h-10" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default MonacoHeader;
