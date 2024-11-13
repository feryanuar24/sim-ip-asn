<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;

class ProfileController extends Controller
{
    /**
     * Display the all user's profile information.
     */
    public function index(): Response
    {
        $users = User::all();
        return Inertia::render('Admin/Index', [
            'users' => $users,
        ]);
    }

    /**
     * Display the user's profile information.
     */
    public function show(): Response
    {
        return Inertia::render('Profile/Show');
    }

    /**
     * Display the user's profile form.
     */
    public function edit(): Response
    {
        return Inertia::render('Profile/Edit');
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    /**
     * Submit the user's IP.
     */
    public function submitIP(Request $request): Response
    {
        $request->validate([
            'id' => 'required|exists:users,id',
        ]);

        $user = User::find($request->id);

        $ip = $user->kualifikasi->total_bobot + $user->kompetensi->total_bobot + $user->kinerja->total_bobot + $user->disiplin->total_bobot;

        $user->update([
            'ip' => $ip,
        ]);

        return Inertia::render('Hasil/Index', [
            'ip' => $ip,
        ]);
    }

    /**
     * Reset the user's IP.
     */
    public function resetIP(Request $request): RedirectResponse
    {
        $request->validate([
            'id' => 'required|exists:users,id',
        ]);

        $user = User::find($request->id);

        $user->update([
            'ip' => null,
        ]);

        $user->kualifikasi->delete();
        $user->kompetensi->delete();
        $user->kinerja->delete();
        $user->disiplin->delete();

        return redirect()->route('profile.index');
    }

    /**
     * Change the user's role.
     */
    public function changeRole(Request $request): RedirectResponse
    {
        $request->validate([
            'id' => 'required|exists:users,id',
            'role' => 'required|string|in:ASN,Admin',
        ]);

        $user = User::find($request->id);

        $user->update([
            'role' => $request->role,
        ]);

        return redirect()->route('profile.index');
    }
}
