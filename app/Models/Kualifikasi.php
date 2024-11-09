<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Kualifikasi extends Model
{
    protected $table = 'kualifikasi';

    protected $fillable = ['pendidikan', 'total_bobot'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
