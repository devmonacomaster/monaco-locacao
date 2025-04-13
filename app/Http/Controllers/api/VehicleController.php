<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class VehicleController extends Controller
{
    public function index()
    {
        return Vehicle::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'details' => 'required|string',
            'type' => 'required|in:veiculo,caminhao',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('public/vehicles');
            $data['image_path'] = Storage::url($path);
        }

        return Vehicle::create($data);
    }

    public function update(Request $request, Vehicle $vehicle)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'details' => 'required|string',
            'type' => 'required|in:veiculo,caminhao',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($vehicle->image_path) {
                $oldPath = str_replace('/storage/', 'public/', $vehicle->image_path);
                Storage::delete($oldPath);
            }
            $path = $request->file('image')->store('public/vehicles');
            $data['image_path'] = Storage::url($path);
        }

        $vehicle->update($data);
        return $vehicle;
    }

    public function destroy(Vehicle $vehicle)
    {
        if ($vehicle->image_path) {
            $path = str_replace('/storage/', 'public/', $vehicle->image_path);
            Storage::delete($path);
        }

        $vehicle->delete();
        return response()->noContent();
    }
}
