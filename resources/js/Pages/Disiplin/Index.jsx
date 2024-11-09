import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Swal from "sweetalert2";
import { Transition } from "@headlessui/react";

export default function Index() {
    const { setData, post, processing } = useForm({
        hukuman_disiplin: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("disiplin.store"), {
            onSuccess: () => {
                Swal.fire({
                    title: "Berhasil!",
                    text: "Data disiplin berhasil disubmit.",
                    icon: "success",
                    confirmButtonColor: "#1f2937",
                });
            },
            onError: () => {
                Swal.fire({
                    title: "Gagal!",
                    text: "Terjadi kesalahan saat submit data disiplin.",
                    icon: "error",
                    confirmButtonColor: "#1f2937",
                });
            },
        });
    };

    return (
        <>
            <Head title="Disiplin" />

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
                    <h2 className="font-bold lg:text-5xl text-3xl">Disiplin</h2>
                    <p className="text-sm lg:text-base">
                        Pilih riwayat data atau informasi terkait hukuman
                        disiplin yang pernah diterima.
                    </p>
                    <form
                        className="bg-white rounded-lg border-2 border-opacity-50 shadow p-5 lg:space-y-5 space-y-3"
                        onSubmit={submit}
                    >
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="tidak-pernah"
                                name="hukuman_disiplin"
                                value="Tidak Pernah"
                                className="lg:w-5 w-3 lg:h-5 h-3 cursor-pointer"
                                required
                                onChange={(e) =>
                                    setData("hukuman_disiplin", e.target.value)
                                }
                            />
                            <label
                                className="lg:text-lg text-base"
                                htmlFor="tidak-pernah"
                            >
                                Tidak Pernah
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="ringan"
                                name="hukuman_disiplin"
                                value="Ringan"
                                className="lg:w-5 w-3 lg:h-5 h-3 cursor-pointer"
                                required
                                onChange={(e) =>
                                    setData("hukuman_disiplin", e.target.value)
                                }
                            />
                            <label
                                className="lg:text-lg text-base"
                                htmlFor="ringan"
                            >
                                Ringan
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="sedang"
                                name="hukuman_disiplin"
                                value="Sedang"
                                className="lg:w-5 w-3 lg:h-5 h-3 cursor-pointer"
                                required
                                onChange={(e) =>
                                    setData("hukuman_disiplin", e.target.value)
                                }
                            />
                            <label
                                className="lg:text-lg text-base"
                                htmlFor="sedang"
                            >
                                Sedang
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="berat"
                                name="hukuman_disiplin"
                                value="Berat"
                                className="lg:w-5 w-3 lg:h-5 h-3 cursor-pointer"
                                required
                                onChange={(e) =>
                                    setData("hukuman_disiplin", e.target.value)
                                }
                            />
                            <label
                                className="lg:text-lg text-base"
                                htmlFor="berat"
                            >
                                Berat
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
