const configs = require('../db/config.json');

function getClientConfig(clientId) {
    return configs.find(config => config.clientId == clientId);
}

module.exports = {
    getClientConfig
}