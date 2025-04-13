import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ConfirmationModal from './ui/ConfirmationModal';

type Vehicle = {
    id: number;
    name: string;
    details: string;
    image_path: string;
    type: 'veiculo' | 'caminhao';
};

type PendingAction = {
    type: 'create' | 'update' | 'delete';
    vehicleId?: number;
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
    const [modalOpen, setModalOpen] = useState(false);
    const [pendingAction, setPendingAction] = useState<PendingAction | null>(null);

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

    const confirmAction = (type: PendingAction['type'], vehicleId?: number) => {
        setPendingAction({ type, vehicleId });
        setModalOpen(true);
    };

    const handleConfirm = async () => {
        if (!pendingAction) return;

        const formData = new FormData();
        if (form.name) formData.append('name', form.name);
        if (form.details) formData.append('details', form.details);
        if (form.type) formData.append('type', form.type);
        if (form.image instanceof File) formData.append('image', form.image);

        try {
            if (pendingAction.type === 'create') {
                await axios.post('/api/vehicles', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            } else if (pendingAction.type === 'update' && editingId) {
                formData.append('_method', 'PUT');
                await axios.post(`/api/vehicles/${editingId}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            } else if (pendingAction.type === 'delete' && pendingAction.vehicleId) {
                await axios.delete(`/api/vehicles/${pendingAction.vehicleId}`);
            }

            resetForm();
            fetchVehicles();
        } catch (err) {
            console.error('Erro ao executar ação:', err);
        } finally {
            setModalOpen(false);
            setPendingAction(null);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        confirmAction(editingId ? 'update' : 'create');
    };

    const handleEdit = (vehicle: Vehicle) => {
        setForm({
            name: vehicle.name,
            details: vehicle.details,
            type: vehicle.type,
            image: null,
        });
        setEditingId(vehicle.id);
    };

    const handleDelete = (id: number) => {
        confirmAction('delete', id);
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
        <div className="p-6 max-w-5xl mx-auto text-gray-900 dark:text-gray-100">
            <h2 className="text-2xl font-bold mb-4">Galeria de Veículos</h2>

            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={form.name || ''}
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
                    required
                />
                <textarea
                    name="details"
                    placeholder="Detalhes"
                    value={form.details || ''}
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
                    required
                />
                <select
                    name="type"
                    value={form.type || ''}
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
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
                    className="w-full text-gray-900 dark:text-gray-100"
                />
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                >
                    {editingId ? 'Atualizar' : 'Cadastrar'}
                </button>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {vehicles.map((vehicle) => (
                    <div
                        key={vehicle.id}
                        className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded shadow p-4 text-gray-900 dark:text-gray-100"
                    >
                        {vehicle.image_path && (
                            <img
                                src={vehicle.image_path}
                                alt={vehicle.name}
                                className="w-full h-40 object-cover rounded mb-2"
                            />
                        )}
                        <h3 className="text-lg font-semibold">{vehicle.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{vehicle.details}</p>
                        <p className="text-xs mt-1 italic text-gray-500 dark:text-gray-400">{vehicle.type}</p>
                        <div className="mt-3 flex gap-2">
                            <button
                                onClick={() => handleEdit(vehicle)}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded transition-colors"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => handleDelete(vehicle.id)}
                                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition-colors"
                            >
                                Deletar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <ConfirmationModal
                isOpen={modalOpen}
                title="Confirmação"
                message={
                    pendingAction?.type === 'delete'
                        ? 'Tem certeza que deseja deletar este veículo?'
                        : pendingAction?.type === 'update'
                            ? 'Deseja realmente atualizar este veículo?'
                            : 'Deseja realmente cadastrar este veículo?'
                }
                onConfirm={handleConfirm}
                onCancel={() => {
                    setModalOpen(false);
                    setPendingAction(null);
                }}
            />
        </div>
    );
};

export default VehicleGallery;
