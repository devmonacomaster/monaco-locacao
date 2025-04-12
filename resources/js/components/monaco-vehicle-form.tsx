import React, { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

interface Vehicle {
    id: number;
    name: string;
    details: string;
    image_path: string;
    type: string;
}

const MonacoVehicleForm: React.FC = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [form, setForm] = useState({
        name: '',
        details: '',
        type: 'veiculo',
        image: null as File | null
    });

    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async () => {
        try {
            const response = await fetch('/vehicles');
            if (!response.ok) throw new Error('Falha ao buscar os veículos');
            const data = await response.json();
            setVehicles(data);
        } catch (error) {
            console.error(error);
            alert('Não foi possível buscar os veículos. Tente novamente mais tarde.');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setForm({
                ...form,
                image: e.target.files[0]
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('details', form.details);
        formData.append('type', form.type);
        if (form.image) formData.append('image', form.image);

        Inertia.post('/vehicles', formData, {
            onSuccess: () => {
                fetchVehicles();
                setForm({ name: '', details: '', type: 'veiculo', image: null });
            },
        });
    };

    const handleDelete = (id: number) => {
        Inertia.delete(`/vehicles/${id}`, {
            onSuccess: () => fetchVehicles(),
        });
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        name="details"
                        value={form.details}
                        onChange={handleInputChange}
                        placeholder="Details"
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <select
                        name="type"
                        value={form.type}
                        onChange={handleInputChange}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="veiculo">Veículo</option>
                        <option value="caminhao">Caminhão</option>
                    </select>
                </div>

                <div className="mb-6">
                    <input
                        type="file"
                        onChange={handleImageChange}
                        required
                        className="w-full text-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >Add Vehicle</button>
                </div>
            </form>

            <div className="mt-8 grid grid-cols-1 gap-4">
                {vehicles.map(vehicle => (
                    <div key={vehicle.id} className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <img src={`/storage/${vehicle.image_path}`} alt={vehicle.name} className="w-20 h-20 object-cover mr-4" />
                            <div>
                                <h3 className="text-lg font-semibold">{vehicle.name}</h3>
                                <p className="text-gray-600">{vehicle.details}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleDelete(vehicle.id)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MonacoVehicleForm;
