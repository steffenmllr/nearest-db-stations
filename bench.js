const nearestStations = require('.');
const allStations = require('db-stations/full.json');
const now = require('performance-now')

const generateRandomPoint = (center, radius)  => {
   const x0 = center.latitude;
   const y0 = center.longitude;

  // Convert Radius from meters to degrees.
  const rd = radius / 111300;

  const u = Math.random();
  const v = Math.random();

  const w = rd * Math.sqrt(u);
  const t = 2 * Math.PI * v;
  const x = w * Math.cos(t);
  const y = w * Math.sin(t);
  const xp = x/Math.cos(y0);

  // Resulting point.
  return {'lat': y+y0, 'lng': xp+x0};
}


// Add 1.000 - 10.000 m to the radius
const generateSearchPoints = () =>  {
    const min = 500;
    const max = 10000;
    return allStations.map(s => {
        const randomRadius = Math.floor(Math.random() * (max - min + 1)) + min;
        const {lat, lng} = generateRandomPoint(s.location, randomRadius);
        return {
            id: s.id,
            lat,
            lng
        };
    });
}


const itterate = (searchPoints) => {
    let totalMS = 0;
    searchPoints.forEach(sp => {
        const start = now();
        const ns = nearestStations(sp.lat, sp.lng);
        const end  = now();
        totalMS += end - start;
    });
    return totalMS/searchPoints.length

}

const TIMES = 100;
let total = 0;
for(let i = 0; i<=TIMES; i++) {
    const searchPoints = generateSearchPoints();
    total += itterate(searchPoints);
}

console.log(`${total/TIMES}ms average`);
