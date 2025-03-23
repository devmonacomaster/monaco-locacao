<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactFormController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required|string|max:255',
            'email' => 'required|email',
            'telefone' => 'nullable|string',
            'interesse' => 'nullable|string',
            'empresa' => 'nullable|string',
            'site' => 'nullable|url',
            'contatoPreferido' => 'required|in:email,telefone',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Salva no banco
        Contact::create([
            'nome' => $request->nome,
            'email' => $request->email,
            'telefone' => $request->telefone,
            'interesse' => $request->interesse,
            'empresa' => $request->empresa,
            'site' => $request->site,
            'contato_preferido' => $request->contatoPreferido,
        ]);

        return response()->json(['message' => 'Formulário enviado e salvo com sucesso!'], 200);
    }
}
