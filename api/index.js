//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const {
	conn,
	Category,
	Barber,
	FaceType,
	HairType,
	Service,
	Style,
	ServiceBarber,
} = require("./src/db.js");
const { PORT } = require("./src/utils/config/index");

//init database with data default
const barbers = require("./src/utils/data/barbers");
const categories = require("./src/utils/data/categories");
const services = require("./src/utils/data/services");
const hairTypes = require("./src/utils/data/hairTypes");
const faceTypes = require("./src/utils/data/faceTypes");
const styles = require("./src/utils/data/styles");

const { Op } = require("sequelize");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
	console.log("base de datos conectada!");
	server.listen(PORT, async () => {
		console.log(`Server run & listening at ${PORT}`); // eslint-disable-line no-console
		try {
			//Load Services
			await Service.bulkCreate(services);

			//Create relation Services with Categories
			for (let i = 0; i < categories.length; i++) {
				const findService = await Service.findAll({
					where: {
						id: {
							[Op.in]: categories[i].categoryServices,
						},
					},
				});

				let [myCategory] = await Category.findOrCreate({
					where: {
						name: categories[i].name,
						description: categories[i].description,
						image: categories[i].image,
					},
				});
				await myCategory.setServices(findService);
			}

			await Style.bulkCreate(styles); //Init model Style
			await FaceType.bulkCreate(faceTypes); //Init model FaceType
			await HairType.bulkCreate(hairTypes); //Init model HairType

			//Create relation Styles with Barbers
			for (let i = 0; i < barbers.length; i++) {
				const findStyle = await Style.findAll({
					where: {
						id: {
							[Op.in]: barbers[i].styleBarber,
						},
					},
				});

				//faceTypeBarber
				const findFaceType = await FaceType.findAll({
					where: {
						id: {
							[Op.in]: barbers[i].faceTypeBarber,
						},
					},
				});

				//hairTypeBarber
				const findHairType = await HairType.findAll({
					where: {
						id: {
							[Op.in]: barbers[i].hairTypeBarber,
						},
					},
				});

				let [myBarber] = await Barber.findOrCreate({
					where: {
						name: barbers[i].name,
						lastname: barbers[i].lastname,
						email: barbers[i].email,
						image: barbers[i].image,
						mobile: barbers[i].mobile,
						address: barbers[i].address,
						number: barbers[i].number,
						city: barbers[i].city,
						state: barbers[i].state,
						country: barbers[i].country,
						password: barbers[i].password,
						status: barbers[i].status,
						alias: barbers[i].alias,
						resume: barbers[i].resume,
						bio: barbers[i].bio,
						rating: barbers[i].rating,
						type: barbers[i].type,
						slots: barbers[i].slots,
					},
				});
				//console.log(myBarber);

				// await myBarber.setStyles(findStyle);
				// await myBarber.addFaceType(findFaceType);
				// await myBarber.addHairType(findHairType);
			}

			//Init model Client
			//await Client.bulkCreate(clients);

			//Init model Barbers
			//await Barber.bulkCreate(barbers);

			//Create relation Services with Barbers
			console.log(
				"Create relation Services with Barbers...\nPlease Wait 25seg"
			);
			for (let i = 0; i < barbers.length; i++) {
				//Init serviceBarber
				for (let j = 0; j < barbers[i].serviceBarbers.length; j++) {
					let serviceId = barbers[i].serviceBarbers[j];
					const findService = await Service.findByPk(serviceId);
					await ServiceBarber.findOrCreate({
						where: {
							barberId: i + 1,
							serviceId: findService.id,
							price: findService.price,
							//name: findService.name,
							//image: findService.image,
						},
					});
				}
			}
		} catch (error) {
			console.log(error);
		}
	});
});
// Quokka.js
//sudo lsof -i :3001
// kill processNumber (Node)
// const { PORT } = require("./src/utils/config/index");