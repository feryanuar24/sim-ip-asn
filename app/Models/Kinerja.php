<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Kinerja extends Model
{
    protected $table = 'kinerja';

    protected $fillable = ['hasil_penilaian', 'total_bobot'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
