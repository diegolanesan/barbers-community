const { Router } = require("express");

// Rutas para crear los servicios de un barbero

// Rutas del crud de servicio
const service = require("./service");

// Rutas del crud de typesHFS
const typesHFS = require("./styles");

// Rutas del crud de barberos
const barbers = require("./barbers.js");

// ruta del crud del cliente
const clients = require("./clients");

// ruta del crud de la cita
const appointments = require("./appointments");

// ruta del crud del detalle de cita
const detailAppointments = require("./detailAppointments");

// router CRUD from Invoice
const invoices = require("./invoices");

// router CRUD from Details Invoice
const detailInvoices = require("./detailInvoices");

// ruta del crud de categories
const categories = require("./categories.js");

// ruta para el envio de mail
const email = require("./email");

<<<<<<< Updated upstream
const cart = require("./cart")

=======
// ruta para gestionar pasarela de pago
>>>>>>> Stashed changes
const mercadoPago = require("./mercadoPago");

// ruta para gestionar desk client
const panelClient = require("./panelClient");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/clients/panel", panelClient);
router.use("/clients", clients);
router.use("/appointments", appointments);
router.use("/detailAppointments", detailAppointments);
router.use("/invoices", invoices);
router.use("/detailInvoices", detailInvoices);
router.use("/barbers", barbers);
router.use("/admin/service", service);
router.use("/admin/categories", categories);
router.use("/email", email);
router.use("/types", typesHFS);
router.use("/cart", cart);
router.use("/checkout", mercadoPago);
module.exports = router;
