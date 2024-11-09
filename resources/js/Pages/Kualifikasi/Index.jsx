import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Transition } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function Index() {
    const { setData, post, processing } = useForm({
        pendidikan: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("kualifikasi.store"), {
            onSuccess: () => {
                Swal.fire({
                    title: "Berhasil!",
                    text: "Data kualifikasi berhasil disubmit.",
                    icon: "success",
                    confirmButtonColor: "#1f2937",
                });
            },
            onError: () => {
                Swal.fire({
                    title: "Gagal!",
                    text: "Terjadi kesalahan saat submit data kualfikasi.",
                    icon: "error",
                    confirmButtonColor: "#1f2937",
                });
            },
        });
    };

    return (
        <>
            <Head title="Kualifikasi" />
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
                    <h2 className="font-bold lg:text-5xl text-3xl">
                        Kualifikasi
                    </h2>
                    <p className="text-sm lg:text-base">
                        Pilih jenjang pendidikan formal tertinggi yang telah
                        Anda capai.
                    </p>
                    <form
                        className="bg-white rounded-lg border-2 border-opacity-50 shadow p-5 space-y-5"
                        onSubmit={submit}
                    >
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                name="pendidikan"
                                id="s3"
                                value="S-3"
                                className="lg:w-5 w-3 lg:h-5 h-3 cursor-pointer"
                                required
                                onChange={(e) =>
                                    setData("pendidikan", e.target.value)
                                }
                            />
                            <label
                                htmlFor="S-3"
                                className="lg:text-lg text-base"
                            >
                                S-3
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                name="pendidikan"
                                id="s2"
                                value="S-2"
                                className="lg:w-5 w-3 lg:h-5 h-3 cursor-pointer"
                                required
                                onChange={(e) =>
                                    setData("pendidikan", e.target.value)
                                }
                            />
                            <label
                                htmlFor="S-2"
                                className="lg:text-lg text-base"
                            >
                                S-2
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                name="pendidikan"
                                id="s1-d4"
                                value="S-1/D-IV"
                                className="lg:w-5 w-3 lg:h-5 h-3 cursor-pointer"
                                required
                                onChange={(e) =>
                                    setData("pendidikan", e.target.value)
                                }
                            />
                            <label
                                htmlFor="S-1/D-IV"
                                className="lg:text-lg text-base"
                            >
                                S-1/D-IV
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                name="pendidikan"
                                id="d-3"
                                value="D-III"
                                className="lg:w-5 w-3 lg:h-5 h-3 cursor-pointer"
                                required
                                onChange={(e) =>
                                    setData("pendidikan", e.target.value)
                                }
                            />
                            <label
                                htmlFor="D-III"
                                className="lg:text-lg text-base"
                            >
                                D-III
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                name="pendidikan"
                                id="slta-d2-d1-sederajat"
                                value="SLTA/D-II/D-I/Sederajat"
                                className="lg:w-5 w-3 lg:h-5 h-3 cursor-pointer"
                                required
                                onChange={(e) =>
                                    setData("pendidikan", e.target.value)
                                }
                            />
                            <label
                                htmlFor="SLTA/D-II/D-I/Sederajat"
                                className="lg:text-lg text-base"
                            >
                                SLTA/D-II/D-I/Sederajat
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                name="pendidikan"
                                id="dibawah-slta"
                                value="Dibawah SLTA"
                                className="lg:w-5 w-3 lg:h-5 h-3 cursor-pointer"
                                required
                                onChange={(e) =>
                                    setData("pendidikan", e.target.value)
                                }
                            />
                            <label
                                htmlFor="Dibawah SLTA"
                                className="lg:text-lg text-base"
                            >
                                Dibawah SLTA
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
