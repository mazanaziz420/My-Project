import axios from "axios"

const API_KEY = "6b2b8a2a64msh53535d750c8393fp16b135jsn0434eaa13a2a"
const API_HOST = "sky-scrapper.p.rapidapi.com"

export const searchFlights = async (origin, destination, date) => {
  const options = {
    method: "GET",
    url: `https://${API_HOST}/api/v1/flights/search`,
    params: {
      origin,
      destination,
      date,
    },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  }

  try {
    const response = await axios.request(options)
    console.log("API Response:", response.data)
    return response.data
  } catch (error) {
    console.error("Error fetching flight data:", error.response ? error.response.data : error.message)
    return null
  }
}

