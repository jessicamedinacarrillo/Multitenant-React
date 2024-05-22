const express = require('express');
const cors = require('cors');
const Config = require('./model/config.model.js');

// Setup
const PORT = process.env.SERVER_PORT || 4000;
const app = express();
app.use(cors());

// Routes
app.get('/getConfig', async function (req, res) {
    // Receive the clientId from our client-side app
    const { clientId } = req.query;

    // Find the config for that particular clientId
    const clientConfig = Config.getClientConfig(clientId);

    if(!clientConfig){
        // Return an error if it's not found
        return res.status(404).send({ error: `Config not found for this clientId: ${clientId}` });
    }

    // Send the config if found
    res.send(clientConfig);
});

// Run server
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});