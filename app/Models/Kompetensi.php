<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Kompetensi extends Model
{
    protected $table = 'kompetensi';

    protected $fillable = ['diklat_kepemimpinan', 'diklat_fungsional', 'diklat_teknis_1', 'diklat_teknis_2', 'seminar_1', 'seminar_2', 'total_bobot'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
