const exp = require('constants');
const fs = require('fs');
const PATH="oglasi.json";

let procitajPodatkeIzFajla=()=>{
    let oglasi=fs.readFileSync(PATH, (err, data) => {
        if (err) throw err;
            return data;
    });
    return JSON.parse(oglasi);
}

let snimiOglase=(data)=>{
    fs.writeFileSync(PATH,JSON.stringify(data));
}

exports.sviOglasi = () => {
    return procitajPodatkeIzFajla();
}

exports.addOglas = (noviOglas) => {
    let id=1;
    let oglasi=this.sviOglasi();
    if(oglasi.length>0){
        id=oglasi[oglasi.length-1].id+1;
    }
    noviOglas.id=id;
    oglasi.push(noviOglas)
    snimiOglase(oglasi);
}

/*exports.addOglas = (kategorija, datum, cena, tekst, tagovi, email) => {
    let id=1;
    let oglasi=this.sviOglasi();
    if(oglasi.length>0){
        id=oglasi[oglasi.length-1].id+1;
    }
    let noviOglas={}
    noviOglas.id=id;
    noviOglas.kategorija=kategorija
    noviOglas.datum=datum
    noviOglas.cena=cena
    noviOglas.tekst=tekst
    noviOglas.tagovi=tagovi
    noviOglas.email=email
    oglasi.push(noviOglas)
    snimiOglase(oglasi);
} */
exports.getOglas = (id) => {
    return this.sviOglasi().find(x => x.id == id);
}

exports.getOglasByKategorija=(kategorija)=>{
    return this.sviOglasi().filter(oglas=>oglas.kategorija==kategorija)
}


exports.izmeniOglas=(id,body)=>{
    let oglasi=this.sviOglasi()
    //let oglas = oglasi.find(x=>x.id==id);
    let index=oglasi.findIndex((x=>x.id==id))
    oglasi[index]=body
    snimiOglase(oglasi)
}

exports.getOglasByCena=(cena)=>{
    return this.sviOglasi().filter(oglas=>parseInt(oglas.cena)>parseInt(cena))
}

exports.deleteOglas = (id) => {
    snimiOglase(this.sviOglasi().filter(oglas=>oglas.id!=id));
}




