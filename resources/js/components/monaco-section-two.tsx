import "../../css/components/monaco-section-two.css"

function SectionTwo() {
    return (
        <article className="section-two">
                {/* Texto à esquerda */}
                <div className="section-two-text">
                    <h3>
                        A Mônaco Locação facilita o seu trajeto com eficiência e
                        confiança, movendo o futuro e trazendo mobilidade de maneira
                        fácil e eficaz.
                    </h3>
                </div>

                {/* Título à direita */}
                <div className="section-two-title">
                    <p>SOLUÇÕES</p>
                    <p className="highlight">AUTOMOTIVAS</p>
                    <p>INTELIGENTES</p>
                </div>
        </article>
    );
}

export default SectionTwo;
