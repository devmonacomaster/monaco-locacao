import SectionLine from '@/components/ui/icon-line';

function SectionOne() {
    return (
        <>
            <div className="w-full h-150 bg-white">
                <section className="flex flex-row justify-around">
                    <p className="text-black text-2xl"><b>OPÇÃO DE ADQUIRIR AO TÉRMINO</b></p>
                    <SectionLine className="h-13"/>
                    <p className="text-black text-2xl"><b>NÃO COMPROMETE O CADASTRO DO BACEN</b></p>
                    <SectionLine className="h-13"/>
                    <p className="text-black text-2xl"><b>MENSALIDADES FIXAS</b></p>
                    <SectionLine className="h-13"/>
                    <p className="text-black text-2xl"><b>SUPORTE ESPECIALIZADO</b></p>
                </section>
            </div>
        </>
    );
}

export default SectionOne;
