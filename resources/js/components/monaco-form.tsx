import { useState } from "react";
import "../../css/components/monaco-form.css";

interface FormDataState {
    nome: string;
    email: string;
    telefone: string;
    interesse: string;
    empresa: string;
    site: string;
    contatoPreferido: "email" | "telefone";
}

// Definição do tipo de erro esperado
interface FormErrors {
    [key: string]: string[];
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormDataState>({
        nome: "",
        email: "",
        telefone: "",
        interesse: "",
        empresa: "",
        site: "",
        contatoPreferido: "email",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrors({}); // Limpa os erros antes do envio

        try {
            const response = await fetch("http://localhost:8000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                setErrors(data.errors || {});
                alert("Erro ao enviar formulário!");
                return;
            }

            alert("Formulário enviado com sucesso!");
            setFormData({
                nome: "",
                email: "",
                telefone: "",
                interesse: "",
                empresa: "",
                site: "",
                contatoPreferido: "email",
            });

        } catch (error) {
            console.error("Erro ao enviar formulário:", error);
            alert("Erro ao enviar o formulário. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-form-container">
            <h2>Como podemos lhe atender?</h2>
            <p className="form-subtitle">Deixe seus dados que iremos entrar em contato</p>

            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Nome:
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
                    {errors.nome && <p className="error">{errors.nome[0]}</p>}
                </label>

                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    {errors.email && <p className="error">{errors.email[0]}</p>}
                </label>

                <label>
                    Número de telefone:
                    <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />
                    {errors.telefone && <p className="error">{errors.telefone[0]}</p>}
                </label>

                <label>
                    Seu interesse:
                    <input type="text" name="interesse" value={formData.interesse} onChange={handleChange} />
                    {errors.interesse && <p className="error">{errors.interesse[0]}</p>}
                </label>

                <label>
                    Nome da empresa:
                    <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} />
                    {errors.empresa && <p className="error">{errors.empresa[0]}</p>}
                </label>

                <label>
                    Site:
                    <input type="url" name="site" value={formData.site} onChange={handleChange} />
                    {errors.site && <p className="error">{errors.site[0]}</p>}
                </label>

                <p className="form-subtitle">Você prefere ligação ou email?</p>
                <label>
                    <select name="contatoPreferido" value={formData.contatoPreferido} onChange={handleChange}>
                        <option value="email">Email</option>
                        <option value="telefone">Telefone</option>
                    </select>
                </label>

                <button type="submit" className="submit-button" disabled={loading}>
                    {loading ? "Enviando..." : "Receba uma proposta"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
