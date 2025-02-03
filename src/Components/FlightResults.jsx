export default function FlightResults({ flights = [] }) {
  if (flights.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center text-gray-500 bg-white rounded-lg shadow-lg p-8">
          <p className="text-xl font-semibold mb-2">No flights found</p>
          <p>Try adjusting your search criteria or dates for better results.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-4">
        {flights.map((flight) => (
          <div
            key={flight.id}
            className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  src={flight.airlineLogo || "/placeholder.svg"}
                  alt={flight.airline}
                  className="h-12 w-12 object-contain rounded-full bg-gray-100 p-2"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">{flight.airline}</p>
                  <p className="text-sm text-gray-500">{flight.flightNumber}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">${flight.price}</p>
                <p className="text-sm text-gray-500">{flight.duration}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
              <div>
                {flight.departureTime} - {flight.arrivalTime}
              </div>
              <div>{flight.stops === 0 ? "Non-stop" : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}</div>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-150 ease-in-out">
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

