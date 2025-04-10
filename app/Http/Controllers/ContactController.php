<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Exibe a página do painel com os contatos.
     */
    public function index(Request $request)
    {
        // Busca todos os contatos ordenados por data de criação (mais recentes primeiro)
        $contacts = Contact::latest()->get();

        // Retorna os dados via Inertia.js para o Dashboard
        return Inertia::render('Dashboard', [
            'contacts' => $contacts
        ]);
    }

    /**
     * Retorna os contatos via API (JSON).
     */
    public function apiIndex()
    {
        return response()->json(Contact::latest()->get(), 200);
    }
}
