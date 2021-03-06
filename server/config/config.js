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
//===========================

let urlDB

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//===========================
//Vencimiento del Token
//===========================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD1_TOKEN = 60 * 60 * 24 * 30;

//===========================
//SEED de autenticación
//===========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//===========================
//Google Cliend ID
//===========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '982093329433-0rmlr2n23k081lf9u3om5k09io027v1v.apps.googleusercontent.com';