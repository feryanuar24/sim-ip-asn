import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Transition } from "@headlessui/react";
import { Head, router } from "@inertiajs/react";

export default function Index({ ip }) {
    return (
        <>
            <Head title="Hasil Indeks Profesionalitas" />

            <AuthenticatedLayout />

            <main className="lg:px-40 px-5 lg:pt-10 pt-5 bg-gray-100 text-gray-800 h-[525px]">
                <Transition
                    as="section"
                    className="lg:space-y-5 space-y-3"
                    show={true}
                    appear={true}
                    enter="transition ease-out duration-1000"
                    enterFrom="opacity-0 translate-y-full"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-1000"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-full"
                >
                    <h2 className="font-bold lg:text-5xl text-3xl">Hasil</h2>
                    <p className="text-sm lg:text-base">
                        Berikut adalah hasil penilaian Indeks Profesionalitas
                        berdasarkan evaluasi dalam 4 kategori.
                    </p>
                    <div className="bg-white rounded-lg border-2 border-opacity-50 shadow p-5 lg:space-y-5 space-y-3 flex flex-col justify-center items-center text-center">
                        <img
                            src="/images/checkmark.png"
                            alt="Ikon Tanda Centang"
                            className="w-40 lg:w-52"
                        />
                        <p>
                            Anda telah menyelesaikan semua pertanyaan Indeks
                            Profesionalitas dengan skor{" "}
                            <span className="font-semibold bg-yellow-500 px-1">
                                {ip}
                            </span>{" "}
                        </p>
                        <PrimaryButton
                            onClick={() => router.get(route("dashboard"))}
                        >
                            Oke
                        </PrimaryButton>
                    </div>
                </Transition>
            </main>
        </>
    );
}
