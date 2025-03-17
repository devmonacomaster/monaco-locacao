import SectionVerticalLine from '@/components/ui/icon-vertical-line';
import './monaco-section-one.css';

function SectionOne() {
    return (
        <article className="section-one">
            <ul className="section-list">
                <li className="section-item">OPÇÃO DE ADQUIRIR{"\n"}AO TÉRMINO</li>
                <SectionVerticalLine className="section-line" />
                <li className="section-item">NÃO COMPROMETE{"\n"}O CADASTRO DO BACEN</li>
                <SectionVerticalLine className="section-line" />
                <li className="section-item">MENSALIDADES FIXA</li>
                <SectionVerticalLine className="section-line" />
                <li className="section-item">SUPORTE{"\n"}ESPECIALIZADO</li>
            </ul>
        </article>
    );
}

export default SectionOne;
