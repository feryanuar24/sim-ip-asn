import PrimaryButton from "@/Components/PrimaryButton";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        try {
            post(route("verification.send"), {
                onSuccess: () => {
                    Swal.fire({
                        title: "Berhasil!",
                        text: "Tautan verifikasi baru telah dikirim ke alamat email Anda.",
                        icon: "success",
                        confirmButtonColor: "#1f2937",
                    });
                },
                onError: () => {
                    Swal.fire({
                        title: "Kesalahan!",
                        text: "Terjadi kesalahan saat mengirim tautan verifikasi.",
                        icon: "error",
                        confirmButtonColor: "#1f2937",
                    });
                },
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
            <Head title="Verifikasi Email" />

            <section className="inline-flex">
                <img
                    src="/images/gedung-singaperbangsa.png"
                    alt="Gedung Singaperbangsa"
                    className="h-screen hidden lg:block"
                />
                <div className="flex lg:w-[800px] w-full justify-center items-center">
                    <GuestLayout className="lg:w-full w-80">
                        <div className="mb-4 text-sm text-gray-600">
                            Terima kasih telah mendaftar! Sebelum memulai,
                            dapatkah Anda memverifikasi alamat email Anda dengan
                            mengklik tautan yang baru saja kami kirimkan ke
                            email Anda? Jika Anda tidak menerima email tersebut,
                            kami dengan senang hati akan mengirimkan yang baru.
                        </div>

                        {status === "verification-link-sent" && (
                            <div className="mb-4 text-sm font-medium text-green-600">
                                Tautan verifikasi baru telah dikirim ke alamat
                                email yang Anda berikan saat pendaftaran.
                            </div>
                        )}

                        <form onSubmit={submit} className="w-[400px]">
                            <div className="mt-4 flex items-center justify-between">
                                <PrimaryButton disabled={processing}>
                                    Kirim Ulang Email Verifikasi
                                </PrimaryButton>

                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Keluar
                                </Link>
                            </div>
                        </form>
                    </GuestLayout>
                </div>
            </section>
        </main>
    );
}
