import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Transition } from "@headlessui/react";
import { Head, router } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="Bentuk Pelatihan Non-Klasikal" />

            <AuthenticatedLayout />

            <main className="lg:px-40 px-5 lg:pt-10 pt-5 bg-gray-100 text-gray-800 h-max">
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
                    <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start lg:space-x-60 space-x-0 space-y-3 lg:space-y-0 ">
                        <div className="lg:space-y-5 space-y-3">
                            <h2 className="font-bold lg:text-5xl text-3xl">
                                Bentuk Pelatihan non-Klasikal
                            </h2>
                            <p className="text-sm lg:text-base">
                                Pengembangan kompetensi melalui praktik kerja,
                                pembelajaran sosial, dan pembelajaran fleksibel
                                di luar kelas. Pelatihan non-klasikal mencakup:
                            </p>
                        </div>
                        <PrimaryButton
                            onClick={() => router.get(route("dashboard"))}
                        >
                            Kembali
                        </PrimaryButton>
                    </div>
                    <div className="bg-white rounded-lg shadow overflow-x-auto text-sm font-semibold text-gray-800 overflow-hidden">
                        {/* Start: Head Table */}
                        <div className="grid grid-cols-4 bg-blue-800 text-center p-2 text-white lg:w-full w-[900px]">
                            <div className="col-span-1">Tipe Pelatihan</div>
                            <div className="col-span-1">Kegiatan</div>
                            <div className="col-span-1">Satuan</div>
                            <div className="col-span-1 ">
                                Konversi Jam Pelatihan
                            </div>
                        </div>

                        <div className="grid grid-cols-4 bg-blue-800 text-center p-2 text-white lg:w-full w-[900px]">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="grid grid-cols-2 gap-x-10">
                                <div>Nasional</div>
                                <div>Internasional</div>
                            </div>
                        </div>
                        {/* End: Head Table */}

                        {/* Start: Body Table */}
                        <div className="grid grid-cols-4 border-b p-2 bg-white hover:bg-blue-50 transition-color duration-300 ease-in-out lg:w-full w-[900px]">
                            <div className="col-span-1">
                                Experiential Learning
                            </div>
                            <div className="col-span-1">Magang</div>
                            <div className="col-span-1">Kegiatan</div>
                            <div className="grid grid-cols-2 gap-x-10">
                                <div>
                                    1 kali kegiatan magang / praktik kerja
                                    setara dengan 20 JP
                                </div>
                                <div>
                                    1 kali kegiatan magang / praktik kerja
                                    setara dengan 24 JP
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 border-b p-2 bg-white hover:bg-blue-50 transition-color duration-300 ease-in-out lg:w-full w-[900px]">
                            <div></div>
                            <div className="col-span-1">Detasering</div>
                            <div className="col-span-1">Kegiatan</div>
                            <div className="grid grid-cols-2 gap-x-10">
                                <div>
                                    1 kali kegiatan detasering setara dengan 20
                                    JP
                                </div>
                                <div>
                                    1 kali kegiatan detasering ditambah 20% dari
                                    JP program detaseringnya
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 border-b p-2 bg-white hover:bg-blue-50 transition-color duration-300 ease-in-out lg:w-full w-[900px]">
                            <div></div>
                            <div className="col-span-1">
                                Pertukaran antara PNS dan Pegawai
                                Swasta/BUMN/BLUMD
                            </div>
                            <div className="col-span-1">Kegiatan</div>
                            <div className="grid grid-cols-2 gap-x-10">
                                <div>
                                    1 kali kegiatan pertukaran pegawai setara
                                    dengan 20 JP
                                </div>
                                <div>
                                    1 kali kegiatan pertukaran pegawai setara
                                    dengan 24 JP
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 border-b p-2 bg-white hover:bg-blue-50 transition-color duration-300 ease-in-out lg:w-full w-[900px]">
                            <div></div>
                            <div className="col-span-1">
                                Bimbingan di Tempat Kerja
                            </div>
                            <div className="col-span-1">Kegiatan</div>
                            <div className="grid grid-cols-2 gap-x-10">
                                <div>
                                    1 kali bimbingan di tempat kerja setara
                                    dengan 2 JP, maksimal dihitung 2 kali dalam
                                    1 bulan
                                </div>
                                <div>
                                    Ditambahkan 20% dari JP program bimbingan di
                                    tempat kerja
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 border-b p-2 bg-white hover:bg-blue-50 transition-color duration-300 ease-in-out lg:w-full w-[900px]">
                            <div></div>
                            <div className="col-span-1">Komunitas Belajar</div>
                            <div className="col-span-1">JP</div>
                            <div className="grid grid-cols-2 gap-x-10">
                                <div>
                                    Sesuai jam belajar, maksimal 2 JP per hari
                                </div>
                                <div>
                                    Ditambahkan 20% dari JP Komunitas belajar
                                    (Community of Practice)
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 border-b p-2 bg-white hover:bg-blue-50 transition-color duration-300 ease-in-out lg:w-full w-[900px]">
                            <div></div>
                            <div className="col-span-1">
                                Pembelajaran Alam Terbuka (Outbound)
                            </div>
                            <div className="col-span-1">JP</div>
                            <div className="grid grid-cols-2 gap-x-10">
                                <div>
                                    Sesuai JP program pembelajaran alam terbuka
                                    (outbound)
                                </div>
                                <div>
                                    Ditambahkan 20% dari JP pembelajaran alam
                                    terbuka (outbound)
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 border-b p-2 bg-white hover:bg-blue-50 transition-color duration-300 ease-in-out lg:w-full w-[900px]">
                            <div className="col-span-1">Flexible Learning</div>
                            <div className="col-span-1">
                                Pelatihan Jarak Jauh
                            </div>
                            <div className="col-span-1">JP</div>
                            <div className="grid grid-cols-2 gap-x-10">
                                <div>Sesuai dengan JP program pelatihannya</div>
                                <div>
                                    Ditambahkan 20% dari JP program pelatihannya
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 border-b p-2 bg-white hover:bg-blue-50 transition-color duration-300 ease-in-out lg:w-full w-[900px]">
                            <div></div>
                            <div className="col-span-1">E-Learning</div>
                            <div className="col-span-1">JP</div>
                            <div className="grid grid-cols-2 gap-x-10">
                                <div>
                                    Paling tinggi 1 hari 3 JP akses pembelajaran
                                    secara daring
                                </div>
                                <div>
                                    Paling tinggi 1 hari akses pembelajaran
                                    secara daring 3 JP
                                </div>
                            </div>
                        </div>
                        {/* End: Body Table */}
                    </div>
                </Transition>
            </main>
        </>
    );
}
