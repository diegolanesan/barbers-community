const mercadopago = require("mercadopago");

//REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel/credentials
mercadopago.configurations.setAccessToken(
	"TEST-3888730639457536-062216-c6b57594025c0e15b256ff1570e5f33e-291816584"
);

const postPay = async (req, res, next) => {
	let { products, user } = req.body;
	items =
		products &&
		products.map((product) => {
			return {
				title: product.name,
				id: product.id,
				quantity: Number(product.quantity),
				unit_price: product.price,
			};
		});
	let preference = {
		items,
		payer: {
			email: user.email,
			name: user.firstName + " " + user.lastName,
		},
		back_urls: {
			failure: "http://localhost:3001/checkout/payment",
			pending: "http://localhost:3001/checkout/payment",
			success: "http://localhost:3001/checkout/payment",
		},
		marketplace: "BARBERSCOMMUNITY",
	};
	const response = await mercadopago.preferences.create(preference);
	console.log(response);
	res.json(response);
};

const getPay = async (req, res, next) => {
	response.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id,
	});
};
module.exports = { postPay, getPay };
