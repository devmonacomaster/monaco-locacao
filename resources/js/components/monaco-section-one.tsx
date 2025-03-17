import SectionLine from '@/components/ui/icon-line';

function SectionOne() {
    return (
        <article className="w-full bg-white flex flex-col justify-center items-center p-4">
            <ul className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-x-8 list-none text-center">
                <li className="text-black text-lg md:text-2xl font-bold whitespace-pre-line">
                    OPÇÃO DE ADQUIRIR{"\n"}AO TÉRMINO
                </li>
                <SectionLine className="h-10 md:h-15 hidden md:block" />
                <li className="text-black text-lg md:text-2xl font-bold whitespace-pre-line">
                    NÃO COMPROMETE{"\n"}O CADASTRO DO BACEN
                </li>
                <SectionLine className="h-10 md:h-15 hidden md:block" />
                <li className="text-black text-lg md:text-2xl font-bold whitespace-pre-line">
                    MENSALIDADES FIXA
                </li>
                <SectionLine className="h-10 md:h-15 hidden md:block" />
                <li className="text-black text-lg md:text-2xl font-bold whitespace-pre-line">
                    SUPORTE{"\n"}ESPECIALIZADO
                </li>
            </ul>
        </article>
    );
}

export default SectionOne;
