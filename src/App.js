import { useState } from "react"
import Navbar from "./Components/Navbar"
import FlightSearch from "./Components/FlightSearch"
import FlightResults from "./Components/FlightResults"
import Filters from "./Components/Filters"
import { searchFlights } from "./api/skyscapper"

function App() {
  const [flights, setFlights] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (searchData) => {
    setLoading(true)
    setError(null)
    try {
      const data = await searchFlights(searchData.origin, searchData.destination, searchData.date)
      setFlights(data?.flights || [])
    } catch (error) {
      console.error("Error fetching flights:", error)
      setError("An error occurred while fetching flights. Please try again.")
      setFlights([])
    }
    setLoading(false)
  }

  const handleFilterChange = (filterType, value) => {
    // Implement filter logic here
    console.log(`Filter changed: ${filterType} - ${value}`)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">SkySearch</h1>

        <FlightSearch onSearch={handleSearch} />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <Filters onFilterChange={handleFilterChange} />
          </div>
          <div className="md:col-span-3">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> {error}</span>
              </div>
            ) : (
              <FlightResults flights={flights} />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

