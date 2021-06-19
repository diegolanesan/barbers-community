const { Router } = require("express");
const router = Router();
const {
	getAppointments,
	getAppointmentById,
	addAppointment,
	addRelation,
	updateAppointment,
	deleteAppointment,
} = require("../controllers/appointments"); // updateClient

router.get("/", getAppointments);
router.get("/:id", getAppointmentById);
router.put("/:id", updateAppointment);
router.post("/add", addAppointment);
router.post("/addServiceToAppointment", addRelation);
router.delete("/:id", deleteAppointment);

module.exports = router;
