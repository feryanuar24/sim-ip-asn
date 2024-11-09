import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Transition } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Index() {
    const { setData, post, processing } = useForm({
        diklat_kepemimpinan: "Belum",
        diklat_fungsional: "Belum",
        diklat_teknis_1: 0,
        diklat_teknis_2: 0,
        seminar_1: "Belum",
        seminar_2: "Belum",
    });

    const [jabatan, setJabatan] = useState("");

    const submit = (e) => {
        e.preventDefault();

        post(route("kompetensi.store"), {
            onSuccess: () => {
                Swal.fire({
                    title: "Berhasil!",
                    text: "Data kompetensi berhasil disubmit.",
                    icon: "success",
                    confirmButtonColor: "#1f2937",
                });
            },
            onError: () => {
                Swal.fire({
                    title: "Gagal!",
                    text: "Terjadi kesalahan saat submit data kompetensi.",
                    icon: "error",
                    confirmButtonColor: "#1f2937",
                });
            },
        });
    };

    return (
        <>
            <Head title="Kompetensi" />

            <AuthenticatedLayout />

            <main className="lg:px-40 px-5 lg:pt-10 pt-5 bg-gray-100 text-gray-800 lg:h-[525px] h-[600px]">
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
                    <div className="flex lg:flex-row flex-col justify-between items-center lg:space-y-0 space-y-3">
                        <div className="lg:space-y-5 space-y-3">
                            <h2 className="font-bold lg:text-5xl text-3xl">
                                Kompetensi
                            </h2>
                            <p className="text-sm lg:text-base">
                                Pilih jabatan Anda saat ini, lalu isi status dan
                                poin JP berdasarkan riwayat pengembangan
                                kompetensi.
                            </p>
                        </div>
                        <select
                            name="jabatan"
                            id="jabatan"
                            defaultValue=""
                            className="h-10 lg:w-60 w-full border border-gray-800 border-opacity-50 rounded-lg focus:outline-blue-800 transition-colors duration-300 ease-in-out cursor-pointer"
                            required
                            onChange={(e) => setJabatan(e.target.value)}
                        >
                            <option value="" disabled>
                                Pilih Jabatan
                            </option>
                            <option value="Jabatan Pimpinan Tinggi">
                                Jabatan Pimpinan Tinggi
                            </option>
                            <option value="Jabatan Administrator">
                                Jabatan Administrator
                            </option>
                            <option value="Jabatan Pengawas">
                                Jabatan Pengawas
                            </option>
                            <option value="Jabatan Fungsional">
                                Jabatan Fungsional
                            </option>
                            <option value="Jabatan Pelaksana">
                                Jabatan Pelaksana
                            </option>
                        </select>
                    </div>
                    <div>
                        <form
                            className="bg-white rounded-lg border-2 border-opacity-50 shadow p-5 space-y-5"
                            onSubmit={submit}
                        >
                            {jabatan === "Jabatan Pimpinan Tinggi" ||
                            jabatan === "Jabatan Administrator" ||
                            jabatan === "Jabatan Pengawas" ? (
                                <div className="space-y-5">
                                    <div className="flex flex-col space-y-1">
                                        <label
                                            className="lg:text-lg text-base overflow-x-auto"
                                            htmlFor="diklat-kepemimpinan"
                                        >
                                            Diklat Kepemimpinan
                                        </label>
                                        <select
                                            name="diklat_kepemimpinan"
                                            id="diklat-kepemimpinan"
                                            defaultValue=""
                                            className="h-10 lg:w-80 w-full border border-gray-800 border-opacity-50 rounded-lg bg-gray-100 focus:outline-blue-800 transition-colors duration-300 ease-in-out cursor-pointer"
                                            required
                                            onChange={(e) =>
                                                setData(
                                                    "diklat_kepemimpinan",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="" disabled>
                                                Pilih Opsi
                                            </option>
                                            <option value="Sudah">Sudah</option>
                                            <option value="Belum">Belum</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <label
                                            className="lg:text-lg text-base overflow-x-auto"
                                            htmlFor="diklat-teknis-1"
                                        >
                                            Diklat Teknis
                                        </label>
                                        <input
                                            type="number"
                                            id="diklat-teknis-1"
                                            name="diklat_teknis_1"
                                            placeholder="Maks 20 JP"
                                            max={20}
                                            className="h-10 lg:w-80 w-full border border-gray-800 border-opacity-50 rounded-lg bg-gray-100 focus:outline-blue-800 transition-colors duration-300 ease-in-out cursor-pointer px-5"
                                            required
                                            onChange={(e) =>
                                                setData(
                                                    "diklat_teknis_1",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <label
                                            className="lg:text-lg text-base overflow-x-auto"
                                            htmlFor="seminar-1"
                                        >
                                            Seminar/Workshop/Magang/Kursus/sejenisnya
                                            dalam 2 tahun terakhir
                                        </label>
                                        <select
                                            name="seminar_1"
                                            id="seminar-1"
                                            defaultValue=""
                                            className="h-10 lg:w-80 w-full border border-gray-800 border-opacity-50 rounded-lg bg-gray-100 focus:outline-blue-800 transition-colors duration-300 ease-in-out cursor-pointer"
                                            required
                                            onChange={(e) =>
                                                setData(
                                                    "seminar_1",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="" disabled>
                                                Pilih Opsi
                                            </option>
                                            <option value="Sudah">Sudah</option>
                                            <option value="Belum">Belum</option>
                                        </select>
                                    </div>
                                </div>
                            ) : jabatan === "Jabatan Fungsional" ? (
                                <div className="space-y-5">
                                    <div className="flex flex-col space-y-1">
                                        <label
                                            className="lg:text-lg text-base overflow-x-auto"
                                            htmlFor="diklat-fungsional"
                                        >
                                            Diklat Fungsional
                                        </label>
                                        <select
                                            name="diklat_fungsional"
                                            id="diklat-fungsional"
                                            defaultValue=""
                                            className="h-10 lg:w-80 w-full border border-gray-800 border-opacity-50 rounded-lg bg-gray-100 focus:outline-blue-800 transition-colors duration-300 ease-in-out cursor-pointer"
                                            required
                                            onChange={(e) =>
                                                setData(
                                                    "diklat_fungsional",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="" disabled>
                                                Pilih Opsi
                                            </option>
                                            <option value="Sudah">Sudah</option>
                                            <option value="Belum">Belum</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <label
                                            className="lg:text-lg text-base overflow-x-auto"
                                            htmlFor="diklat-teknis-1"
                                        >
                                            Diklat Teknis
                                        </label>
                                        <input
                                            type="number"
                                            name="diklat_teknis_1"
                                            placeholder="Maks 20 JP"
                                            max={20}
                                            className="h-10 lg:w-80 w-full border border-gray-800 border-opacity-50 rounded-lg bg-gray-100 focus:outline-blue-800 transition-colors duration-300 ease-in-out cursor-pointer px-5"
                                            required
                                            onChange={(e) =>
                                                setData(
                                                    "diklat_teknis_1",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <label
                                            className="lg:text-lg text-base overflow-x-auto"
                                            htmlFor="seminar-1"
                                        >
                                            Seminar/Workshop/Magang/Kursus/sejenisnya
                                            dalam 2 tahun terakhir
                                        </label>
                                        <select
                                            name="seminar_1"
                                            id="seminar-1"
                                            defaultValue=""
                                            className="h-10 lg:w-80 w-full border border-gray-800 border-opacity-50 rounded-lg bg-gray-100 focus:outline-blue-800 transition-colors duration-300 ease-in-out cursor-pointer"
                                            required
                                            onChange={(e) =>
                                                setData(
                                                    "seminar_1",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="" disabled>
                                                Pilih Opsi
                                            </option>
                                            <option value="Sudah">Sudah</option>
                                            <option value="Belum">Belum</option>
                                        </select>
                                    </div>
                                </div>
                            ) : jabatan === "Jabatan Pelaksana" ? (
                                <div className="space-y-5">
                                    <div className="flex flex-col space-y-1">
                                        <label
                                            className="lg:text-lg text-base overflow-x-auto"
                                            htmlFor="diklat-teknis-2"
                                        >
                                            Diklat Teknis
                                        </label>
                                        <input
                                            type="number"
                                            id="diklat-teknis-2"
                                            name="diklat_teknis_2"
                                            placeholder="Maks 20 JP"
                                            max={20}
                                            className="h-10 lg:w-80 w-full border border-gray-800 border-opacity-50 rounded-lg bg-gray-100 focus:outline-blue-800 transition-colors duration-300 ease-in-out cursor-pointer px-5"
                                            required
                                            onChange={(e) =>
                                                setData(
                                                    "diklat_teknis_2",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <label
                                            className="lg:text-lg text-base overflow-x-auto"
                                            htmlFor="seminar-2"
                                        >
                                            Seminar/Workshop/Magang/Kursus/sejenisnya
                                            dalam 2 tahun terakhir
                                        </label>
                                        <select
                                            name="seminar_2"
                                            id="seminar-2"
                                            defaultValue=""
                                            className="h-10 lg:w-80 w-full border border-gray-800 border-opacity-50 rounded-lg bg-gray-100 focus:outline-blue-800 transition-colors duration-300 ease-in-out cursor-pointer"
                                            required
                                            onChange={(e) =>
                                                setData(
                                                    "seminar_2",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="" disabled>
                                                Pilih Opsi
                                            </option>
                                            <option value="Sudah">Sudah</option>
                                            <option value="Belum">Belum</option>
                                        </select>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-60 flex items-center justify-center">
                                    <p className="bg-red-500 font-bold text-center text-white h-10 lg:w-80 w-full flex items-center justify-center">
                                        Pilih jabatan terlebih dahulu!
                                    </p>
                                </div>
                            )}
                            <div className="flex justify-end">
                                <PrimaryButton disabled={processing}>
                                    Selanjutnya
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </Transition>
            </main>
        </>
    );
}
