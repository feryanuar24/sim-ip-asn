import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import {
    useGoogleReCaptcha,
    GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
import Swal from "sweetalert2";

function LoginPage({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
        recaptcha_token: "",
    });

    const { executeRecaptcha } = useGoogleReCaptcha();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const recaptchaToken = await executeRecaptcha("register");

            setData("recaptcha_token", recaptchaToken);

            post(route("login"), {
                onSuccess: () => {
                    Swal.fire({
                        title: "Berhasil!",
                        text: "Anda berhasil masuk.",
                        icon: "success",
                        confirmButtonColor: "#1f2937",
                    });
                },
                onError: () => {
                    Swal.fire({
                        title: "Gagal!",
                        text: "Terjadi kesalahan saat masuk.",
                        icon: "error",
                        confirmButtonColor: "#1f2937",
                    });
                },
                onFinish: () => reset("password"),
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: "Kesalahan!",
                text: "Terjadi kesalahan pada server.",
                icon: "error",
                confirmButtonColor: "#1f2937",
            });
        }
    };

    return (
        <main className="bg-gray-100 w-full flex justify-center">
            <Head title="Masuk" />

            <section className="inline-flex">
                <img
                    src="/images/gedung-singaperbangsa.png"
                    alt="Gedung Singaperbangsa"
                    className="h-screen hidden lg:block"
                />
                <div className="flex lg:w-[800px] w-full justify-center items-center">
                    <GuestLayout>
                        {status && (
                            <div className="mb-4 text-sm font-medium text-green-600">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit} className="lg:w-[400px] w-60">
                            <div>
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password"
                                    value="Kata Sandi"
                                />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4 block">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    <span className="ms-2 text-sm text-gray-600">
                                        Ingat saya
                                    </span>
                                </label>
                            </div>

                            <div className="mt-4 flex items-center justify-end">
                                {canResetPassword && (
                                    <Link
                                        href={route("password.request")}
                                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        Lupa kata sandi Anda?
                                    </Link>
                                )}

                                <PrimaryButton
                                    className="ms-4"
                                    disabled={processing}
                                >
                                    Masuk
                                </PrimaryButton>
                            </div>
                        </form>
                    </GuestLayout>
                </div>
            </section>
        </main>
    );
}

export default function Login({ status, canResetPassword }) {
    const reCaptchaKey = import.meta.env.VITE_NOCAPTCHA_SITEKEY;

    return (
        <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
            <LoginPage status={status} canResetPassword={canResetPassword} />
        </GoogleReCaptchaProvider>
    );
}
