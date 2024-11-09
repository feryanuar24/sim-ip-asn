import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        try {
            post(route("password.email"), {
                onSuccess: () => {
                    Swal.fire({
                        title: "Berhasil!",
                        text: "Tautan reset kata sandi telah dikirim ke email Anda.",
                        icon: "success",
                        confirmButtonColor: "#1f2937",
                    });
                },
                onError: () => {
                    Swal.fire({
                        title: "Kesalahan!",
                        text: "Terjadi kesalahan saat mengirim tautan reset kata sandi.",
                        icon: "error",
                        confirmButtonColor: "#1f2937",
                    });
                },
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
            <Head title="Lupa Kata Sandi" />

            <section className="inline-flex">
                <img
                    src="/images/gedung-singaperbangsa.png"
                    alt="Gedung Singaperbangsa"
                    className="h-screen hidden lg:block"
                />
                <div className="flex lg:w-[800px] w-full justify-center items-center">
                    <GuestLayout className="lg:w-full w-80">
                        <div className="mb-4 text-sm text-gray-600">
                            Lupa kata sandi Anda? Tidak masalah. Beri tahu kami
                            alamat email Anda dan kami akan mengirimkan tautan
                            reset kata sandi yang memungkinkan Anda memilih yang
                            baru.
                        </div>

                        {status && (
                            <div className="mb-4 text-sm font-medium text-green-600">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit} className="lg:w-[400px] w-full">
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />

                            <div className="mt-4 flex items-center justify-end">
                                <PrimaryButton
                                    className="lg:ms-4 ms-0"
                                    disabled={processing}
                                >
                                    Kirim Tautan Reset Kata Sandi
                                </PrimaryButton>
                            </div>
                        </form>
                    </GuestLayout>
                </div>
            </section>
        </main>
    );
}
