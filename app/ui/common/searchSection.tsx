'use client';

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchSection() {
	const { replace } = useRouter();
	const [searchType, setSearchType] = useState<'obn' | 'oem' | 'fmc' | ''>('');
	const [searchValue, setSearchValue] = useState('');
	const pathname = usePathname();
	
	const handleSearch = () => {
		if (searchType && searchValue) {
			replace(`${pathname}search/${searchType}/${encodeURIComponent(searchValue)}`);
		}
	};

	const handleInputChange = (type: 'obn' | 'oem' | 'fmc', value: string) => {
		setSearchType(type);
		setSearchValue(value);
	};

	const handleInputKeyDown = () => (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		<section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-black bg-opacity-20"></div>
			<div className="absolute inset-0" style={{
				backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
			}}></div>
			
			<div className="relative container mx-auto px-4 py-20">
				{/* Hero Content */}
				<div className="text-center mb-12">
					<h1 className="text-5xl md:text-6xl font-bold mb-4">
						Over <span className="text-yellow-400">1,137,729</span>
					</h1>
					<h2 className="text-2xl md:text-3xl font-light mb-6">
						Cross References On Thousands of Products
					</h2>
					<p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
						Find the exact filter you need with our comprehensive database. 
						Trusted by professionals worldwide for quality and reliability.
					</p>
					<button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition duration-300 shadow-lg">
						See All Products
					</button>
				</div>

				{/* Search Interface */}
				<div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 max-w-6xl mx-auto">
					<div className="flex flex-col items-center mb-6">
						<h3 className="text-2xl font-semibold mb-2">Product Search</h3>
						<p className="text-blue-100">Search by brand name, part number, or FMC number</p>
					</div>
					
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						{/* OEM Brand Name Search */}
						<div className="space-y-3">
							<label className="block text-sm font-medium text-blue-100">OEM Brand Name</label>
							<div className="flex items-center bg-white rounded-lg shadow-lg">
								<input
									className="px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full text-black placeholder-gray-500"
									placeholder="Enter brand name..."
									type="text"
									value={searchType === 'obn' ? searchValue : ''}
									onChange={e => handleInputChange('obn', e.target.value)}
									onKeyDown={handleInputKeyDown()}
								/>
								<button
									className="bg-blue-700 text-white p-3 rounded-r-lg hover:bg-blue-800 transition duration-300"
									onClick={() => searchType === 'obn' && searchValue ? handleSearch() : handleInputChange('obn', searchValue)}
									aria-label="Search by OEM Brand Name"
								>
									<span className="material-icons">search</span>
								</button>
							</div>
						</div>

						{/* OEM Part Number Search */}
						<div className="space-y-3">
							<label className="block text-sm font-medium text-blue-100">OEM Part Number</label>
							<div className="flex items-center bg-white rounded-lg shadow-lg">
								<input
									className="px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full text-black placeholder-gray-500"
									placeholder="Enter part number..."
									type="text"
									value={searchType === 'oem' ? searchValue : ''}
									onChange={e => handleInputChange('oem', e.target.value)}
									onKeyDown={handleInputKeyDown()}
								/>
								<button
									className="bg-blue-700 text-white p-3 rounded-r-lg hover:bg-blue-800 transition duration-300"
									onClick={() => searchType === 'oem' && searchValue ? handleSearch() : handleInputChange('oem', searchValue)}
									aria-label="Search by OEM Part Number"
								>
									<span className="material-icons">search</span>
								</button>
							</div>
						</div>

						{/* FMC Part Number Search */}
						<div className="space-y-3">
							<label className="block text-sm font-medium text-blue-100">FMC Part Number</label>
							<div className="flex items-center bg-white rounded-lg shadow-lg">
								<input
									className="px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full text-black placeholder-gray-500"
									placeholder="Enter FMC number..."
									type="text"
									value={searchType === 'fmc' ? searchValue : ''}
									onChange={e => handleInputChange('fmc', e.target.value)}
									onKeyDown={handleInputKeyDown()}
								/>
								<button
									className="bg-blue-700 text-white p-3 rounded-r-lg hover:bg-blue-800 transition duration-300"
									onClick={() => searchType === 'fmc' && searchValue ? handleSearch() : handleInputChange('fmc', searchValue)}
									aria-label="Search by FMC Part Number"
								>
									<span className="material-icons">search</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}