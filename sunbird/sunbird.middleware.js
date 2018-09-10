let {
    initializeSunbirdData
} = require('./sunbird.init.js')

let sunbirdData = {};

let addSunbirdData = (req, res, next) => {
    req.sunbirdData = sunbirdData;
    next();
}

initalizeMiddleWare = () => {
    initializeSunbirdData('/opt/opencdn/appServer/plugins/sunbird/profile.json').then(value => {
        sunbirdData = value;
    });
}

initalizeMiddleWare();

module.exports = {
    addSunbirdData
}
