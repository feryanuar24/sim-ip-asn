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
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedBigInteger('nip')->nullable()->after('name');
            $table->string('position')->nullable()->after('nip');
            $table->enum('role', ['ASN', 'Admin'])->nullable()->after('position');
            $table->decimal('ip', 5, 2)->nullable()->after('role');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('nip');
            $table->dropColumn('position');
            $table->dropColumn('role');
            $table->dropColumn('ip');
        });
    }
};
