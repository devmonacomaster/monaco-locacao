import SectionLine from '@/components/ui/icon-line';

function SectionOne() {
    return (
        <>
            <div className="w-full h-60 bg-white flex flex-col justify-center items-center">
                <section className="flex flex-row justify-around gap-x-8">
                    <p className="text-black text-2xl font-bold text-center whitespace-pre-line">
                        OPÇÃO DE ADQUIRIR{"\n"}AO TÉRMINO
                    </p>
                    <SectionLine className="h-15" />
                    <p className="text-black text-2xl font-bold text-center whitespace-pre-line">
                        NÃO COMPROMETE{"\n"}O CADASTRO DO BACEN
                    </p>
                    <SectionLine className="h-15" />
                    <div className="flex flex-col justify-center h-full">
                        <p className="text-black text-2xl font-bold text-center self-center">
                            MENSALIDADES FIXA
                        </p>
                    </div>
                    <SectionLine className="h-15" />
                    <p className="text-black text-2xl font-bold text-center whitespace-pre-line">
                        SUPORTE{"\n"}ESPECIALIZADO
                    </p>
                </section>
            </div>
        </>
    );
}

export default SectionOne;
