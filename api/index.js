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
	Appointment,
	Category,
	Client,
	DetailAppointment,
	Barber,
	FaceType,
	HairType,
	Service,
	Style,
	StyleBarber,
	ServiceBarber,
} = require("./src/db.js");

//init database with data default
const appointments = require("./src/utils/data/appointments");
const barbers = require("./src/utils/data/barbers");
const categories = require("./src/utils/data/categories");
const clients = require("./src/utils/data/clients");
const detailAppointments = require("./src/utils/data/detailAppointments");
const hairTypes = require("./src/utils/data/hairTypes");
const faceTypes = require("./src/utils/data/faceTypes");
const services = require("./src/utils/data/services");
const styles = require("./src/utils/data/styles");
const { Op } = require("sequelize");

const { PORT } = require("./src/utils/config/index");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
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
				await myBarber.setStyles(findStyle);
				await myBarber.addFaceType(findFaceType);
				await myBarber.addHairType(findHairType);
			}

			//Init model Client
			await Client.bulkCreate(clients);

			//Init model Barbers
			//await Barber.bulkCreate(barbers);

			//Init model Appointments
			await Appointment.bulkCreate(appointments);

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
							name: findService.name,
							image: findService.image,
						},
					});
				}
			}
			//Init model DetailAppointments
			await DetailAppointment.bulkCreate(detailAppointments);

			console.log(
				`Base de datos conectada y precargada con registros en los modelos:\n\t[TABLE]\t\t\t#ROWS\n\tappointments\t\t${appointments.length}\n\tbarbers\t\t\t${barbers.length}\n\tcategories\t\t${categories.length}\n\tclients\t\t\t${clients.length}\n\tfaceTypes\t\t${faceTypes.length}\n\thairTypes\t\t${hairTypes.length}\n\tservices\t\t${services.length}\n\tstyles\t\t\t${styles.length}\n\nSe crean las relaciones: \n\tcategoryService\t\t28\n\tdetailAppointments\t${detailAppointments.length}\n\tfaceTypeBarber\t\t154\n\thairTypeBarber\t\t101\n\tserviceBarbers\t\t558\n\tstyleBarber\t\t210`
			);
		} catch (error) {
			console.log(error);
		}
	});
});
// Quokka.js
//sudo lsof -i :3001
// kill processNumber (Node)
