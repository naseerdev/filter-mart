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

	const handleInputKeyDown = (type: 'obn' | 'oem' | 'fmc') => (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		<section className="bg-yellow-400 py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
					<button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
						PRODUCT SEARCH
					</button>

					<div className="flex items-center bg-white rounded-lg shadow">
						<input
							className="px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
							placeholder="OEM BRAND NAME"
							type="text"
							value={searchType === 'obn' ? searchValue : ''}
							onChange={e => handleInputChange('obn', e.target.value)}
							onKeyDown={handleInputKeyDown('obn')}
						/>
						<button
							className="bg-blue-700 text-white p-3 rounded-r-lg hover:bg-blue-800 transition duration-300"
							onClick={() => searchType === 'obn' && searchValue ? handleSearch() : handleInputChange('obn', searchValue)}
							aria-label="Search by OEM Brand Name"
						>
							<span className="material-icons">search</span>
						</button>
					</div>

					<span className="text-gray-700 font-semibold">AND / OR</span>

					<div className="flex items-center bg-white rounded-lg shadow">
						<input
							className="px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
							placeholder="OEM PART NUMBER"
							type="text"
							value={searchType === 'oem' ? searchValue : ''}
							onChange={e => handleInputChange('oem', e.target.value)}
							onKeyDown={handleInputKeyDown('oem')}
						/>
						<button
							className="bg-blue-700 text-white p-3 rounded-r-lg hover:bg-blue-800 transition duration-300"
							onClick={() => searchType === 'oem' && searchValue ? handleSearch() : handleInputChange('oem', searchValue)}
							aria-label="Search by OEM Part Number"
						>
							<span className="material-icons">search</span>
						</button>
					</div>

					<span className="text-gray-700 font-semibold">OR</span>

					<div className="flex items-center bg-white rounded-lg shadow">
						<input
							className="px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
							placeholder="FMC PART NUMBER"
							type="text"
							value={searchType === 'fmc' ? searchValue : ''}
							onChange={e => handleInputChange('fmc', e.target.value)}
							onKeyDown={handleInputKeyDown('fmc')}
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
		</section>
	)
}