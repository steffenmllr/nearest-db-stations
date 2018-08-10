const test = require('tape');
const nearestStations = require('.');

test('nearest-db-station', function (t) {

    t.test('nearest stations in Alexanderplatz', function(t) {
        t.plan(1);
        const latitude = 52.521919;
        const longitude = 13.413215;
        const stations = nearestStations(latitude, longitude);

        t.equal(stations.length, 5, 'Should find 5 stations per default at Alexanderplatz.');
    });

    t.test('nearest stations in Postdamer Platz', function(t) {
        t.plan(2);

        const latitude = 52.509647;
        const longitude = 13.375944;
        const stations = nearestStations(latitude, longitude);

        t.equal('8089032', stations[0].id, 'Potsdamer Platz should be the first item');
        t.equal(30, stations[0].distance, 'Potsdamer Platz should have a distance of 30');
    });

    t.test('should accept a maxDistance', function(t) {
        t.plan(1);

        const latitude = 52.509647;
        const longitude = 13.375944;
        const maxDistance = 100;
        const stations = nearestStations(latitude, longitude, maxDistance);

        t.ok(stations.length === 1, 'should find one item');
    });

    t.end();

});
