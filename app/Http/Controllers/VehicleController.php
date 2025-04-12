<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class VehicleController extends Controller
{
    // Método para listar todos os veículos
    public function index()
    {
        // Busca todos os veículos no banco de dados
        $vehicles = Vehicle::all();
        // Retorna a página com os veículos utilizando Inertia
        return Inertia::render('LandingPage', [
            'vehicles' => $vehicles
        ]);
    }

    // Método para adicionar um novo veículo
    public function store(Request $request)
    {
        // Valida os dados entrantes
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'details' => 'required|string|max:255',
            'type' => 'required|in:veiculo,caminhao',
            'image' => 'required|image|max:2048',
        ]);

        // Armazena a imagem no sistema de arquivos
        $path = $request->file('image')->store('vehicles', 'public');

        // Cria um novo registro no banco
        Vehicle::create([
            'name' => $validated['name'],
            'details' => $validated['details'],
            'type' => $validated['type'],
            'image_path' => $path,
        ]);

        // Retorna para a página anterior com mensagem de sucesso
        return redirect()->back()->with('success', 'Veículo adicionado com sucesso!');
    }

    // Método para deletar um veículo
    public function destroy($id)
    {
        // Encontra o veículo pelo ID
        $vehicle = Vehicle::findOrFail($id);
        // Apaga a imagem no sistema de arquivos
        Storage::disk('public')->delete($vehicle->image_path);
        // Remove o registro do banco de dados
        $vehicle->delete();

        // Retorna para a página anterior com mensagem de sucesso
        return redirect()->back()->with('success', 'Veículo removido com sucesso!');
    }
}
