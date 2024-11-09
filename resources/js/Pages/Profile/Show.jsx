import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Transition } from "@headlessui/react";
import { Head, router, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function Show() {
    const user = usePage().props.auth.user;

    const logout = () => {
        Swal.fire({
            title: "Keluar",
            text: "Apakah Anda yakin ingin keluar?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Ya",
            cancelButtonText: "Tidak",
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#6c757d",
        }).then((result) => {
            if (result.isConfirmed) {
                router.post(route("logout"));
            }
        });
    };
    return (
        <>
            <Head title="Profil" />

            <AuthenticatedLayout />

            <main className="lg:px-40 px-5 lg:pt-10 pt-5 bg-gray-100 text-gray-800 lg:h-[525px] h-[1200px] lg:space-y-5 space-y-3">
                <section className="flex lg:flex-row flex-col lg:space-x-10 space-y-5 items-center border-b border-b-gray-300 pb-5">
                    <Transition
                        as="img"
                        src="/images/male-user.png"
                        alt="Ikon Profile"
                        className="w-40 lg:w-60"
                        show={true}
                        appear={true}
                        enter="transition ease-out duration-1000"
                        enterFrom="opacity-0 -translate-x-80"
                        enterTo="opacity-100 translate-x-0"
                        leave="transition ease-in duration-1000"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 -translate-x-80"
                    />
                    <Transition
                        as="div"
                        className="lg:space-y-5 space-y-3"
                        show={true}
                        appear={true}
                        enter="transition ease-out duration-1000"
                        enterFrom="opacity-0 translate-x-80"
                        enterTo="opacity-100 translate-x-0"
                        leave="transition ease-in duration-1000"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 translate-x-80"
                    >
                        <h2 className="bg-gray-50 lg:w-[800px] w-full h-10 rounded-lg border border-gray-800 flex items-center px-5 border-opacity-50 text-gray-500 font-semibold lg:text-base text-xs">
                            Nama Lengkap :{" "}
                            <span className="font-semibold bg-yellow-500 px-1 text-gray-800 ml-1">
                                {user.name}
                            </span>
                        </h2>
                        <p className="bg-gray-50 lg:w-[800px] w-full h-10 rounded-lg border border-gray-800 flex items-center px-5 border-opacity-50 text-gray-500 font-semibold lg:text-base text-xs">
                            Posisi :{" "}
                            <span className="font-semibold bg-yellow-500 px-1 text-gray-800 ml-1">
                                {user.position}
                            </span>
                        </p>
                        <p className="bg-gray-50 lg:w-[800px] w-full h-10 rounded-lg border border-gray-800 flex items-center px-5 border-opacity-50 text-gray-500 font-semibold lg:text-base text-xs">
                            Indeks Profesionalitas:
                            <span className="font-semibold bg-yellow-500 px-1 text-gray-800 ml-1">
                                {user.ip}
                            </span>
                        </p>
                    </Transition>
                </section>
                <Transition
                    as="section"
                    className="flex lg:flex-row flex-col lg:space-x-20 space-x-0 lg:justify-start justify-center items-center lg:space-y-0 space-y-5"
                    show={true}
                    appear={true}
                    enter="transition ease-out duration-1000"
                    enterFrom="opacity-0 translate-y-80"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-1000"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-80"
                >
                    <div className="bg-white w-52 h-60 rounded-lg shadow flex flex-col justify-between py-5 items-center">
                        <img src="/images/edit-image.png" alt="Ikon Profil" />
                        <PrimaryButton
                            onClick={() => router.get(route("profile.edit"))}
                        >
                            Edit
                        </PrimaryButton>
                    </div>
                    <div className="bg-white w-52 h-60 rounded-lg shadow flex flex-col justify-between py-5 items-center">
                        <img src="/images/info.png" alt="Ikon Info" />
                        <PrimaryButton onClick={() => logout()}>
                            Keluar
                        </PrimaryButton>
                    </div>
                    <div className="bg-white w-52 h-60 rounded-lg shadow flex flex-col justify-between py-5 items-center">
                        <img
                            src="/images/arrow-forward-left.png"
                            alt="Ikon Kembali"
                        />
                        <PrimaryButton
                            onClick={() => router.get(route("dashboard"))}
                        >
                            Kembali
                        </PrimaryButton>
                    </div>
                </Transition>
            </main>
        </>
    );
}
