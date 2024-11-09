import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children, className }) {
    return (
        <div
            className={`flex min-h-screen flex-col items-center bg-gray-100 pt-6 justify-center sm:pt-0 ${className}`}
        >
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-auto fill-current text-gray-500" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}