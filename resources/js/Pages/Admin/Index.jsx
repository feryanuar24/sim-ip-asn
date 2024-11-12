import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Transition } from "@headlessui/react";
import { Head, router } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function Index({ users }) {
    const handleRoleChange = (e, id) => {
        Swal.fire({
            title: "Apakah Anda yakin?",
            text: "Anda akan mengubah peran pengguna!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#6c757d",
            confirmButtonText: "Ya, ubah!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.post(route("profile.changeRole"), {
                    id: id,
                    role: e.target.value,
                });
                Swal.fire(
                    "Berhasil!",
                    "Peran pengguna telah diubah.",
                    "success",
                    "#1f2937"
                );
            }
        });
    };

    const handleResetIP = (id) => {
        Swal.fire({
            title: "Apakah Anda yakin?",
            text: "Anda akan mereset IP pengguna!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#6c757d",
            confirmButtonText: "Ya, reset!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.post(route("profile.resetIP"), {
                    id: id,
                });
                Swal.fire(
                    "Berhasil!",
                    "IP pengguna telah direset.",
                    "success",
                    "#1f2937"
                );
            }
        });
    };

    return (
        <>
            <Head title="Admin" />

            <AuthenticatedLayout />

            <main className="lg:px-40 px-5 lg:pt-10 pt-5 bg-gray-100 text-gray-800 min-h-screen">
                <Transition
                    className="lg:space-y-5 space-y-3"
                    as="section"
                    show={true}
                    appear={true}
                    enter="transition ease-out duration-1000"
                    enterFrom="opacity-0 translate-y-full"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-1000"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-full"
                >
                    <div className="flex lg:flex-row flex-col space-y-3 lg:space-y-0 justify-between lg:items-center items-start lg:space-x-60 space-x-0">
                        <div className="lg:space-y-5 space-y-3">
                            <h2 className="font-bold text-5xl">Admin</h2>
                            <p className="text-sm lg:text-base">
                                Lihat data pengguna dan lakukan reset nilai
                                Indeks Profesionalitas serta data terkait.
                            </p>
                        </div>
                        <PrimaryButton
                            onClick={() => router.get(route("dashboard"))}
                        >
                            Kembali
                        </PrimaryButton>
                    </div>
                    <div className="overflow-x-auto">
                        <table className=" bg-white rounded-lg overflow-hidden shadow text-gray-800 table-auto text-sm font-semibold w-full">
                            <thead className="bg-blue-800 text-white h-14">
                                <tr>
                                    <th className="py-2 px-4 border-b border-blue-300">
                                        ID
                                    </th>
                                    <th className="py-2 px-4 border-b border-blue-300">
                                        NIP
                                    </th>
                                    <th className="py-2 px-4 border-b border-blue-300">
                                        Nama
                                    </th>
                                    <th className="py-2 px-4 border-b border-blue-300">
                                        Posisi
                                    </th>
                                    <th className="py-2 px-4 border-b border-blue-300">
                                        Email
                                    </th>
                                    <th className="py-2 px-4 border-b border-blue-300">
                                        Role
                                    </th>
                                    <th className="py-2 px-4 border-b border-blue-300">
                                        IP
                                    </th>
                                    <th className="py-2 px-4 border-b border-blue-300">
                                        Reset
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr
                                        key={user.id}
                                        className="hover:bg-blue-50"
                                    >
                                        <td className="text-center py-2 px-4 border-b border-blue-300">
                                            {user.id}
                                        </td>
                                        <td className="text-center py-2 px-4 border-b border-blue-300">
                                            {user.nip || "-"}
                                        </td>

                                        <td className="py-2 px-4 border-b border-blue-300">
                                            {user.name}
                                        </td>

                                        <td className="py-2 px-4 border-b border-blue-300">
                                            {user.position || "-"}
                                        </td>
                                        <td className="py-2 px-4 border-b border-blue-300">
                                            {user.email}
                                        </td>
                                        <td className="text-center py-2 px-4 border-b border-blue-300">
                                            <select
                                                name="role"
                                                id="role"
                                                defaultValue={user.role}
                                                onChange={(e) =>
                                                    handleRoleChange(e, user.id)
                                                }
                                                className="rounded-lg p-2"
                                            >
                                                <option value="" disabled>
                                                    Pilih Opsi
                                                </option>
                                                <option value="Admin">
                                                    Admin
                                                </option>
                                                <option value="ASN">ASN</option>
                                            </select>
                                        </td>
                                        <td className="text-center py-2 px-4 border-b border-blue-300">
                                            {user.ip || "-"}
                                        </td>
                                        <td className="text-center py-2 px-4 border-b border-blue-300">
                                            <button
                                                onClick={() =>
                                                    handleResetIP(user.id)
                                                }
                                                className="bg-red-500 text-white p-2 rounded hover:bg-red-400 transition-colors duration-300 ease-in-out"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Transition>
            </main>
        </>
    );
}
