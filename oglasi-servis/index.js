const { request, response } = require('express');
var express = require('express')
var oglasiServis=require('radOglasi-modul');
var app=express()
const port=3000
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/sviOglasi',(request, response)=>{
    response.send(oglasiServis.sviOglasi())
});

app.get('/getOglasByID/:id',(request, response)=>{
    response.send(oglasiServis.getOglas(request.params["id"]))
});

app.post('/addOglas',(request,response)=>{
    oglasiServis.addOglas(request.body)
    response.end("OK");
})

app.delete('/deleteOglas/:id',(request,response)=>{
    oglasiServis.deleteOglas(request.params["id"]);
    response.end("OK");
})

app.get('/izmeniOglas/:id',(request,response)=>{
    response.send(oglasiServis.getOglas(request.params["id"]));
})

app.post('/izmeniOglas/:id',(request,response)=>{
    console.log(request.body)
    oglasiServis.izmeniOglas(request.params["id"],request.body)
    response.end("OK");
})

app.get('/filterKat/',(request,response)=>{
    console.log(oglasiServis.getOglasByKategorija(request.query["kategorija"]))
    response.send(oglasiServis.getOglasByKategorija(request.query["kategorija"]))
})

app.get('/filterCen/',(request,response)=>{
    console.log(oglasiServis.getOglasByCena(request.query["cena"]))
    response.send(oglasiServis.getOglasByCena(request.query["cena"]))
})

app.listen(port,()=>{console.log(`startovan server na portu ${port}`)});