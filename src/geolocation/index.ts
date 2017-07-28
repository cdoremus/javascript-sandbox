import { browserGeolocation } from './geolocation';


export const doGeolocation = () => {
  const messageDiv = document.querySelector('#message');
  console.log('Inside doGeolocation()');
  browserGeolocation()
    .then(location => {
      console.log('browserGeolocation() called by index.js', location);
      if (messageDiv) {
        const msg = `Your Location: <br/>
          longitude: ${location.longitude}<br/>
          latitude: ${location.latitude} <br/>`
        messageDiv.innerHTML = msg;
      } else {
        alert('message div not found');
      }
    })
    .catch(e => {
      const msg = `An error occurred when attempting browser geolocation: ${e.message}`;
      if (messageDiv) {
        messageDiv.innerHTML = msg;
      } else {
        alert(`Error occurred, but the message div was not found. Error ${msg}`);
      }
    });
}
