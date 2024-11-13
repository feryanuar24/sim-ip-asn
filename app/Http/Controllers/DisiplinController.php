<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class DisiplinController extends Controller
{
    public function index(): Response
    {
        return inertia('Disiplin/Index');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'hukuman_disiplin' => 'required|string|in:Tidak Pernah,Ringan,Sedang,Berat',
        ]);

        $totalBobotMapping = [
            'Tidak Pernah' => 5,
            'Ringan' => 3,
            'Sedang' => 2,
        ];

        $validated['total_bobot'] = $totalBobotMapping[$validated['hukuman_disiplin']] ?? 1;

        $request->user()->disiplin()->create($validated);

        return redirect()->route('profile.submitIP');
    }
}
