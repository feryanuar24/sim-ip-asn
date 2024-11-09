import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        try {
            post(route("password.confirm"), {
                onSuccess: () =>
                    Swal.fire({
                        title: "Berhasil!",
                        text: "Kata sandi berhasil dikonfirmasi.",
                        icon: "success",
                        confirmButtonColor: "#1f2937",
                    }),
                onError: () =>
                    Swal.fire({
                        title: "Gagal!",
                        text: "Kata sandi gagal dikonfirmasi.",
                        icon: "error",
                        confirmButtonColor: "#1f2937",
                    }),
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
            <Head title="Konfirmasi Kata Sandi" />
            <section className="inline-flex">
                <img
                    src="/images/gedung-singaperbangsa.png"
                    alt="Gedung Singaperbangsa"
                    className="h-screen hidden lg:block"
                />
                <div className="flex lg:w-[800px] w-full justify-center items-center">
                    <GuestLayout>
                        <div className="mb-4 text-sm text-gray-600">
                            Ini adalah area aman dari aplikasi. Silakan
                            konfirmasi kata sandi Anda sebelum melanjutkan.
                        </div>

                        <form onSubmit={submit} className="lg:w-[400px] w-60">
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

                            <div className="mt-4 flex items-center justify-end">
                                <PrimaryButton
                                    className="ms-4"
                                    disabled={processing}
                                >
                                    Konfirmasi
                                </PrimaryButton>
                            </div>
                        </form>
                    </GuestLayout>
                </div>
            </section>
        </main>
    );
}
