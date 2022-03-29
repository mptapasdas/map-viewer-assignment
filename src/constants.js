export const chargerDetails = [
    {
        code: 0,
        lat: 28.6213197,
        lng: 76.9715311,
        type: "Rapid",
        location: "Nazafgadd",
    },
    {
        code: 1,
        lat: 28.6933326,
        lng: 76.9129216,
        type: "Slow",
        location: "Bahadurgarh",
    },
    {
        code: 2,
        lat: 28.6213197,
        lng: 76.9715311,
        type: "Rapid",
        location: "Nazafgadd",
    },
    {
        code: 3,
        lat: 28.7272081,
        lng: 76.9831537,
        type: "Rapid",
        location: "Kanjhwala",
    },
    {
        code: 4,
        lat: 28.7407102,
        lng: 77.0576577,
        type: "Rapid",
        location: "Rohni",
    },
    {
        code: 5,
        lat: 28.6210599,
        lng: 77.0729724,
        type: "Rapid",
        location: "Janakpuri",
    },
    {
        code: 6,
        lat: 28.6471944,
        lng: 76.9528349,
        type: "Rapid",
        location: "Pink Line",
    },
    {
        code: 7,
        lat: 28.672304,
        lng: 77.169902,
        type: "Rapid",
        location: "Indira Colony",
    },
];

export const distance = (lat1, lng1, lat2, lng2) => {
    if (lat1 === lat2 && lng1 === lng2) {
        return 0;
    } else {
        var radlat1 = (Math.PI * lat1) / 180;
        var radlat2 = (Math.PI * lat2) / 180;
        var theta = lng1 - lng2;
        var radtheta = (Math.PI * theta) / 180;
        var dist =
            Math.sin(radlat1) * Math.sin(radlat2) +
            Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515 * 1000;
        dist = dist * 1.609344;
        return dist;
    }
};

export const paragraph =
    "I have spent around 4-5 hours on this project. Around 1 hour for going through documentation and rest for writing the code. My main goal was just to render the charging stations on the map. \n This map needs an API Key which requires a Credit Card validation, which I dont have right now. So it may show that Map can not be viewed properly. Also, I did not spend much time on styling as of now.";
