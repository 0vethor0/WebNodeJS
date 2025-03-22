import express from 'express';

//server
const app = express();

app.set('port', 8080);
app.listen(app.get('port'));
console.log("escuchando en el puerto:", app.get('port'));

//rutas