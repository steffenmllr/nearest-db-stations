# nearest-db-stations

Searches the nearest **stations of [Deutsche Bahn](http://db.de/)**, using [geokdbush](https://github.com/mourner/geokdbush). Data taken from the excellent [db-stations](https://github.com/derhuerst/db-stations) package.


[![npm version](https://img.shields.io/npm/v/nearest-db-stations.svg)](https://www.npmjs.com/package/nearest-db-stations)
![ISC-licensed](https://img.shields.io/github/license/steffenmllr/nearest-db-stations.svg)


## Installing

```shell
npm install nearest-db-stations
```


## Usage

```js
const nearestStations = require('nearest-db-stations')

const latitude = 52.509647;
const longitude = 13.375944;

const stations = nearestStations(latitude, longitude);

// [{
//     id: '8011155',
//     address: {
//         city: 'Berlin',
//         zipcode: '10179',
//         street: 'Dircksenstr. 2'
//     },
//     location: {
//         type: 'location',
//         latitude: 52.521481,
//         longitude: 13.410961
//     },
//     distance: 256
// }, {
//     id: '8089019',
//     address: {
//         city: 'Berlin',
//         zipcode: '10179',
//         street: 'Brückenstraße/Alexanderstraße'
//     },
//     location: {
//         type: 'location',
//         latitude: 52.51427,
//         longitude: 13.419347
//     },
//     distance: 1073
// }, {
//     id: '8089017',
//     address: {
//         city: 'Berlin',
//         zipcode: '10178',
//         street: 'Am Zwirngraben'
//     },
//     location: {
//         type: 'location',
//         latitude: 52.522622,
//         longitude: 13.402364
//     },
//     distance: 1209
// }, {
//     id: '8089027',
//     address: {
//         city: 'Berlin',
//         zipcode: '10117',
//         street: 'Oranienburger Str. 35'
//     },
//     location: {
//         type: 'location',
//         latitude: 52.52521,
//         longitude: 13.393052
//     },
//     distance: 2271
// }, {
//     id: '8010255',
//     address: {
//         city: 'Berlin',
//         zipcode: '10243',
//         street: 'Koppenstr. 3'
//     },
//     location: {
//         type: 'location',
//         latitude: 52.5104881,
//         longitude: 13.4346807
//     },
//     distance: 2689
// }]

```

---

## API

#### nearestStations(longitude, latitude[, maxDistance, maxResults])

Returns an array of the closest points from a given location in order of increasing distance.

- `longitude`: query point longitude.
- `latitude`: query point latitude.
- `maxDistance`: (optional) maximum distance in meters to search within (`Infinity` by default).
- `maxResults`: (optional) maximum number of points to return (`5` by default).


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/steffenmllr/nearest-db-stations/issues).


## Data License

[The Dataset](http://data.deutschebahn.com/dataset/data-stationsdaten) is [published](http://data.deutschebahn.com/dataset/data-haltestellen) under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/) by *Deutsche Bahn (DB)*.
