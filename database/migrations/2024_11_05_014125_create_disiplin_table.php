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
        Schema::create('disiplin', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadecascadeOnDelete();
            $table->string('hukuman_disiplin');
            $table->tinyInteger('total_bobot')->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('disiplin');
    }
};
