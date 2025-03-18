import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import FacebookLogo from '@/components/ui/icon-facebook';
import InstagramLogo from '@/components/ui/icon-instagram';
import MonacoLogo from '@/components/ui/icon-monaco-logo';
import ArrowHeader from '@/components/ui/icon-arrow-header';
import "../../css/components/monaco-header.css";

function MonacoHeader() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">

            <a href={route('home')} aria-label="Página inicial">
                <MonacoLogo className="logo" />
            </a>

            <button
                className="menu-button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>
                {isOpen ? <X className="icon" /> : <Menu className="icon" />}
            </button>

            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <ul className="nav-list">

                    {/* Social Icons como um único <li> */}
                    <li className='social-icons-container'>
                        <a
                            href="https://www.facebook.com/GrupoMonacoOficial/?locale=pt_BR"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FacebookLogo className="social-icon" />
                        </a>
                        <a
                            href="https://www.instagram.com/monacolocacao/"
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InstagramLogo className="social-icon" />
                        </a>
                    </li>

                    <li><a href={route('home')} className="nav-link">Nossos Carros</a></li>
                    <li><a href={route('home')} className="nav-link">Sobre a Mônaco Locação</a></li>

                    <li className='cta-container'>
                        <a href={route('home')} className="cta">
                            <span>RECEBA UMA PROPOSTA</span>
                            <ArrowHeader className="arrow-icon" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MonacoHeader;
