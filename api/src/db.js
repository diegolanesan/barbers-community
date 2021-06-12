require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/barberscommunity`,
	{
		logging: false, // set to console.log to see the raw SQL queries
		native: false, // lets Sequelize know we can use pg-native for ~30% more speed
	}
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
	.filter(
		(file) =>
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
	)
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, "/models", file)));
	});

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

// const { Comentarios, Publicaciones, Usuario,  Seguidor} = sequelize.models;
const { Barber, ServiceBarber, Category, FaceType, HairType, Style, Client, Appointment, categoryBarber } = sequelize.models;

// Se va agregar a la tabla ServiceBarber el id del barbero
Barber.hasMany(ServiceBarber);
ServiceBarber.belongsTo(Barber);

// Se va a crear una tabla intermedia con los id de las tablas

ServiceBarber.belongsToMany(Category, {through:"categoryBarber"});
Category.belongsToMany(ServiceBarber, {through:"categoryBarber"});

// Se va a crear una tabla intermedia con los id de las tablas

Barber.belongsToMany(FaceType, {through:"faceTypeBarber"});
FaceType.belongsToMany(Barber, {through:"faceTypeBarber"});

// Se va a crear una tabla intermedia con los id de las tablas

Barber.belongsToMany(HairType, {through:"hairTypeBarber"});
HairType.belongsToMany(Barber, {through:"hairTypeBarber"});

// Se va a crear una tabla intermedia con los id de las tablas

Barber.belongsToMany(Style, {through:"styleBarber"});
Style.belongsToMany(Barber, {through:"styleBarber"});

// Se va a crear una tabla intermedia con los id de las tablas
Barber.belongsToMany(Client, {through:"appointment"});
Client.belongsToMany(Barber, {through:"appointment"});


// Se va a crear una tabla intermedia con los id de las tablas
Appointment.belongsToMany(ServiceBarber, {through:"detailAppointment"})
ServiceBarber.belongsToMany(Appointment, {through:"detailAppointment"})



// Se va agregar a la tabla Client el id del FaceType
FaceType.hasMany(Client); 
Client.belongsTo(FaceType);

// Se va agregar a la tabla Client el id del HairType
HairType.hasMany(Client); 
Client.belongsTo(HairType);

// Se va agregar a la tabla Client el id del Style
Style.hasMany(Client); 
Client.belongsTo(Style);









//+++++++++++++++++++++ Explicaciones sobre las relacines en la base de datos  ++++++++++++++++++
// // -----------------relacion de uno a uno (hasOne, belongsTo)----------------------------------
// // Se le agrega el idBarber a client
// ---Barber.hasOne(Client);
// // Se le agrega el idBarber a client
// ---Client.belongsTo(Barber);


// //---------------------relacion de uno a muchos (hasMany, belongsTo)----------------------------
// // Se le agrega el idBarber a client
// ---Barber.hasMany(Client);
// // Se le agrega el idBarber a client
// ---Client.belongsTo(Barber);

// //------------------------------------relacion de muchos a muchos  (belongsToMany, belongsToMany)-----------------------

// // se agrega el idBarber y idClient a una tabla intermedia que especificamos con through

// ---Barber.belongsToMany(Client, {through:"cita"})
// ---Client.belongsToMany(Barber, {through:"cita"})



// Nuevo comentario de prueba

module.exports = {
	...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
	conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
