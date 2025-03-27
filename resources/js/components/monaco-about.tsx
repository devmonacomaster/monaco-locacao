import "./monaco-about.css";

function AboutUs() {
    return (
        <section className="container-about-us">
            <h1 className="title-about-us">Por que escolher a Mônaco Locação?</h1>

            <img
                src="/images/banner_justify.webp"
                alt="Banner da Mônaco Locação"
                className="image-about-us"
            />

            <section className="about-us-content">
                <article className="section-about-1">
                    <h2 className="about-h2">Soluções premium</h2>
                    <p className="about-p">
                        Opções de locação de veículos de alto padrão para
                        clientes que buscam desempenho e sofisticação.
                    </p>
                </article>

                <article className="section-about-2">
                    <h2 className="about-h2">Abrangência nacional</h2>
                    <p className="about-p">
                        Centros de atendimento distribuídos em todo o país,
                        garantindo suporte completo e acessível.
                    </p>
                </article>

                <article className="section-about-3">
                    <h2 className="about-h2">Frota sob medida</h2>
                    <p className="about-p">
                        Variedade de veículos leves e pesados, adaptados
                        às suas necessidades pessoais e profissionais,
                        garantindo a melhor escolha para cada situação.
                    </p>
                </article>
            </section>

            <div className="button-container">
                <button className="button-about-us"
                    aria-label="Saiba mais sobre a Mônaco Locação">
                    Saiba mais sobre a Mônaco Locação
                </button>
            </div>
        </section>
    );
}

export default AboutUs;
