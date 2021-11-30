var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var jsonParser = bodyParser.json();
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors({
  origin: '*'
}));

app.post('/enviar-formulario', jsonParser, function(req,res){
  console.log(req.body);
  var nombreContacto = req.body.nombreContacto;
  if (!nombreContacto) {
    return res.status(400).send("Falta el nombre de contacto");
  }
  res.cookie("PW_2021-CV_Contacto", nombreContacto);
  res.send("CORRECTO!");
});


app.get('/experiencia-laboral',function(req,res){
  experiencia_laboral = {
    "experiencia-laboral":[
      {
        "empresa": "Atek Logistica",
        "puesto": "SOFTWARE ENGINEER",
        "descripcion": "Desarrollo de software para Cousa",
        "fechaInicio": "2021",
        "fechaFin": "Actualidad"
      },
      {
        "empresa": "Estado",
        "puesto": "Atención al público",
        "descripcion": "Voluntariado",
        "fechaInicio": "2019",
        "fechaFin": "2019"
      },
      
      {
        "empresa": "Yo",
        "puesto": "Docente",
        "descripcion": "clases a estudiantes liceales",
        "fechaInicio": "2008",
        "fechaFin": "2019"
      },
      {
        "empresa": "Varias",
        "puesto": "SOFTWARE DEVELOPER FREELANCE",
        "descripcion": "Mantenimiento del sistema y de la red. Trabajo con clientes en Call Center",
        "fechaInicio": "2015",
        "fechaFin": "2021"
      },
    ]
  }
  res.send(experiencia_laboral);
})

app.post("/*", jsonParser, function(re, res) {
  res.status(404).send("404 - No fue encontrado");
});

app.listen(process.env.PORT || 3000, (a) => {
  console.log("Servidor disponible en http://localhost:3000")
});
 
module.exports = app;