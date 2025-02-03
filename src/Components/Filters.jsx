export default function Filters({ onFilterChange }) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Filters</h3>
  
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2 text-gray-700">Price Range</h4>
            <input
              type="range"
              min="0"
              max="2000"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              onChange={(e) => onFilterChange("price", e.target.value)}
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>$0</span>
              <span>$2000</span>
            </div>
          </div>
  
          <div>
            <h4 className="font-medium mb-2 text-gray-700">Stops</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 rounded focus:ring-blue-500"
                  onChange={(e) => onFilterChange("stops", "nonstop")}
                />
                <span className="ml-2 text-gray-700">Non-stop</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 rounded focus:ring-blue-500"
                  onChange={(e) => onFilterChange("stops", "oneStop")}
                />
                <span className="ml-2 text-gray-700">1 stop</span>
              </label>
            </div>
          </div>
  
          <div>
            <h4 className="font-medium mb-2 text-gray-700">Airlines</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 rounded focus:ring-blue-500"
                  onChange={(e) => onFilterChange("airline", "emirates")}
                />
                <span className="ml-2 text-gray-700">Emirates</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 rounded focus:ring-blue-500"
                  onChange={(e) => onFilterChange("airline", "etihad")}
                />
                <span className="ml-2 text-gray-700">Etihad</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  