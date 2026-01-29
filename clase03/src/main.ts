//const exprees = require('express');
import express from 'express';
import configrouter from "./routes/index.ts";
import morgan from 'morgan'

const PORT = 3001;

const app = express();

app.use(morgan('tiny'));
app.use(express.json());

app.get('/', (req, res) => {

    const {headers} = req;

    console.log('headers:', headers);

    //res.send('Viva venezuela con TypeScript y Express!');
    
    res.json({
        message: 'Viva venezuela nojoda'
    });

});

app.use('/api', configrouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



