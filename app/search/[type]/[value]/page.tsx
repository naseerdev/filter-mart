import Image from "next/image";

interface SearchParams {
    type: 'obn' | 'oem' | 'fmc';
    value: string;
}


export default async function Page({ params }: { params: SearchParams }) {
    const { type, value } = await params;

    if (!['obn', 'oem', 'fmc'].includes(type)) {
        return <div>Invalid search type {value}</div>;
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">SEARCH RESULTS</h1>
            <p className="text-gray-500 mb-6">SEARCH CRITERIA &gt; OEM BRAND: OK</p>
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-4">
                    <button className="flex items-center text-blue-600 font-medium">
                        <span className="material-icons mr-2">grid_view</span>
                        GRID
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-600 font-medium">
                        <span className="material-icons mr-2">list</span>
                        LIST
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="bg-gray-100 p-4 flex justify-center items-center h-48">
                        <Image width='100' height='100' alt="Filter product image" className="max-h-full max-w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAURMkg6v8m9WrrD1RTID8v7--cMzwDN2up1yK81lj1gz0F74di43RgT3YVIQlT_8b3XPzbJUY4gkxirR2F51yWCYZph1mandlncbce_TnaPpiO5TU2oAU3fM5w4C0JGNop9rJILy_OHZU3veDGPO-4UrlOs1u20okvDTzQh0U52zeMG2CqeUGo4WFwNMtM1a0Jn6HEHj30UlySaba2hqYZuX0Yu2zKf33A650BXWhT65ctZ4tgbpqmKt5UKSnq068TW8hRDdOvvSA" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-500">TMC: #31-6367</p>
                        <p className="text-sm text-gray-700 font-medium mt-1">Replaces:<br />OKP-4, 2EC28872</p>
                        <p className="mt-4 text-lg font-bold text-gray-800">PRICE: TBD</p>
                    </div>
                </div>
				
                <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="bg-gray-100 p-4 flex justify-center items-center h-48">
                        <Image width='100' height='100' alt="Filter product image" className="max-h-full max-w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf0FQSE4QOPK9pwpwlCNApjpw1aJS5HNgcgUM_ZgYzN5Ux-I4VjC_BZzMF3Ys7TVbq_3V4JTYUSTzcFNC80WqUjRm_0DOW5h-EGknVnUPvQMiBaF1QsAUj1W44h1OLlYfsqpb0HMTOxcQrxlZWVvJXcNLsI1WJjLapuT_7lI3pkLjTrQw8t3bhXMy8PzkgEd2o8xxZfWTWIjxqYjT-NAlF_LKuSamDAQDW3Fp2gf9Xvtc8YF5YFkVVTiBuK2snrhGnMCEemLenzDI" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-500">TMC: #31-3952</p>
                        <p className="text-sm text-gray-700 font-medium mt-1">Replaces:<br />2101918, 7022-8101-42</p>
                        <p className="mt-4 text-lg font-bold text-gray-800">PRICE: TBD</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="bg-gray-100 p-4 flex justify-center items-center h-48">
                        <Image width='100' height='100' alt="Filter product image" className="max-h-full max-w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsPDA4hYyShpK8HhI-qaDSl1vJKUVhHt_k3XPoJid8-wc-8ZFwJXv0LTfExt5VmrT2owhHpxNyP_nGS7L5WTIfKVueQlgDOu0W_OQrj7GMq_i_B-_ccihEApTh9Mm_93lOxj-yopNX_ocqmd-2YyWVsxNfUlTwXZu5aBPYtrI-e0tGV5R5buipx8mYxnkr0YVlOS6lWkI2Q3-U8cyeLJwAbL9TErRP9iMo0udr8hBQbC6DOOqVYrYo6N8kmMsmgju8yhQj9wQVjOU" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-500">TMC: #30-0104</p>
                        <p className="text-sm text-gray-700 font-medium mt-1">Replaces:<br />7022-8101-43</p>
                        <p className="mt-4 text-lg font-bold text-gray-800">PRICE: TBD</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="bg-gray-100 p-4 flex justify-center items-center h-48">
                        <Image width='100' height='100' alt="Filter product image" className="max-h-full max-w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsQzLZWPdhBVyFkNUytUSzXTqWdk97g-WwKf0_G6lSay4ARJ2JPW1vIIJ8bGswUGerJ0RyyGg_sGBWzq7dNq3rIeo1IPOiiMCpG1_oHg6qnLCp95BP1_QBCs-j0sO7FbHXgsphggba6TKyY_2beKXQZAXPTnRnPEqIne20kVkpiHIPCGmIzbZ0xVMuopsZgJ9ourmfJyzy9k5cZdt32bVNP1Bqh1CsBqtZopGD73ushiFehXV5ZNToOE9fEMCC1kRRc_EOGmt_lsU" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-500">TMC: #38-3998</p>
                        <p className="text-sm text-gray-700 font-medium mt-1">Replaces:<br />AKP-4</p>
                        <p className="mt-4 text-lg font-bold text-gray-800">PRICE: TBD</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="bg-gray-100 p-4 flex justify-center items-center h-48">
                        <Image width='100' height='100' alt="Filter product image" className="max-h-full max-w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHi3ACTd7AqzXleqO6puSeEA28HAnXS79ThvsmjMPbj5VJ88QsOKe_i_4B-z_1z4hCEcOZrCRBbM1DRkRUTgGd0S5RcZ5y7Y8McqJgcctqQ1Jn0HOgRVphurA7gz_on9DJkjQizIVfOhcIGZk8QnBHjhI0GZS0b0IyDzoxr7xINXUL0VODNvefJTu0vc0V5kmWthii2bukD7w6gaiyZnMqN9k8qY_BbrahFOusNwH1Ic9P6mHSvTKMXq4DsBtbzYqCjYp468olDm4" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-500">TMC: #38-3998</p>
                        <p className="text-sm text-gray-700 font-medium mt-1">Replaces:<br />3519198, A003-8010</p>
                        <p className="mt-4 text-lg font-bold text-gray-800">PRICE: TBD</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="bg-gray-100 p-4 flex justify-center items-center h-48">
                        <Image width='100' height='100' alt="Filter product image" className="max-h-full max-w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKYWKUrHoNjB2upW3UzT1ymN_QoUZldFMLGySrFJEj--SNYeBQ6nTJ-_MYvY_dRjYA7auZSFj0ZXLy3W8avJYwvIm8-6wiJ-1i7c_D9uLh4UUtfDmeyvsBAoX5_IEjTObR_b7jKqtObdbd7XgCv0OwiwO9Nfn1MtU1adCnjrxDvKf5_PR5oVZDQbkfuxbYpHFqbZy22FgE2aO0MQ9PBFrKaMKhVjk6blqs9d8whQredxQrnPVKE2ECVgztR2u9K9O6TcxtjkqOTbY" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-500">TMC: #39-7099</p>
                        <p className="text-sm text-gray-700 font-medium mt-1">Replaces:<br />3519199, F1100-040</p>
                        <p className="mt-4 text-lg font-bold text-gray-800">PRICE: TBD</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="bg-gray-100 p-4 flex justify-center items-center h-48">
                        <Image width='100' height='100' alt="Filter product image" className="max-h-full max-w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgBPww_pAvtgRaPvdtwo5vq0vqAdPyf_NnEgs7pzW-tt_yU1C6PWdY5UMDBvPWRAq9B-MPMr_l7gEB0evjBTTeXDzQSuK4x7gC_DVlqrkSGeISosdvYWwCTkBGrRoXlAxHgce-1hzJTDLD68MKwven6aCUgDAZs8jPpEMwwKnbvxTeac2-aQEQXGaKqUtK8qggJK05Lc5xje_7EhYKnR8zyPAGUkRXiIAioaxLa_3-vE8j9S_JKikMUESlWcCWgVuuBR6UYAC3YjQ" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-500">TMC: #39-0620</p>
                        <p className="text-sm text-gray-700 font-medium mt-1">Replaces:<br />3519200, F1100-047</p>
                        <p className="mt-4 text-lg font-bold text-gray-800">PRICE: TBD</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="bg-gray-100 p-4 flex justify-center items-center h-48">
                        <Image width='100' height='100' alt="Filter product image" className="max-h-full max-w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhi5lAtphj3HeGE15F1104mvv6NgdAfkX78ZpGOFQ3i13jx6DF50Cz3XtmQH779Zr4WCGNjp593THJqHaG-pBX3yQgox4XA1VTveigeOe0B8WSXCZ4jzBvyDse5Q-WoVGP1rxtR3N_hWwsaTePt_xtk3JXW2dQijlz7jZNowEaV1DEJ4zLaiw7PwrjvF3rKKqCuDWdZ80dPZsNHbSzcTTOlMQTy-Fk-A5v6KIsUdkkxB31TnwArnJ2HG2t-zVe0IE0M1iqjWueYDc" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-500">TMC: #31-6117</p>
                        <p className="text-sm text-gray-700 font-medium mt-1">Replaces:<br />OK-160, H0012-0001</p>
                        <p className="mt-4 text-lg font-bold text-gray-800">PRICE: TBD</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="bg-gray-100 p-4 flex justify-center items-center h-48">
                        <Image width='100' height='100' alt="Filter product image" className="max-h-full max-w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbTz-T5CTc5aQowN9bR07h7qNqI5g_spPMaX3grDDhzA_E5MB13XcG-33ork1RlO5jPeuN_-CoARO9WBLwGTsn33Y5ARZFFsd3W0smUQStYVudoOq-0Oom6WF1JI59z_drek-U3z3pwI6A0Z9krK6nGlXxtWFTORH-iXr8Hq5-K-MN5P9bk0aJzEP5UNCwbWDa4B999gKfybygruDJPuNCQ8nPNkCZsfMcm0ctuHWnzSgLbYxnLbvgwG5wEvRELg3a8CMCBXwHRPk" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-500">TMC: #30-3433</p>
                        <p className="text-sm text-gray-700 font-medium mt-1">Replaces:<br />OK-320, H0012-0005</p>
                        <p className="mt-4 text-lg font-bold text-gray-800">PRICE: TBD</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="bg-gray-100 p-4 flex justify-center items-center h-48">
                        <Image width='100' height='100' alt="Filter product image" className="max-h-full max-w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhsvmF4a-SIXsZwho02EMHkr2UZWEJvGFP0_iYhLpLAkY8DlQdp_bQitLvKvAsRd3bmDq03mKFSUVJtyAd8KeLzEeUGb8nIGmO6FQdqvFjqkwwvSosxK-I8qxsVEgzR5d9qJFsX2eVWiGFDtE9ieTpQrGz82cR1O-LarzzZPSVhvfsdnhstTdpf3HblKN1ZIvqHAB_MiYC8cZ98HbsLsgn3SKPMbkoomJUMEOHe6ESuDCkAh0YcysM4AjHqPl5p7Bvw9wrRCON8YI" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-500">TMC: #30-3504</p>
                        <p className="text-sm text-gray-700 font-medium mt-1">Replaces:<br />OK-460, H0012-0009</p>
                        <p className="mt-4 text-lg font-bold text-gray-800">PRICE: TBD</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="bg-gray-100 p-4 flex justify-center items-center h-48">
                        <Image width='100' height='100' alt="Filter product image" className="max-h-full max-w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfa7fyKllDtXf5Be43CAg7N_oN_gAlU8f0FkuIwb-xj9BvyRK2TuSp62UN5dzqrzTRIFxuofzKBtotDoW-LMbJwnWING1DNFbZTlxXQdl3agFkl9Ti3_vqQPeD0vF8JOSDa5iAwarGM-mwC9XsXdNK9--oqDg_0hsdrxXZGqWNMoEAUsynv6j6VG-L-pBpXQrcOr33-Iwq5pYWAUF67v2egTPQ4hzTe5BguANzf_xg14lGn45U_a9H6d8F6B4WX4qyyn3CzBbkVcs" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-500">TMC: #31-6705</p>
                        <p className="text-sm text-gray-700 font-medium mt-1">Replaces:<br />OK-320T, H0012-0006</p>
                        <p className="mt-4 text-lg font-bold text-gray-800">PRICE: TBD</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="bg-gray-100 p-4 flex justify-center items-center h-48">
                        <Image width='100' height='100' alt="Filter product image" className="max-h-full max-w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1os3PPrWoqPJbZ77JQkisNTc4KA_xZiC1MiNmmljyxp7zOqMTi_DriFbCValGQ4ym8ubhlLPkvCvHj-WOVjstmlEwg2vyrl8vhQJ7BcSYNDRfZU_HnvgRO0kCjmdc4KclPoXQ_HodN2RZo1UeON1B1BZ13pwtBruYEu5ZUTQiqKbFuU5UihJ9dIIqMKnEP-A7AGHiooK6Caw0mXqTQzIDPhZxxDJKglEPSB11mg_gKaCryhmz56q8-5xcHjz6adRQtb_DwXE_vCg" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-500">TMC: #28-7768</p>
                        <p className="text-sm text-gray-700 font-medium mt-1">Replaces:<br />OK-460T, H0012-0010</p>
                        <p className="mt-4 text-lg font-bold text-gray-800">PRICE: TBD</p>
                    </div>
                </div>
            </div>
            <div className="mt-12 flex justify-center items-center">
                <nav aria-label="Pagination" className="flex items-center space-x-2">
                    <a className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" href="#">
                        <span className="sr-only">Previous</span>
                        <span className="material-icons text-lg">chevron_left</span>
                    </a>
                    <a aria-current="page" className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#"> 1 </a>
                    <a className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#"> 2 </a>
                    <a className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium" href="#"> 3 </a>
                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
                    <a className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium" href="#"> 8 </a>
                    <a className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#"> 9 </a>
                    <a className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#"> 10 </a>
                    <a className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" href="#">
                        <span className="sr-only">Next</span>
                        <span className="material-icons text-lg">chevron_right</span>
                    </a>
                </nav>
            </div>
        </div>
    )
}