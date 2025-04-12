import { useState } from 'react';
import { router } from '@inertiajs/react';

export default function VehicleForm() {
    const [form, setForm] = useState({
        name: '',
        details: '',
        type: 'veiculo',
        image: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setForm((prev) => ({ ...prev, image: e.target.files![0] }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', form.name);
        data.append('details', form.details);
        data.append('type', form.type);
        if (form.image) {
            data.append('image', form.image);
        }

        router.post('/vehicles', data);
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data" style={{ margin: '2rem 0' }}>
            <input type="text" name="name" placeholder="Nome" onChange={handleChange} required />
            <input type="text" name="details" placeholder="Detalhes" onChange={handleChange} required />
            <select name="type" onChange={handleChange}>
                <option value="veiculo">Veículo</option>
                <option value="caminhao">Caminhão</option>
            </select>
            <input type="file" name="image" accept="image/*" onChange={handleImageChange} required />
            <button type="submit">Adicionar Veículo</button>
        </form>
    );
}
