import Link from "next/link";

export default async function Header() {
	return (
		<header className="bg-white shadow-md">
			<div className="container mx-auto px-4 py-3">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<Link href="/" className="cursor-pointer flex items-center">
						<img alt="FilterMart Logo" className="h-10 mr-3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd0bloof5iV_c21dzA78Kq3mDFGp8w8xHc8Kq9Rt2TOgav9y20DwV6vUOVnyBeNXf1bHMAqooPnEX4Mj38dcU0bcZ1ggNHZ7Om1N1INTVuN8cly4tKgU1coJRVJ9BEI04P18GsJOCZI61TgnVGYTBAWMqdOTJWgrsu8LfzCf2jUfLY5MMu_0sTsIVjUC8xQ5eGnSt9gEvdizgC64sRagA6RQoh-Wry_--vx3fSK87a13Y0FIzzr2ssBEwIW1IUarEf-D-MbncBgzA" />
						<span className="text-2xl font-bold text-blue-700">FilterMart</span>
							</Link>
					</div>
					<div className="flex items-center space-x-4">
						<div className="text-right">
							<a className="text-xl font-semibold text-blue-700 hover:text-blue-900" href="tel:18004877493">1.800.487.7493</a>
							<p className="text-sm text-gray-600">M-F 8am - 5pm CST</p>
							<a className="text-sm text-blue-600 hover:text-blue-800" href="mailto:filters@filtermart.com">filters@filtermart.com</a>
						</div>
						<div className="flex items-center space-x-2 text-sm text-gray-700">
							<button className="flex items-center hover:text-blue-600">
								<span className="material-icons text-lg mr-1">language</span>
								SELECT LANGUAGE
								<span className="material-icons text-lg ml-1">arrow_drop_down</span>
							</button>
							<a className="hover:text-blue-600" href="#">SIGN UP</a>
							<span className="text-gray-400">|</span>
							<a className="hover:text-blue-600" href="#">LOGIN</a>
							<span className="text-gray-400">|</span>
							<a className="hover:text-blue-600" href="#">VISIT FILTERFAB</a>
						</div>
					</div>
				</div>
			</div>
			<nav className="bg-blue-700 text-white">
				<div className="container mx-auto px-4">
					<ul className="flex justify-center space-x-8 py-3">
						<li><a className="hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium" href="#">INDUSTRIAL</a></li>
						<li><a className="hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium" href="#">RESIDENTIAL</a></li>
						<li><a className="hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium" href="#">HOUSINGS</a></li>
						<li><a className="hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium" href="#">SEARCH</a></li>
						<li><a className="hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium" href="#">MARKETS SERVED</a></li>
						<li><a className="hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium" href="#">OEM PARTNERS</a></li>
						<li><a className="hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium" href="#">ABOUT</a></li>
						<li><a className="hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium" href="#">CONTACT</a></li>
					</ul>
				</div>
			</nav>
		</header>
	)
}