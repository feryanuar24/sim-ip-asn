<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Disiplin extends Model
{
    protected $table = 'disiplin';

    protected $fillable = ['hukuman_disiplin', 'total_bobot'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
