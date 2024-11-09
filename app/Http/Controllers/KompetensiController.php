<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class KompetensiController extends Controller
{
    public function index(): Response
    {
        return inertia('Kompetensi/Index');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'diklat_kepemimpinan' => 'required|in:Belum,Sudah',
            'diklat_fungsional' => 'required|in:Belum,Sudah',
            'diklat_teknis_1' => 'required|integer|min:0|max:20',
            'diklat_teknis_2' => 'required|integer|min:0|max:20',
            'seminar_1' => 'required|in:Belum,Sudah',
            'seminar_2' => 'required|in:Belum,Sudah',
        ]);

        $total_bobot = $this->calculateTotalBobot($validated);

        $request->user()->kompetensi()->create(array_merge($validated, ['total_bobot' => $total_bobot]));

        return redirect()->route('kinerja.index');
    }

    private function calculateTotalBobot(array $validated): float
    {
        $total_bobot = 0;

        $total_bobot += ($validated['diklat_kepemimpinan'] === 'Sudah') ? 15 : 0;
        $total_bobot += ($validated['diklat_fungsional'] === 'Sudah') ? 15 : 0;
        $total_bobot += ($validated['diklat_teknis_1'] === 20) ? 15 : ($validated['diklat_teknis_1'] / 20 * 15);
        $total_bobot += ($validated['diklat_teknis_2'] === 20) ? 22.5 : ($validated['diklat_teknis_2'] / 20 * 22.5);
        $total_bobot += ($validated['seminar_1'] === 'Sudah') ? 10 : 0;
        $total_bobot += ($validated['seminar_2'] === 'Sudah') ? 17.5 : 0;

        return $total_bobot;
    }
}
