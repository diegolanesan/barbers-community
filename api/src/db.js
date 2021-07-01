require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { userInfo } = require("os");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const sequelize = new Sequelize(
    //`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/postgres`, // LOCAL DB
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/barberscommunity`, // LOCAL DB
    // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_USER}`,           // CLOUD DB (ELEPHANTSQL) --> DATOS EN CARPETA UTILS-SQL-elephantSQL
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
const {

    Barber,
    ServiceBarber,
    Category,
    FaceType,
    HairType,
    Style,
    Client,
    Appointment,
    Service,
    DetailAppointment,
    Invoice,
    Cart,
    Items,
    Review,
    Wishlist
} = sequelize.models;
// Se va a crear una tabla intermedia con los id de las tablas
Barber.belongsToMany(Service, { through: "serviceBarber" });
Service.belongsToMany(Barber, { through: "serviceBarber" });
// Se va a crear una tabla intermedia con los id de las tablas
Service.belongsToMany(Category, { through: "categoryService" });
Category.belongsToMany(Service, { through: "categoryService" });
// Se va a crear una tabla intermedia con los id de las tablas
Barber.belongsToMany(FaceType, { through: "faceTypeBarber" });
FaceType.belongsToMany(Barber, { through: "faceTypeBarber" });
// Se va a crear una tabla intermedia con los id de las tablas
Barber.belongsToMany(HairType, { through: "hairTypeBarber" });
HairType.belongsToMany(Barber, { through: "hairTypeBarber" });
// Se va a crear una tabla intermedia con los id de las tablas
Barber.belongsToMany(Style, { through: "styleBarber" });
Style.belongsToMany(Barber, { through: "styleBarber" });
// Barber.belongsToMany(Style, { through: "styleBarber" });
// Style.belongsToMany(Barber, { through: "styleBarber" });
// ¿Cómo establezco las relaciones entre el cliente y los styles/hairTypes/faceTypes?}

// Style.hasMany(Client);
// Client.belongsTo(Style);

// ¿Cómo establezco las relaciones entre el cliente y los styles/hairTypes/faceTypes?}
// Style.hasMany(Client);
// Client.belongsTo(Style);

HairType.hasMany(Client);
Client.belongsTo(HairType);

FaceType.hasMany(Client);
Client.belongsTo(FaceType);

Style.hasMany(Client);
Client.belongsTo(Style);
// FaceType.hasMany(Client);
// Client.belongsTo(FaceType);
// HairType.hasMany(Client);
// Client.belongsTo(HairType);

// Relaciones de carrito de compras
Client.hasMany(Cart)
Cart.belongsTo(Client)

Cart.belongsToMany(ServiceBarber, {through: "item"})
ServiceBarber.belongsToMany(Cart, { through: "item" })

Client.hasMany(Wishlist)
Wishlist.belongsTo(Client)

Wishlist.belongsToMany(ServiceBarber, {through: "favorite"})
ServiceBarber.belongsToMany(Wishlist, { through: "favorite" })

Client.hasMany(Review)
Review.belongsTo(Client)
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