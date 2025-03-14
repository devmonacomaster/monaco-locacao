<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class LandingPageController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('LandingPage', [
            'title' => 'Página Inicial' // Define o título para essa página
        ]);
    }
}
