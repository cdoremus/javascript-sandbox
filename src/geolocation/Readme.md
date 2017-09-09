# Browser Geolocation API Demo #

This folder contains code demonstrating how to use the browser geolocation API.

## Web Server Setup
In order to use this demo, you need to setup the Python 2 web server according to the directions in `simple-https-server.py`. This allows the server to be run under https. Most browsers will not allow geolocation without the web page being served under https.

Start the python 2 web server using the following command:
```
npm start

```
You can then browse to [https://localhost:4443/](https://localhost:4443/) to start the demo.

## Displaying Your Geolocation

The first time you click on the 'Click to find location' button on the page you will be asked by the browser to share your location. The location will not be shown if you block location sharing.

If you allow location sharing, your current geolocation (gps) coordinates will be shown.