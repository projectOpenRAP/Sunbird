
let { addEkStepData } = require('./ekstep.middleware.js')
let { getHomePage, getEcarById,  performSearch, telemetryData, extractFile, performRecommendation, createFolderIfNotExists } = require('./ekstep.controller.js');
// let { uploadTelemetryToCloud } = require('./ekstep.telemetry_upload.js');

module.exports = app => {
    /*
        Sunbird API endpoints
    */
    app.post('/api/data/v1/page/assemble', getHomePage); // Needs fixing
    app.get('/api/content/v1/read/:contentID', getEcarById);
    app.post('/api/data/v1/telemetry', addEkStepData, telemetryData);
    app.post('/api/composite/v1/search', performSearch);

    // app.post('/api/content/v3/recommend', performRecommendation);
}
