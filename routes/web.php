<?php

use App\Http\Controllers\ContactFormController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Rota da Landing Page
Route::get('/', function () {
    return Inertia::render('LandingPage');
})->name('home');


Route::get('/welcome', function () {
    return Inertia::render('welcome');
})->name('welcome');


Route::post('/contact', [ContactFormController::class, 'store'])->name('contact.store');

// Rotas protegidas por autenticação
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// Importa outras configurações de rotas
require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
