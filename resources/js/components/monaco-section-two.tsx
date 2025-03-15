function SectionTwo() {
    return (
        <article className="w-full h-55 bg-white flex items-center justify-center p-8">
            <div className="w-full max-w-[60%] flex justify-between items-center">
                {/* Texto à esquerda */}
                <div className="max-w-[55%]">
                    <h3 className="text-black font-medium text-2xl text-left">
                        A Mônaco Locação facilita o seu trajeto com eficiência e
                        confiança, movendo o futuro e trazendo mobilidade de maneira
                        fácil e eficaz.
                    </h3>
                </div>

                {/* Título à direita */}
                <h1 className="text-5xl font-black text-black text-right">
                    SOLUÇÕES <br />
                    <span className="text-teal-900">AUTOMOTIVAS</span> <br />
                    INTELIGENTES
                </h1>
            </div>
        </article>
    );
}

export default SectionTwo;
