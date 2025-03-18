import './monaco-section-two.css';

function SectionTwo() {
    return (
        <article className="section-two">
            <div className="section-two-content">
                {/* Texto à esquerda */}
                <div className="section-two-text">
                    <h3>
                        A Mônaco Locação facilita o seu trajeto com eficiência e
                        confiança, movendo o futuro e trazendo mobilidade de maneira
                        fácil e eficaz.
                    </h3>
                </div>

                {/* Título à direita */}
                <h1>
                    SOLUÇÕES <br />
                    <span className="highlight">AUTOMOTIVAS</span> <br />
                    INTELIGENTES
                </h1>
            </div>
        </article>
    );
}

export default SectionTwo;
