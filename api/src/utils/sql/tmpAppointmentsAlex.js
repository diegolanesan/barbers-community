	Appointments,
	Barber,
	categoryServices,
	Client,
	DetailAppointment,
	DetailInvoice,
	Invoice,
	Service,
  
  //--🦖 

const getDashboards = async (req, res, next) => {
	try {
		let invoiceAll = await Invoice.findAll({ include: { all: true } });

		if (invoiceAll) {
			let jsonInvoices = [];
			for (let i = 0; i < invoiceAll.length; i++) {
				let aux = {};
				//invoiceId
				aux["invoiceId"] = invoiceAll[i].dataValues.id;

				aux["date"] = invoiceAll[i].dataValues.date;
				aux["statusOrder"] = invoiceAll[i].dataValues.statusOrder;
				aux["statusPay"] = invoiceAll[i].dataValues.statusPay;

				//qryBarber
				aux["barberId"] = invoiceAll[i].dataValues.barberId;
				let barber = await Barber.findByPk(aux["barberId"]);
				aux["barberName"] = barber.name + " " + barber.lastname;

				//qryClient
				aux["clientId"] = invoiceAll[i].dataValues.clientId;
				let client = await Barber.findByPk(aux["clientId"]);
				aux["clientName"] = client.name + " " + client.lastname;

				//JSQL Services
				let detailInvoiceAll = await DetailInvoice.findAll({
					where: {
						invoiceId: aux["invoiceId"],
					},
				});

				if (detailInvoiceAll.length > 0) {
					let jsonInvoicesDetails = [];
					for (let j = 0; j < detailInvoiceAll.length; j++) {
						let auxServiceId = detailInvoiceAll[j].dataValues.serviceId;
						if (auxServiceId) {
							let auxServiceName = await Service.findByPk(auxServiceId);
							jsonInvoicesDetails.push(auxServiceName.dataValues);
						}
					}
					aux["service"] = jsonInvoicesDetails;
					console.log(jsonInvoicesDetails);
				}
				jsonInvoices.push(aux);
			}
			console.log(jsonInvoices);

			res.status(200).send(jsonInvoices);
		}
	} catch (e) {
		console.log(
			"[getInvoiceAll]The HTTP request could not be made successfully\n" + e
		);
	}
};

//-🦖  


  
  
  /*	USE: {
				 [Backend]: Query Appointments group by pending, approved, cancel
				 [Frontend]: TABs - Dashboard: Design and show*/
			quantityAppointments: {
				pending,
				approved,
				cancel,
			},

		/*	USE: {
				 [Backend]: Query status of the Client
				 [Frontend]: TABs - Dashboard: Design and show*/
			status: "Actived/Inactive",

		/*	USE: {
				 [Backend]: Query select All Appointments Order By Date & Time DESC,
				 						include field invoiceNumber of table Invoices
				 [Frontend]: TABs - Dashboard: Design and show in section History*/
			appointments={
				appointmentsId,
				date,
				time,
				status,//appointments.status
				invoiceId  //si status is not approved or cancel 
			},


		/*	USE: {
				 [Backend]: Quantity services by barbers
				 						Query select All Invoices of the instance Client current 
				            and combine table barbers group by count (invoiceId)
				 [Frontend]: TABs:
				 					 - Appointments:
													[Barber_List]*/

			resumeServices={
				total_services,
				servicesByBarber:[ {
					barberId,
					fullNameBarber,					
					quantityServices,
					lastService:{
						date,
						time,
						total_amount,
						services:[{							
							serviceId,
							name:""
						}]
					}
				}]
			},			
			
		/*	USE: {
				 [Backend]: Query select All Invoices of the instance Client current 
				            and combine table barbers, 										
				 [Frontend]: TABs:
				 					 - Appointments:
													[Orders],
													[Clone]: Invoice to Appointment - get first register of invoice list*/
			invoices= [
				{
					invoiceId,
					date,
					time,
					barberId,
					barberFullName,
					locationBarbers,
					total_amount,				
					appointmentsId,
					services: [
						{ serviceId: 1, name: "FADE" },
						{ serviceId: 2, name: "MOHICAN" },
					],
				},
			],


