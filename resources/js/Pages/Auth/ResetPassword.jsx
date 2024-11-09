import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        try {
            post(route("password.store"), {
                onSuccess: () => {
                    Swal.fire({
                        title: "Berhasil!",
                        text: "Kata sandi Anda berhasil direset.",
                        icon: "success",
                        confirmButtonColor: "#1f2937",
                    });
                },
                onError: () => {
                    Swal.fire({
                        title: "Gagal!",
                        text: "Terjadi kesalahan saat mereset kata sandi.",
                        icon: "error",
                        confirmButtonColor: "#1f2937",
                    });
                },
                onFinish: () => reset("password", "password_confirmation"),
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Kesalahan!",
                text: "Terjadi kesalahan pada server.",
                confirmButtonColor: "#1f2937",
            });
        }
    };

    return (
        <main className="bg-gray-100 w-full flex justify-center">
            <Head title="Reset Password" />

            <section className="inline-flex">
                <img
                    src="/images/gedung-singaperbangsa.png"
                    alt="Gedung Singaperbangsa"
                    className="h-screen hidden lg:block"
                />
                <div className="flex lg:w-[800px] w-full justify-center items-center">
                    <GuestLayout>
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
                                    autoComplete="new-password"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    value="Konfirmasi Kata Sandi"
                                />

                                <TextInput
                                    type="password"
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4 flex items-center justify-end">
                                <PrimaryButton
                                    className="ms-4"
                                    disabled={processing}
                                >
                                    Reset Kata Sandi
                                </PrimaryButton>
                            </div>
                        </form>
                    </GuestLayout>
                </div>
            </section>
        </main>
    );
}