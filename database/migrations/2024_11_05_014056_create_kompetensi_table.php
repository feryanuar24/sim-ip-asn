<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kompetensi', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadecascadeOnDelete();
            $table->enum('diklat_kepemimpinan', ['Sudah', 'Belum']);
            $table->enum('diklat_fungsional', ['Sudah', 'Belum']);
            $table->tinyInteger('diklat_teknis_1')->unsigned();
            $table->tinyInteger('diklat_teknis_2')->unsigned();
            $table->enum('seminar_1', ['Sudah', 'Belum']);
            $table->enum('seminar_2', ['Sudah', 'Belum']);
            $table->decimal('total_bobot', 5, 2)->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kompetensi');
    }
};
