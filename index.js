import express from 'express';
import { appConfig } from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/bpmRoutes';

const app = express();
const { PORT } = appConfig;

// mongoose connection(mongoDB connection)
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/BPM_db', {
    useNewUrlParser: true
});

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// serving static files
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`BPM Server App is listening on ${PORT}`);
})

routes(app, PORT)

