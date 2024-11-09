import { Transition } from "@headlessui/react";
import { router } from "@inertiajs/react";

export default function AuthenticatedLayout() {
    return (
        <header className="bg-blue-800 flex h-20 items-center justify-between lg:px-40 px-5 shadow">
            <Transition
                as="div"
                className="flex items-center justify-between w-full"
                show={true}
                appear={true}
                enter="transition ease-out duration-1000"
                enterFrom="opacity-0 -translate-y-80"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-1000"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-80"
            >
                <h1
                    className="text-white lg:text-3xl text-xl font-bold hover:text-gray-100 cursor-pointer transition-colors duration-300 ease-in-out"
                    onClick={() => router.get(route("dashboard"))}
                >
                    SIM IP ASN
                </h1>
                <div className="flex space-x-5">
                    <img
                        src="/images/logo-garuda.png"
                        alt="Logo Garuda"
                        className="lg:w-10 w-8 h-max"
                    />
                    <img
                        src="/images/logo-jabar.png"
                        alt="Logo Jawa Barat"
                        className="lg:w-10 w-8 h-max"
                    />
                    <img
                        src="/images/logo-karawang.png"
                        alt="Logo Karawang"
                        className="lg:w-8 w-6 h-max"
                    />
                </div>
            </Transition>
        </header>
    );
}
