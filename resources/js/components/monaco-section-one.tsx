import SectionLine from '@/components/ui/icon-line';

function SectionOne() {
    return (
        <article className="w-full h-65 bg-white flex flex-col justify-center items-center">
            <ul className="flex flex-row justify-around gap-x-8 list-none">
                <li className="text-black text-2xl font-bold text-center whitespace-pre-line">
                    OPÇÃO DE ADQUIRIR{"\n"}AO TÉRMINO
                </li>
                <SectionLine className="h-15" />
                <li className="text-black text-2xl font-bold text-center whitespace-pre-line">
                    NÃO COMPROMETE{"\n"}O CADASTRO DO BACEN
                </li>
                <SectionLine className="h-15" />
                <li className="flex flex-col justify-center h-full text-black text-2xl font-bold text-center whitespace-pre-line">
                    MENSALIDADES FIXA
                </li>
                <SectionLine className="h-15" />
                <li className="text-black text-2xl font-bold text-center whitespace-pre-line">
                    SUPORTE{"\n"}ESPECIALIZADO
                </li>
            </ul>
        </article>
    );
}

export default SectionOne;
