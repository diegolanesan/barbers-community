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
	Client,
	Barber,
	FaceType,
	HairType,
	Service,
	Style,
	ServiceBarber,
} = require("./src/db.js");

//init database with data default
const barbers = require("./src/utils/data/barbers");
const categories = require("./src/utils/data/categories");
const clients = require("./src/utils/data/clients");
const hairTypes = require("./src/utils/data/hairTypes");
const faceTypes = require("./src/utils/data/faceTypes");
const services = require("./src/utils/data/services");
const styles = require("./src/utils/data/styles");
const { Op } = require("sequelize");

const { PORT } = require("./src/utils/config/index");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
	server.listen(PORT, async function () {
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

			//Init model Client
			await Client.bulkCreate(clients);

			//Init model Style
			await Style.bulkCreate(styles);

			//Init model HairType
			await HairType.bulkCreate(hairTypes);

			//Init model FaceType
			await FaceType.bulkCreate(faceTypes);

			//Init model Barbers
			await Barber.bulkCreate(barbers);

			//Init ServiceBarbers
			//await ServiceBarber.bulkCreate(serviceBarbers);

			//Create relation Services with Barbers
			console.log("Create relation Services with Barbers...");
			for (let i = 0; i < barbers.length; i++) {
				const findService = await Service.findAll({
					where: {
						id: {
							[Op.in]: barbers[i].serviceBarbers,
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
						location: barbers[i].location,
						password: barbers[i].password,
						status: barbers[i].status,
						alias: barbers[i].alias,
						resume: barbers[i].resume,
						bio: barbers[i].bio,
						rating: barbers[i].rating,
						type: barbers[i].type,
					},
				});

				for (let j = 0; j < barbers[i].serviceBarbers.length; j++) {
					const findService = await Service.findByPk(
						barbers[i].serviceBarbers[j]
					);
					await ServiceBarber.findOrCreate({
						where: {
							barberId: i + 1,
							serviceId: findService.id,
							price: findService.price,
							name: findService.name,
							image: findService.image,
						},
					});
				}
			}

			console.log(
				`Base de datos conectada y precargada con registros en los modelos:\n\t-Clients(${clients.length})\n\t-Barbers(${barbers.length})\n\t-Categories(${categories.length})\n\t-Styles(${styles.length})\n\t-FaceTypes(${faceTypes.length})\n\t-HairTypes(${hairTypes.length}\n\t-Services(${services.length}\n\t-ServiceBarber(491)\n\nSe crean las relaciones: \n\tCategoryService\n\tServiceBarber`
			);
		} catch (error) {
			console.log(error);
		}
	});
});
// Quokka.js
//sudo lsof -i :3001
// kill processNumber (Node)
