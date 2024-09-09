const testGooglePlacesAPI = async () => {
  const apiKey = "AIzaSyADYuqwcgreNj8vpN06HUoiJ6L8OdmyoC4"; // Replace with your actual Google API key
  const query = "Bil"; // Replace with the city name or query you want to test
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&types=(cities)&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data from Google Places API:", data);
  } catch (error) {
    console.error("Error fetching data from Google Places API:", error);
  }
};

// Call the function to test it
testGooglePlacesAPI();
