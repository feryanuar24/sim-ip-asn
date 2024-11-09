import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Transition } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function Index() {
    const { setData, post, processing } = useForm({
        hasil_penilaian: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("kinerja.store"), {
            onSuccess: () => {
                Swal.fire({
                    title: "Berhasil!",
                    text: "Data kinerja berhasil disubmit.",
                    icon: "success",
                    confirmButtonColor: "#1f2937",
                });
            },
            onError: () => {
                Swal.fire({
                    title: "Gagal!",
                    text: "Terjadi kesalahan saat submit data kinerja.",
                    icon: "error",
                    confirmButtonColor: "#1f2937",
                });
            },
        });
    };

    return (
        <>
            <Head title="Kinerja" />

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
                    <h2 className="font-bold lg:text-5xl text-3xl">Kinerja</h2>
                    <p className="text-sm lg:text-base">
                        Pilih nilai hasil penilaian kinerja yang mencakup
                        Sasaran Kinerja Pegawai (SKP) dan Perilaku Kerja Pegawai
                        (PKP).
                    </p>
                    <form
                        className="bg-white rounded-lg border-2 border-opacity-50 shadow p-5 lg:space-y-5 space-y-3"
                        onSubmit={submit}
                    >
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="sangat-baik"
                                name="hasil_penilaian"
                                value="Sangat Baik"
                                className="lg:w-5 w-3 lg:h-5 h-3 cursor-pointer"
                                required
                                onChange={(e) =>
                                    setData("hasil_penilaian", e.target.value)
                                }
                            />
                            <label
                                className="lg:text-lg text-base"
                                htmlFor="sangat-baik"
                            >
                                91-100 (Sangat Baik)
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="baik"
                                name="hasil_penilaian"
                                value="Baik"
                                className="lg:w-5 w-3 lg:h-5 h-3 cursor-pointer"
                                required
                                onChange={(e) =>
                                    setData("hasil_penilaian", e.target.value)
                                }
                            />
                            <label
                                className="lg:text-lg text-base"
                                htmlFor="baik"
                            >
                                76-90 (Baik)
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="cukup"
                                name="hasil_penilaian"
                                value="Cukup"
                                className="lg:w-5 w-3 lg:h-5 h-3 cursor-pointer"
                                required
                                onChange={(e) =>
                                    setData("hasil_penilaian", e.target.value)
                                }
                            />
                            <label
                                className="lg:text-lg text-base"
                                htmlFor="cukup"
                            >
                                61-75 (Cukup)
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="kurang"
                                name="hasil_penilaian"
                                value="Kurang"
                                className="lg:w-5 w-3 lg:h-5 h-3 cursor-pointer"
                                required
                                onChange={(e) =>
                                    setData("hasil_penilaian", e.target.value)
                                }
                            />
                            <label
                                className="lg:text-lg text-base"
                                htmlFor="kurang"
                            >
                                51-60 (Kurang)
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="buruk"
                                name="hasil_penilaian"
                                value="Buruk"
                                className="lg:w-5 w-3 lg:h-5 h-3 cursor-pointer"
                                required
                                onChange={(e) =>
                                    setData("hasil_penilaian", e.target.value)
                                }
                            />
                            <label
                                className="lg:text-lg text-base"
                                htmlFor="buruk"
                            >
                                Buruk (50 ke bawah)
                            </label>
                        </div>
                        <div className="flex justify-end">
                            <PrimaryButton disabled={processing}>
                                Selanjutnya
                            </PrimaryButton>
                        </div>
                    </form>
                </Transition>
            </main>
        </>
    );
}
