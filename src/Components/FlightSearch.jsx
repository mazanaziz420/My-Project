"use client"

import { useState } from "react"

export default function FlightSearch({ onSearch }) {
  const [tripType, setTripType] = useState("oneWay")
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    date: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(formData)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-xl p-6 transform transition-all hover:scale-105 duration-300">
        <div className="mb-6 space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="tripType"
              value="oneWay"
              checked={tripType === "oneWay"}
              onChange={(e) => setTripType(e.target.value)}
            />
            <span className="ml-2 text-gray-700">One-way</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="tripType"
              value="roundTrip"
              checked={tripType === "roundTrip"}
              onChange={(e) => setTripType(e.target.value)}
            />
            <span className="ml-2 text-gray-700">Round-trip</span>
          </label>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                placeholder="Enter origin"
                value={formData.origin}
                onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
              />
              <span className="absolute right-3 top-9 text-gray-400">🛫</span>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                placeholder="Enter destination"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              />
              <span className="absolute right-3 top-9 text-gray-400">🛬</span>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
              <span className="absolute right-3 top-9 text-gray-400">📅</span>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:scale-105"
            >
              Search Flights
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

