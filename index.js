const distance = require('@turf/distance').default;
const { point } = require('@turf/helpers');
const kdbush = require('kdbush');
const geokdbush = require('geokdbush');

// @todo: either return all stations or just the id
// maybe write id, lat, lng into json file on ci build
const allStations = require('db-stations/full.json').map(s => ({
    id: s.id,
    name: s.name,
    address: s.address,
    location: s.location
}));

const index = kdbush(allStations, (p) => p.location.latitude, (p) => p.location.longitude);

const isFloat = (n) => Number(n) === n && n % 1 !== 0;
const nearestStations = (latitude, longitude, maxDistance, maxResults = 5) => {
    if (!isFloat(latitude)) throw new Error('`latitude` has to be a Float')
    if (!isFloat(longitude)) throw new Error('`longitude` has to be a Float')

    const pointFrom = point([latitude, longitude]);
    const maxDistanceInMeters = maxDistance ? maxDistance / 1000 : maxDistance;
    return geokdbush.around(index, latitude, longitude, maxResults, maxDistanceInMeters).map(station => {
        const pointTo = point([station.location.latitude, station.location.longitude]);
        station.distance = Math.ceil(distance(pointFrom, pointTo, { units: 'meters' }));
        return station;

    }).sort(s => s.distance).reverse();
};

module.exports = nearestStations;
