function SectionTwo() {
    return (
        <article className="w-full bg-white flex items-center justify-center p-6">
            <div className="w-full max-w-[90%] md:max-w-[60%] flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                {/* Texto à esquerda */}
                <div className="max-w-full md:max-w-[55%] mb-6 md:mb-0">
                    <h3 className="text-black font-medium text-lg md:text-2xl">
                        A Mônaco Locação facilita o seu trajeto com eficiência e
                        confiança, movendo o futuro e trazendo mobilidade de maneira
                        fácil e eficaz.
                    </h3>
                </div>

                {/* Título à direita */}
                <h1 className="text-3xl md:text-5xl font-black text-black">
                    SOLUÇÕES <br />
                    <span className="text-teal-900">AUTOMOTIVAS</span> <br />
                    INTELIGENTES
                </h1>
            </div>
        </article>
    );
}

export default SectionTwo;
