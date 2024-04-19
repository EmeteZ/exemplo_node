const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());

var aluno = {
    nome: "CorinthiansJunior",
    nota: 11.0,
    curso: "Corinthianismo"
}

app.get("/", (req,res)=>{
res.send(aluno)
})

app.post("/",(req,res)=>{
console.log(req.body);
res.send("ok");
})

app.listen(8000,()=>{
    console.log("Servidor Rodando")
})