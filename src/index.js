import './styles.css';
import 'pnotify/dist/PNotifyBrightTheme.css';

import getGeoPosition from './getGeoPosition.js';
import fetchWeather from './fetchWeather.js';
import weatherMarkup from './weatherMarkup.hbs';

import PNotify from 'pnotify/dist/es/PNotify.js';

const refs = {
  searchForm: document.querySelector('#search-form'),
  weather: document.querySelector('#weather'),
};

getGeoPosition()
  .then(location => {
    fetchWeather
      .fetchOfWeather(
        `${location.coords.latitude}, ${location.coords.longitude}`,
      )
      .then(data => {
        const weatherContent = weatherMarkup(data);
        refs.weather.innerHTML = weatherContent;
      });
  })
  .catch(err => {
    PNotify.alert(
      'Нет прав доступа к геопозиции, используйте поиск по имени города.',
    );
  });

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(e) {
  e.preventDefault();

  const input = e.currentTarget.elements.city.value;

  fetchWeather
    .fetchOfWeather(input)
    .then(data => {
      const weatherContent = weatherMarkup(data);
      refs.weather.innerHTML = weatherContent;
    })
    .catch(() => {
      PNotify.alert('Город не найден.');
    });
}
