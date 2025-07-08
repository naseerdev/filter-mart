export default async function We (){
    return (
        <>
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-50 py-16 px-8 text-center">
            <h2 className="text-4xl font-bold text-blue-700 mb-2">VOLUME DISCOUNTS</h2>
            <p className="text-gray-600 flex items-center justify-center">
              AVAILABLE UPON REQUEST
              <span className="material-icons text-blue-700 ml-2">arrow_forward</span>
            </p>
          </div>
          <div className="bg-blue-700 py-16 px-8 text-center text-white">
            <h2 className="text-4xl font-bold mb-2">MONTHLY SPECIALS</h2>
            <p className="text-blue-200">FIND DEALS ON QUALITY FILTERS</p>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-yellow-400 py-16 px-8 text-center">
            <p className="text-sm text-gray-700 mb-1">APPLY FOR A</p>
            <h2 className="text-4xl font-bold text-blue-700">FILTER DISTRIBUTORSHIP</h2>
          </div>
          <div className="bg-gray-200 py-16 px-8 text-center">
            <p className="text-sm text-gray-700 mb-1">FILTER LITERATURE</p>
            <h2 className="text-4xl font-bold text-blue-700">GENERAL INFORMATION</h2>
          </div>
        </section>
        </>
    )
}