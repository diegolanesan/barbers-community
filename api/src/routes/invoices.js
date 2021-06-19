const { Router } = require("express");
const router = Router();
const {
	getInvoices,
	getInvoiceById,
	addInvoice,
	addRelation,
	updateInvoice,
	deleteInvoice,
} = require("../controllers/invoices"); // updateClient

router.get("/", getInvoices);
router.get("/:id", getInvoiceById);
router.put("/:id", updateInvoice);
router.post("/add", addInvoice);
router.post("/addServiceToInvoice", addRelation);
router.delete("/:id", deleteInvoice);

module.exports = router;
