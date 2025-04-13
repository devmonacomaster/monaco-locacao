// resources/js/components/VehicleGallery.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Vehicle = {
    id: number;
    name: string;
    details: string;
    image_path: string;
    type: 'veiculo' | 'caminhao';
};

const VehicleGallery = () => {

    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [form, setForm] = useState<Partial<Vehicle> & { image?: File }>({});
    const [editingId, setEditingId] = useState<number | null>(null);
    const fetchVehicles = async () => {
        const res = await axios.get('/api/vehicles');
        setVehicles(res.data);
    };

    useEffect(() => {
        fetchVehicles();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, value, files } = target;

        if (name === 'image' && files?.length) {
            setForm((prev) => ({ ...prev, image: files[0] }));
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();

        Object.entries(form).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                if (value instanceof File) {
                    formData.append(key, value);
                } else {
                    formData.append(key, String(value));
                }
            }
        });

        if (editingId) {
            await axios.post(`/api/vehicles/${editingId}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
        } else {
            await axios.post('/api/vehicles', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
        }

        setForm({});
        setEditingId(null);
        fetchVehicles();
    };

    const handleEdit = (v: Vehicle) => {
        setForm({ ...v });
        setEditingId(v.id);
    };

    const handleDelete = async (id: number) => {
        await axios.delete(`/api/vehicles/${id}`);
        fetchVehicles();
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Galeria de Veículos</h2>

            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <input type="text" name="name" placeholder="Nome" value={form.name || ''} onChange={handleChange} className="w-full border p-2 rounded" />
                <textarea name="details" placeholder="Detalhes" value={form.details || ''} onChange={handleChange} className="w-full border p-2 rounded" />
                <select name="type" value={form.type || ''} onChange={handleChange} className="w-full border p-2 rounded">
                    <option value="">Selecione o tipo</option>
                    <option value="veiculo">Veículo</option>
                    <option value="caminhao">Caminhão</option>
                </select>
                <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    {editingId ? 'Atualizar' : 'Cadastrar'}
                </button>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {vehicles.map((vehicle) => (
                    <div key={vehicle.id} className="border rounded shadow p-4">
                        {vehicle.image_path && (
                            <img src={vehicle.image_path} alt={vehicle.name} className="w-full h-40 object-cover rounded mb-2" />
                        )}
                        <h3 className="text-lg font-semibold">{vehicle.name}</h3>
                        <p className="text-sm text-gray-600">{vehicle.details}</p>
                        <p className="text-xs mt-1 italic">{vehicle.type}</p>
                        <div className="mt-3 flex gap-2">
                            <button onClick={() => handleEdit(vehicle)} className="bg-yellow-500 text-white px-3 py-1 rounded">
                                Editar
                            </button>
                            <button onClick={() => handleDelete(vehicle.id)} className="bg-red-600 text-white px-3 py-1 rounded">
                                Deletar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VehicleGallery;
