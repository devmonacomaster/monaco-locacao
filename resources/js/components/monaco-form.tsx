import { useState } from "react";
import "./monaco-form.css";

interface FormDataState {
    nome: string;
    email: string;
    telefone: string;
    interesse: string;
    empresa: string;
    site: string;
    contatoPreferido: "email" | "telefone";
}

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
        setErrors({});

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
            <img className="background-image" src="images/form_background.webp" alt="Background" />
            <div className="overlay"></div>
            <div className="contact-form-content">
                <div className="form-title">
                    <h2>Como podemos lhe atender?</h2>
                </div>
                <p className="form-subtitle">Deixe seus dados que iremos entrar em contato</p>

                <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Nome" />
                    {errors.nome && <p className="error">{errors.nome[0]}</p>}

                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" />
                    {errors.email && <p className="error">{errors.email[0]}</p>}

                    <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Número de telefone" />
                    {errors.telefone && <p className="error">{errors.telefone[0]}</p>}

                    <input type="text" name="interesse" value={formData.interesse} onChange={handleChange} placeholder="Seu interesse" />
                    {errors.interesse && <p className="error">{errors.interesse[0]}</p>}

                    <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Nome da empresa" />
                    {errors.empresa && <p className="error">{errors.empresa[0]}</p>}

                    <input type="url" name="site" value={formData.site} onChange={handleChange} placeholder="Site" />
                    {errors.site && <p className="error">{errors.site[0]}</p>}
                    <h1 className="form-subtitle">Você prefere ligação ou email?</h1>
                    <select name="contatoPreferido" value={formData.contatoPreferido} onChange={handleChange}>
                        <option value="email">Email</option>
                        <option value="telefone">Telefone</option>
                    </select>
                    <button type="submit" className="submit-button" disabled={loading}>
                        {loading ? "Enviando..." : "Receba uma proposta \u27F6"}
                    </button>
                </form>
            </div>
        </div>

    );
};

export default ContactForm;
