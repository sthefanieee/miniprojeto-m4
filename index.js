const express = require('express');
const app = express();
app.use(express.json());

const filmesRoutes = require('./src/routes/filmesRoutes');
const diretorasRoutes = require('./src/routes/diretorasRoutes');
const personagensRoutes = require('./src/routes/personagensRoutes');
const apoioRoutes = require('./src/routes/apoioRoutes');

app.use('/filmes', filmesRoutes);
app.use('/diretoras', diretorasRoutes);
app.use('/personagens', personagensRoutes);
app.use('/organizacoes', apoioRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));