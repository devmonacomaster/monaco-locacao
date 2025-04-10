<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->increments('id'); // Oracle precisa de chave primária simples
            $table->string('name', 100);
            $table->string('category', 50); // veiculos ou caminhoes
            $table->string('details', 255)->nullable();
            $table->string('image_path', 255); // caminho do arquivo (ex: /storage/vehicles/xyz.webp)
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('vehicles');
    }
};
