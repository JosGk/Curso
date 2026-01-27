//const exprees = require('express');
import express from 'express';
import router from "./routes/index.ts";

const PORT = 3001;

const app = express();

app.get('/', (req, res) => {

    const {headers} = req;

    console.log('headers:', headers);

    //res.send('Viva venezuela con TypeScript y Express!');
    
    res.json({
        message: 'Viva venezuela nojoda'
    });

});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



