import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Transition } from "@headlessui/react";
import { Head, usePage, router } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function Dashboard() {
    const user = usePage().props.auth.user;

    const handleSubmitClick = () => {
        if (user.ip) {
            return Swal.fire({
                title: "Gagal!",
                text: "Anda sudah melakukan submit.",
                icon: "error",
                confirmButtonColor: "#1f2937",
            });
        }

        router.get(route("kualifikasi.index"));
    };

    const handleProfileClick = () => {
        if (!user.ip) {
            Swal.fire({
                title: "Gagal!",
                text: "Anda belum melakukan submit.",
                icon: "error",
            });
            router.get(route("kualifikasi.index"));
            return;
        }

        if (!user.nip || !user.position) {
            Swal.fire({
                title: "Gagal!",
                text: "Lengkapi data diri terlebih dahulu.",
                icon: "error",
                confirmButtonColor: "#1f2937",
            });
            router.get(route("profile.edit"));
            return;
        }

        return router.get(route("profile.show"));
    };

    return (
        <>
            <Head title="Dashboard" />

            <AuthenticatedLayout />

            <main className="bg-gray-100 lg:px-40 px-5 space-y-10 lg:h-[700px] h-[1600px]">
                <section className="flex lg:flex-row flex-col lg:py-10 py-5 items-center text-gray-800 lg:space-x-20 space-x-0 border-b border-b-gray-300 space-y-10 lg:space-y-0">
                    <Transition
                        as="div"
                        className="space-y-5"
                        show={true}
                        appear={true}
                        enter="transition ease-out duration-1000"
                        enterFrom="opacity-0 -translate-x-80"
                        enterTo="opacity-100 translate-x-0"
                        leave="transition ease-in duration-1000"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 -translate-x-80"
                    >
                        <h1 className="lg:text-7xl text-5xl font-bold">
                            SIM IP ASN
                        </h1>
                        <p className="text-justify lg:text-base text-sm">
                            Sistem ini memberikan gambaran profesionalitas{" "}
                            <span className="bg-yellow-500 font-bold px-1">
                                ASN BerAKHLAK
                            </span>{" "}
                            dengan memfasilitasi evaluasi pada aspek
                            kualifikasi, kompetensi, kinerja, dan disiplin.
                        </p>
                    </Transition>
                    <Transition
                        as="img"
                        src="/images/ilustrasi-asn.png"
                        alt="Ilustrasi ASN"
                        className="lg:w-[500px] w-[250px]"
                        show={true}
                        appear={true}
                        enter="transition ease-out duration-1000"
                        enterFrom="opacity-0 translate-x-80"
                        enterTo="opacity-100 translate-x-0"
                        leave="transition ease-in duration-1000"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 translate-x-80"
                    />
                </section>
                <Transition
                    as="section"
                    className={`${
                        user.role === "Admin"
                            ? "flex justify-between items-center lg:flex-row flex-col space-y-10 lg:space-y-0"
                            : "flex flex-col lg:flex-row justify-start items-center lg:space-x-20 space-x-0 lg:space-y-0 space-y-10"
                    }`}
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
                        <img src="/images/documents.png" alt="Ikon Dokumen" />
                        <PrimaryButton onClick={handleSubmitClick}>
                            Submit
                        </PrimaryButton>
                    </div>
                    <div className="bg-white w-52 h-60 rounded-lg shadow flex flex-col justify-between py-5 items-center">
                        <img src="/images/male-user.png" alt="Ikon Profile" />
                        <PrimaryButton onClick={handleProfileClick}>
                            Profil
                        </PrimaryButton>
                    </div>
                    <div className="bg-white w-52 h-60 rounded-lg shadow flex flex-col justify-between py-5 items-center">
                        <img src="/images/info.png" alt="Ikon Info" />
                        <PrimaryButton
                            onClick={() => router.get(route("pelatihan.index"))}
                        >
                            Pelatihan
                        </PrimaryButton>
                    </div>
                    {user.role === "Admin" && (
                        <div className="bg-white w-52 h-60 rounded-lg shadow flex flex-col justify-between py-5 items-center">
                            <img
                                src="/images/database-administrator.png"
                                alt="Ikon Administor Basis Data"
                            />
                            <PrimaryButton
                                onClick={() =>
                                    router.get(route("profile.index"))
                                }
                            >
                                Admin
                            </PrimaryButton>
                        </div>
                    )}
                </Transition>
            </main>
        </>
    );
}
