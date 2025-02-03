export default function Navbar() {
    return (
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl text-white">✈️</span>
              <span className="ml-2 text-xl font-semibold text-white">SkySearch</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-white hover:bg-blue-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-blue-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  My Trips
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-blue-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  
  