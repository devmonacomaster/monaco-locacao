<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class VehicleController extends Controller
{
    public function index()
    {
        $vehicles = Vehicle::all();
        return Inertia::render('LandingPage', [
            'vehicles' => $vehicles
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'details' => 'required|string|max:255',
            'type' => 'required|in:veiculo,caminhao',
            'image' => 'required|image|max:2048',
        ]);

        $path = $request->file('image')->store('vehicles', 'public');

        Vehicle::create([
            'name' => $validated['name'],
            'details' => $validated['details'],
            'type' => $validated['type'],
            'image_path' => $path,
        ]);

        return redirect()->back()->with('success', 'Veículo adicionado com sucesso!');
    }
}
