import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import FacebookLogo from '@/components/ui/icon-facebook';
import InstagramLogo from '@/components/ui/icon-instagram';
import MonacoLogo from '@/components/ui/icon-monaco-logo';
import ArrowHeader from '@/components/ui/icon-arrow-header';
import './monaco-header.css';

function MonacoHeader() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            {/* Logo */}
            <a href={route('home')} aria-label="Página inicial">
                <MonacoLogo className="logo" />
            </a>

            {/* Botão do menu mobile */}
            <button className="menu-button" onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu">
                {isOpen ? <X className="icon" /> : <Menu className="icon" />}
            </button>

            {/* Menu mobile */}
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <ul className="nav-list">
                    {/* Redes sociais - Links diretamente no componente */}
                    <div className='social-icons-container'>
                        <li>
                            <a
                                href="https://www.facebook.com/GrupoMonacoOficial/?locale=pt_BR"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FacebookLogo className="social-icon" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/monacolocacao/"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <InstagramLogo className="social-icon" />
                            </a>
                        </li>
                    </div>
                    {/* Links de navegação */}
                    <li><a href={route('home')} className="nav-link">Nossos Carros</a></li>
                    <li><a href={route('home')} className="nav-link">Sobre a Mônaco Locação</a></li>
                    {/* Call to Action */}
                    <li><a href={route('home')} className="cta"><span>RECEBA UMA PROPOSTA</span><ArrowHeader className="arrow-icon" /></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default MonacoHeader;
