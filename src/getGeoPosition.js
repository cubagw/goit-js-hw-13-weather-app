'use strict';
const getGeoPosition = () => {
  const options = {
    maximumAge: 300000,
  };
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};
export default getGeoPosition;
