<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\DisiplinController;
use App\Http\Controllers\KinerjaController;
use App\Http\Controllers\KompetensiController;
use App\Http\Controllers\KualifikasiController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\RecaptchaMiddleware;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/register', [RegisteredUserController::class, 'store'])
    ->middleware([RecaptchaMiddleware::class]);

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware([RecaptchaMiddleware::class]);

Route::middleware('auth', 'verified')->group(function () {
    Route::get('/submit/kualifikasi', [KualifikasiController::class, 'index'])->name('kualifikasi.index');
    Route::post('/submit/kualifikasi', [KualifikasiController::class, 'store'])->name('kualifikasi.store');

    Route::get('/submit/kompetensi', [KompetensiController::class, 'index'])->name('kompetensi.index');
    Route::post('/submit/kompetensi', [KompetensiController::class, 'store'])->name('kompetensi.store');

    Route::get('/submit/kinerja', [KinerjaController::class, 'index'])->name('kinerja.index');
    Route::post('/submit/kinerja', [KinerjaController::class, 'store'])->name('kinerja.store');

    Route::get('/submit/kinerja', [KinerjaController::class, 'index'])->name('kinerja.index');
    Route::post('/submit/kinerja', [KinerjaController::class, 'store'])->name('kinerja.store');

    Route::get('/submit/disiplin', [DisiplinController::class, 'index'])->name('disiplin.index');
    Route::post('/submit/disiplin', [DisiplinController::class, 'store'])->name('disiplin.store');

    Route::get('/submit/hasil', [ProfileController::class, 'submitIP'])->name('profile.submitIP');

    Route::get('/profile', [ProfileController::class, 'show'])->name('profile.show');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile/edit', [ProfileController::class, 'update'])->name('profile.update');

    Route::get('/admin', [ProfileController::class, 'index'])->name('profile.index');
    Route::patch('/admin/change-role', [ProfileController::class, 'changeRole'])->name('profile.changeRole');
    Route::patch('/admin/reset-ip', [ProfileController::class, 'resetIP'])->name('profile.resetIP');

    Route::get('/pelatihan', function () {
        return Inertia::render('Pelatihan/Index');
    })->name('pelatihan.index');
});

require __DIR__ . '/auth.php';
