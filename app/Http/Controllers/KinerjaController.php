<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class KinerjaController extends Controller
{
    public function index(): Response
    {
        return inertia('Kinerja/Index');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'hasil_penilaian' => 'required|string',
        ]);

        $totalBobotMapping = [
            'Sangat Baik' => 30,
            'Baik' => 25,
            'Cukup' => 15,
            'Kurang' => 5,
        ];

        $validated['total_bobot'] = $totalBobotMapping[$validated['hasil_penilaian']] ?? 1;

        $request->user()->kinerja()->create($validated);

        return redirect()->route('disiplin.index');
    }
}
