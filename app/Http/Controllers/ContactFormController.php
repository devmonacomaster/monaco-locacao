<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactFormController extends Controller
{
    public function store(Request $request)
    {
        // Validação dos dados
        $validated = $request->validate([
            'nome' => 'required|string|max:255',
            'email' => 'required|email',
            'telefone' => 'nullable|string',
            'interesse' => 'nullable|string',
            'empresa' => 'nullable|string',
            'site' => 'nullable|url',
            'contatoPreferido' => 'required|in:email,telefone',
        ]);

        // Salva no banco de dados
        Contact::create([
            'nome' => $validated['nome'],
            'email' => $validated['email'],
            'telefone' => $validated['telefone'] ?? null,
            'interesse' => $validated['interesse'] ?? null,
            'empresa' => $validated['empresa'] ?? null,
            'site' => $validated['site'] ?? null,
            'contato_preferido' => $validated['contatoPreferido'],
        ]);

        // Retorna uma mensagem de sucesso para o Inertia.js
        return redirect()->back()->with('success', 'Formulário enviado com sucesso!');
    }
}
