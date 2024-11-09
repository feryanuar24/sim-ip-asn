<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Symfony\Component\HttpFoundation\Response;

class RecaptchaMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $recaptchaToken = $request->input('recaptcha_token');

        if (!$recaptchaToken) {
            return redirect()->back()->withErrors(['error' => 'Token reCAPTCHA tidak ditemukan']);
        }

        $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret' => config('services.recaptcha.secret'),
            'response' => $recaptchaToken,
        ]);

        $recaptchaResponse = $response->json();

        if (!$recaptchaResponse['success'] || $recaptchaResponse['score'] < 0.5) {
            return redirect()->back()->withErrors(['error' => 'Verifikasi reCAPTCHA gagal']);
        }

        return $next($request);
    }
}
