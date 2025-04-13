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
    const [form, setForm] = useState<Partial<Vehicle> & { image?: File | null }>({
        name: '',
        details: '',
        type: 'veiculo',
        image: null,
    });
    const [editingId, setEditingId] = useState<number | null>(null);

    const fetchVehicles = async () => {
        const res = await axios.get('/api/vehicles');
        setVehicles(res.data);
    };

    useEffect(() => {
        fetchVehicles();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
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

        // Campos obrigatórios
        if (form.name) formData.append('name', form.name);
        if (form.details) formData.append('details', form.details);
        if (form.type) formData.append('type', form.type);

        // Só adiciona a imagem se tiver nova
        if (form.image instanceof File) {
            formData.append('image', form.image);
        }

        try {
            if (editingId) {
                // PUT com FormData deve ser enviado como POST + _method
                formData.append('_method', 'PUT');
                await axios.post(`/api/vehicles/${editingId}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            } else {
                await axios.post('/api/vehicles', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            }

            resetForm();
            fetchVehicles();
        } catch (err) {
            console.error('Erro ao salvar veículo:', err);
        }
    };

    const handleEdit = (vehicle: Vehicle) => {
        setForm({
            name: vehicle.name,
            details: vehicle.details,
            type: vehicle.type,
            image: null, // limpa campo de imagem (não queremos reusar File antigo)
        });
        setEditingId(vehicle.id);
    };

    const handleDelete = async (id: number) => {
        await axios.delete(`/api/vehicles/${id}`);
        fetchVehicles();
    };

    const resetForm = () => {
        setForm({
            name: '',
            details: '',
            type: 'veiculo',
            image: null,
        });
        setEditingId(null);
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Galeria de Veículos</h2>

            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={form.name || ''}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <textarea
                    name="details"
                    placeholder="Detalhes"
                    value={form.details || ''}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <select
                    name="type"
                    value={form.type || ''}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                >
                    <option value="">Selecione o tipo</option>
                    <option value="veiculo">Veículo</option>
                    <option value="caminhao">Caminhão</option>
                </select>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full"
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    {editingId ? 'Atualizar' : 'Cadastrar'}
                </button>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {vehicles.map((vehicle) => (
                    <div key={vehicle.id} className="border rounded shadow p-4">
                        {vehicle.image_path && (
                            <img
                                src={vehicle.image_path}
                                alt={vehicle.name}
                                className="w-full h-40 object-cover rounded mb-2"
                            />
                        )}
                        <h3 className="text-lg font-semibold">{vehicle.name}</h3>
                        <p className="text-sm text-gray-600">{vehicle.details}</p>
                        <p className="text-xs mt-1 italic">{vehicle.type}</p>
                        <div className="mt-3 flex gap-2">
                            <button
                                onClick={() => handleEdit(vehicle)}
                                className="bg-yellow-500 text-white px-3 py-1 rounded"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => handleDelete(vehicle.id)}
                                className="bg-red-600 text-white px-3 py-1 rounded"
                            >
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
