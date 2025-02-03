import Navbar from "../Components/Navbar"
import FlightSearch from "../Components/FlightSearch"
import Filters from "../Components/Filters"
import FlightResults from "../Components/FlightResults"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto py-8">
        <FlightSearch />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <Filters onFilterChange={(type, value) => console.log(type, value)} />
          </div>
          <div className="md:col-span-3">
            <FlightResults results={[]} />
          </div>
        </div>
      </main>
    </div>
  )
}

