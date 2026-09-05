import express from 'express';
import CandidatoRouter from './src/routes/candidatoRouter.js'; 
import CandidatoViewRouter from './src/routes/candidatoViewRouter.js';
import path from 'path';
const app = express();
app.set('view engine', 'ejs');
app.set(`views`, path.join(path.resolve(), `src`, `views`));
app.use(express.json());
//chave base da url
app.use('/api', CandidatoRouter);
app.use('/', CandidatoViewRouter);






app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});