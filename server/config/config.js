//===========================
//PUERTO
//===========================

process.env.PORT = process.env.PORT || 3000;


//===========================
//ENTORNO
//===========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//===========================
//Base de datos
//===========================l

let urlDB

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://maxico:jkgNJqsHR51WLLVU@cluster0-1jjdp.mongodb.net/cafe';
}

process.env.URLDB = urlDB;