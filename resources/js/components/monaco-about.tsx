import "../../css/components/monaco-about.css";

function AboutUs() {
    return (
        <section className="container-about-us">
            <header className="title-about-us">
                <h1>Por que escolher a Mônaco Locação?</h1>
            </header>

            <img
                src="/images/banner_justify.webp"
                alt="Banner da Mônaco Locação"
                className="image-about-us"
            />

            <div className="about-us-content">
                <article className="section-about-us">
                    <h2 className="about-us-title">Soluções premium</h2>
                    <p className="about-us-text">
                        Opções de locação de veículos de alto padrão para
                        clientes que buscam desempenho e sofisticação.
                    </p>
                </article>

                <article className="section-about-us">
                    <h2 className="about-us-title">Abrangência nacional</h2>
                    <p className="about-us-text">
                        Centros de atendimento distribuídos em todo o país,
                        garantindo suporte completo e acessível.
                    </p>
                </article>

                <article className="section-about-us">
                    <h2 className="about-us-title">Frota sob medida</h2>
                    <p className="about-us-text">
                        Variedade de veículos leves e pesados, adaptados às
                        suas necessidades pessoais e profissionais, garantindo
                        a melhor escolha para cada situação.
                    </p>
                </article>
            </div>
            <div className="button-container">
                <button className="button-about-us">
                    Saiba mais sobre a Mônaco Locação
                </button>
            </div>
        </section>
    );
}

export default AboutUs;
