import "./monaco-form.css";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

const ContactForm = () => {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        nome: "",
        email: "",
        telefone: "",
        interesse: "",
        empresa: "",
        site: "",
        contatoPreferido: "email",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("contact.store"), {
            onSuccess: () => {
                reset();
                setSuccessMessage("Formulário enviado com sucesso!");

                // Scroll até a mensagem de sucesso
                setTimeout(() => {
                    const el = document.querySelector(".form-subtitle");
                    if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100);

                // Esconde a mensagem após 15 segundos
                setTimeout(() => setSuccessMessage(null), 10000);
            },
            preserveScroll: true,

        });
    };

    return (
        <div className="contact-form-container">
            <img className="background-image" src="images/form_background.webp" alt="Background" />
            <div className="overlay"></div>
            <div className="contact-form-content">
                <h2 className="form-title">Como podemos lhe atender?</h2>
                <p className="form-subtitle">Deixe seus dados que iremos entrar em contato</p>

                {successMessage && <p className="success-message">{successMessage}</p>}

                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        className="form-input"
                        type="text"
                        name="nome"
                        value={data.nome}
                        onChange={(e) => setData("nome", e.target.value)} placeholder="Nome" />
                    {errors.nome && <p className="error">{errors.nome}</p>}

                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        placeholder="Email" />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <input
                        className="form-input"
                        type="tel"
                        name="telefone"
                        value={data.telefone}
                        onChange={(e) => setData("telefone", e.target.value)}
                        placeholder="Número de telefone" />
                    {errors.telefone && <p className="error">{errors.telefone}</p>}

                    <input
                        className="form-input"
                        type="text"
                        name="interesse"
                        value={data.interesse}
                        onChange={(e) => setData("interesse", e.target.value)}
                        placeholder="Seu interesse" />
                    {errors.interesse && <p className="error">{errors.interesse}</p>}

                    <input
                        className="form-input"
                        type="text"
                        name="empresa"
                        value={data.empresa}
                        onChange={(e) => setData("empresa", e.target.value)}
                        placeholder="Nome da empresa" />
                    {errors.empresa && <p className="error">{errors.empresa}</p>}

                    <input
                        className="form-input"
                        type="url"
                        name="site"
                        value={data.site}
                        onChange={(e) => setData("site", e.target.value)}
                        placeholder="Site" />
                    {errors.site && <p className="error">{errors.site}</p>}

                    <h1 className="form-subtitle">Você prefere ligação ou email?</h1>
                    <select name="contatoPreferido" value={data.contatoPreferido} onChange={(e) => setData("contatoPreferido", e.target.value)}>
                        <option value="email">Email</option>
                        <option value="telefone">Telefone</option>
                    </select>

                    <button type="submit" className={`submit-button ${processing ? "loading" : ""}`} disabled={processing}>
                        {processing ? <span className="spinner" /> : "Receba uma proposta \u27F6"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
