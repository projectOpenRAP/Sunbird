let {
    addSunbirdData
} = require('./sunbird.middleware.js')
let {
    getHomePage,
    getEcarById,
    performSearch,
    telemetryData,
    extractFile,
    performRecommendation,
    createFolderIfNotExists
} = require('./sunbird.controller.js');
// let { uploadTelemetryToCloud } = require('./sunbird.telemetry_upload.js');

module.exports = app => {
    /*
        Sunbird API endpoints
    */
    app.post('/api/data/v1/page/assemble', getHomePage); // Needs fixing
    app.get('/api/content/v1/read/:contentID', getEcarById);
    app.post('/api/data/v1/telemetry', addSunbirdData, telemetryData);
    app.post('/api/composite/v1/search', performSearch);
}
