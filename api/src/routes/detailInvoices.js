const { Router } = require("express");
const router = Router();
const {
	getDetailInvoices,
	getDetailInvoiceById,
	addDetailInvoice,
	updateDetailInvoice,
	deleteDetailInvoice,
} = require("../controllers/detailInvoices"); // updateClient

router.get("/", getDetailInvoices);
router.get("/:id", getDetailInvoiceById);
router.put("/:id", updateDetailInvoice);
router.post("/add", addDetailInvoice);
router.delete("/:id", deleteDetailInvoice);

module.exports = router;
