// import { browserGeolocation } from './geolocation';


const messageDiv = document.querySelector('#message');

// function doGeolocation() {
//   console.log('Inside doGeolocation()');
//   browserGeolocation()
//     .then(location => {
//       console.log('browserGeolocation() called by index.js', location);
//       if (messageDiv) {
//         const msg = `Your Location: <br/>
//           longitude: ${location.longitude}<br/>
//           latitude: ${location.latitude} <br/>`
//         messageDiv.innerHTML = msg;
//       } else {
//         alert('message div not found');
//       }
//     })
//     .catch(e => {
//       const msg = `An error occurred when attempting browser geolocation: ${e.message}`;
//       if (messageDiv) {
//         messageDiv.innerHTML = msg;
//         alert(msg);
//       } else {
//         alert(`Error occurred, but the message div was not found. Error ${msg}`);
//       }
//     });
// }


// function doGeolocationCallbacks() {
//   const callback = geolocationCallbacks();
//   messageDiv.innerHTML = callback;
// }



const GEOLOCATION_TIMEOUT = 20000;

// const GeolocationPosition = {
//   latitude: 0,
//   longitude: 0
// }

// function browserGeolocation() {
//   return new Promise((resolve, reject) => {
//     if (navigator.geolocation) {
//       const geolocation =  navigator.geolocation;
//       geolocation.getCurrentPosition(
//         // getCurrentPosition() parameter TS type definition:
//         // (successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions) => {
//         //
//         // PositionCallback
//         function(position) {
//           const coords = position.coords;
//           const geolocation = { latitude: coords.latitude, longitude: coords.longitude };
//           resolve(geolocation);
//         },
//         // PositionErrorCallback
//         function(e) {
//           const code = e.code;
//           if (
//             code === PositionError.POSITION_UNAVAILABLE ||
//             code === PositionError.TIMEOUT ||
//             code === PositionError.PERMISSION_DENIED
//           ) {
//             const msg = `Browser geolocation not accomplished;
//               PositionError code: ${code};
//               PositionError message: ${e.message}`;
//             // tslint:disable-next-line:no-console
//             console.warn(msg, e);
//             resolve({latitude: 0, longitude: 0});
//           } else {
//             const msg = `Problem doing browser geolocation;
//             PositionError code: ${code};
//             PositionError message: ${e.message}`;
//             // tslint:disable-next-line:no-console
//             console.error(msg, e);
//             reject(new Error(msg));
//           }
//         },
//         // PositionOptions
//         {
//           enableHighAccuracy: false,
//           timeout: GEOLOCATION_TIMEOUT, // 20 seconds
//           maximumAge: 30000 // 30 seconds
//         }
//       );
//     } else {
//       reject(new Error('Browser Geolocation API not available'));
//     }
//   });
// };


// function geolocationCallbacks() {
//   if (navigator.geolocation) {
//     let callbackMsg;
//     const geolocation =  navigator.geolocation;
//     geolocation.getCurrentPosition(
//       function(position) {
//           const coords = position.coords;
//           const geolocation = { latitude: coords.latitude, longitude: coords.longitude };
//           callbackMsg = `${geolocation.latitude}  ${geolocation.longitude}`;
//       },
//       function(e) {
//         callbackMsg = e.code;
//       }
//     );
//     return callbackMsg;
//   } else {
//     return 'Browser Geolocation API not available'
//   }
// }

// function locationSuccess(position) {
//   const coords = position.coords;
//   const geolocation = { latitude: coords.latitude, longitude: coords.longitude };
//   callbackMsg = `latitude: ${geolocation.latitude}; longitude:  ${geolocation.longitude}`;
//   return callbackMsg;
// }

// function locationError(error) {
//   return error.code;
// }


function getPosition(options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

function doGeolocation() {
  var options =
    {
      enableHighAccuracy: false,
      timeout: GEOLOCATION_TIMEOUT, // 20 seconds
      maximumAge: 30000 // 30 seconds
    };
  getPosition(options)
    .then(position => {
      console.log('doGeolocation() position', position);
      messageDiv.innerHTML = `
        <h2>Your location4: </h2>
        Latitude: ${position.coords.latitude}<br/>
        Longitude: ${position.coords.longitude}
      `;
    })
    .catch(e => {
      console.error('doPosition error', error);
      messageDiv.innerHTML = e.message;
    });
}