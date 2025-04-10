<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $table = 'contacts';

    protected $fillable = [
        'nome',
        'email',
        'telefone',
        'interesse',
        'empresa',
        'site',
        'contato_preferido',
        'created_at',
        'updated_at'
    ];
}
