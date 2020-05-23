import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import bodyParser from 'body-parser';

import JobAdvertisementController from './controllers/job-advertisement-controller.js';
import JobApplyService from './service/job-apply-service.js';
import Repository from './repository/repository.js';

const repository = new Repository();
const jobApplyService = new JobApplyService(repository);
const jobAdvertisementController = new JobAdvertisementController(jobApplyService);

const app = express();
const port = 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const __dirname = path.resolve(); //return the absolute path of the current working directory
app.use(express.static(path.join(__dirname, '/public')));

//Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',jobAdvertisementController.indexPage.bind(jobAdvertisementController));
app.get('/job-apply', jobAdvertisementController.jobApplyPage.bind(jobAdvertisementController));
app.post('/job-apply',jobAdvertisementController.jobApply.bind(jobAdvertisementController));
app.get('/candidates', jobAdvertisementController.candidatesPage.bind(jobAdvertisementController));
app.get('/candidate-status/:id', jobAdvertisementController.candidateStatus.bind(jobAdvertisementController));
app.post('/change-status/:id', jobAdvertisementController.changeStatus.bind(jobAdvertisementController));

app.listen(port, () => {
    repository.createDatabaseTable();
    console.log(`Example app listening at http://localhost:${port}`);
});