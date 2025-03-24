import "../../css/components/monaco-footer.css";
import FacebookLogo from '@/components/ui/icon-facebook';
import InstagramLogo from '@/components/ui/icon-instagram';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-top-links">
                <h2>Voltar ao início {'\u02C4'}</h2>
                <div className="footer-contact">
                    <h2 className="text-highlight">CONTATO</h2>
                    <h2><u>Fale Conosco</u></h2>
                </div>
            </div>
            <div className="follow-us-text">
                <p>Siga-nos nas <br />ossas redes sociais</p>
            </div>
            <div className="social-media">
                <a
                    href="https://www.facebook.com/GrupoMonacoOficial/?locale=pt_BR"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FacebookLogo className="social-icon-footer" />
                </a>
                <a
                    href="https://www.instagram.com/monacolocacao/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramLogo className="social-icon" />
                </a>
            </div>
            <div className="footer-bottom-links">
                <p>legal</p>
                <p>Privacy</p>
                <p>Etiqueta de Segurança</p>
                <p>Ofertas</p>
            </div>
            <div className="copyright">
                <p>Copyright © 2025 Mônaco Locação.</p>
            </div>
        </div>
    );
}

export default Footer;
