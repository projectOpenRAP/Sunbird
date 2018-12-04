let {
    init,
    createIndex,
    deleteIndex,
    getAllIndices
} = require('../../../searchsdk/index.js');

let initializeSbDB = () => {
    return init()
        .then(res => {
            return getAllIndices();
        })
        .then(res => {
            let availableIndices = JSON.parse(res.body).indexes;

            if (availableIndices.indexOf('sb.db') === -1) {
                return { message : 'Creating sunbird index now.' };
            } else {
                return deleteIndex({ indexName : 'sb.db' });
            }
        })
        .then(res => {
            res.message && console.log(res.message);
            return createIndex({ indexName : 'sb.db'});
        });
}

module.exports = {
    initializeSbDB
}