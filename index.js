import express from 'express';
import CandidatoRouter from './src/routes/candidatoRouter.js'; 
import CandidatoViewRouter from './src/routes/candidatoViewRouter.js';
import painelRouter from './src/routes/painelRouter.js';
import path from 'path';
import session from 'express-session';
const app = express();
app.set('view engine', 'ejs');
app.set(`views`, path.join(path.resolve(), `src`, `views`));
app.use(express.json())
app.use(session({
  secret: '8C2817634A40868FBDEA1BC456123582',
  resave: false,
  saveUninitialized: true
}))

app.use(express.urlencoded({ extended: true })); 
//middleware para ler dados do formulário

//chave base da url
app.use('/api', CandidatoRouter);
app.use('/', CandidatoViewRouter);
app.use('/painel', painelRouter)

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});

//npm install express-session