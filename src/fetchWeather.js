export default {
  fetchOfWeather(city) {
    const baseUrl = 'https://api.apixu.com/v1/current.json';
    const myKey = '?key=3106a8f4d1914e2f921142834191507';
    const targetCity = `&q=${city}`;

    return fetch(baseUrl + myKey + targetCity).then(response => {
      if (response.ok) return response.json();

      throw new Error(`Error while fetching: ${response.statusText}`);
    });
  },
};
