import SectionLine from '@/components/ui/icon-line';
import './section-one.css';

function SectionOne() {
    return (
        <article className="section-one">
            <ul className="section-list">
                <li className="section-item">OPÇÃO DE ADQUIRIR{"\n"}AO TÉRMINO</li>
                <SectionLine className="section-line" />
                <li className="section-item">NÃO COMPROMETE{"\n"}O CADASTRO DO BACEN</li>
                <SectionLine className="section-line" />
                <li className="section-item">MENSALIDADES FIXA</li>
                <SectionLine className="section-line" />
                <li className="section-item">SUPORTE{"\n"}ESPECIALIZADO</li>
            </ul>
        </article>
    );
}

export default SectionOne;
