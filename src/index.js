import fetchWeather from './fetchWeather.js';
import weatherMarkup from './weatherMarkup.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(e) {
  e.preventDefault();

  const input = e.currentTarget.elements.city.value;

  fetchWeather.fetchOfWeather(input).then(data => {
    console.log(data);
  });
}

//api.apixu.com/v1/current.json?key=3106a8f4d1914e2f921142834191507&q=Paris

// const baseUrl = 'http://api.apixu.com/v1/current.json';
// const myKey = '?key=3106a8f4d1914e2f921142834191507';
// const targetCity = `&q=${input}`;

// fetch(baseUrl + myKey + targetCity).then(response => response.json());
//   .then(wether => console.log(wether));
