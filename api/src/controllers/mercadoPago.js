const mercadopago = require("mercadopago");


mercadopago.configure({
	access_token:process.env.ACCESS_TOKEN
  });
const postPay = async (req, res, next) => {
	let { products, user } = req.body;
	items =
		products &&
		products.map((product) => {
			return {
				title: product.item.serviceName,
				id: product.id,
				quantity: 1,
				unit_price: product.price,
			};
		});
	let preference = {
		items,
		payer: {
			email:user.email,
			name: user.name,
		},
		back_urls: {
			failure: "http://localhost:3000/clients/dashboard",
			pending: "http://localhost:3000/clients/dashboard",
			success: "http://localhost:3000/clients/dashboard",
		},
		marketplace: "BARBERSCOMMUNITY",
	};
	const response = await mercadopago.preferences.create(preference);
	console.log(response);
	res.json(response);
};

const getPay = async (req, res, next) => {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id,
	});
};
module.exports = { postPay, getPay };

// USER DE PRUEBA 
// {
//     "id": 780183404,
//     "nickname": "TESTFZQTGGPD",
//     "password": "qatest7431",
//     "site_status": "active",
//     "email": "test_user_16621248@testuser.com"
// }


// CLIENT DE PRUEBA
// {
//     "id": 780213945,
//     "nickname": "TETE7591024",
//     "password": "qatest9408",
//     "site_status": "active",
//     "email": "test_user_99057707@testuser.com"
// }