<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class KualifikasiController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Kualifikasi/Index');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'pendidikan' => 'required|string',
        ]);

        $totalBobotMapping = [
            'S-3' => 25,
            'S-2' => 20,
            'S-1/D-IV' => 15,
            'D-III' => 10,
            'SLTA/D-II/D-I/Sederajat' => 5,
        ];

        $validated['total_bobot'] = $totalBobotMapping[$validated['pendidikan']] ?? 1;

        $request->user()->kualifikasi()->create($validated);

        return Redirect(route('kompetensi.index'));
    }
}
