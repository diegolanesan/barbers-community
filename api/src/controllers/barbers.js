const { Barber, ServiceBarber, faceTypeBarber, styleBarber, hairTypeBarber, HairType, FaceType, Style } = require("../db");
require("dotenv").config();
const { Op } = require("sequelize");
const jwt = require('jsonwebtoken');


// Ruta que devuelve todos los barberos

const getAllBarbers = async(req, res)=>{
    const barber = await Barber.findAll({
		include:[ { model: FaceType }, {model: HairType}, { model: Style } ] 
	});
    if(barber){
		let aux = barber
		for (let i = 0; i < aux.length; i++) {
			faces = []
			hairs = []
			barberStyles = []
			if(aux[i].dataValues.faceTypes) {
				aux[i].dataValues.faceTypes.map(b => faces.push(b.dataValues.description))
			}
			if(aux[i].dataValues.hairTypes) {
				aux[i].dataValues.hairTypes.map(b => hairs.push(b.dataValues.description))
			}
			if(aux[i].dataValues.styles) {
				aux[i].dataValues.styles.map(b => barberStyles.push(b.dataValues.description))
			}
			aux[i].dataValues.faces = faces
			aux[i].dataValues.hairs = hairs
			aux[i].dataValues.barberStyles = barberStyles
		}
        res.send(aux)
    }else{
        res.status(400).send("No hay barberos en la base de datos")
    }
};

// filtra a los barberos por faceType hairType Style
const getHFStypes = async (req, res)=>{
	const {id, type} = req.query;
	if(type === "faceType"){
		const face = await FaceType.findByPk(id, {include:Barber});
		if(face){
			res.send(face.barbers)
		}else{
			res.status(400).send("No se encontro el tipo de cara")
		}
	};
	if(type === "hairType"){
		const hair = await HairType.findByPk(id, {include:Barber});
		if(hair){
			res.send(hair.barbers)
		}else{
			res.status(400).send("No se encontro el tipo de cara")
		}
	};
	if(type === "style"){
		const style = await Style.findByPk(id, {include:Barber});
		if(style){
			res.send(style.barbers)
		}else{
			res.status(400).send("No se encontro el tipo de cara")
		}
	}
	
}



// Ruta que devuelve todos los barberos según su type
const getTypeBarbers = async (req, res) => {
	const { type } = req.params;
	const barber = await Barber.findAll({
		where: {
			type,
		},
	});
	if (barber) {
		res.send(barber);
	} else {
		res.status(400).send("No hay barberos en la base de datos");
	}
};
//Ruta que devuelve los barbero según su id

const getByIdBarbers = async (req, res) => {
	const idBarber = req.params.id;
	const resul = await Barber.findOne({where :{id: idBarber}, include : [{model: HairType},{model: FaceType}]});
	if (resul) {
		let aux = resul
			faces = []
			hairs = []
			if(aux.dataValues.hairTypes) {
				aux.dataValues.hairTypes.map(b => hairs.push(b.dataValues.id))
			}
			if(aux.dataValues.faceTypes) {
				aux.dataValues.faceTypes.map(b => faces.push(b.dataValues.id))
			}
			aux.dataValues.faces = faces
			aux.dataValues.hairs = hairs
		res.send(aux);
	} else {
		res.status(400).send("No se encontro el barbero");
	}
};

//Ruta que devuelve a los barberos según su nombre

const getByNameBarbers = async (req, res) => {
	const name = req.params.name;
	const resul = await Barber.findAll({
		where: {
			name: {
				[Op.iLike]: `%${name}%`,
			},
		},
	});

	if (resul) {
		res.send(resul);
	} else {
		res.send("No se ha encontrado al barbero");
	}
};

// Ruta para crear barberos
const postBarbers = async (req, res) => {
	const { barber } = req.body;
	const resul = await Barber.create(barber);

	if (resul) {
		const barbersAll = await Barber.findAll();
		res.send(barbersAll);
	} else {
		res.status(400).send("No se ha creado correctamente el barbero");
	}
};

// Ruta para modificar a los barberos
const putBarbers = async (req, res) => {
	const idBarber = req.params.id;
	const { barberModify } = req.body;
	let barber = await Barber.findByPk(idBarber);
	if (barber) {
		barber = barber.update(barberModify);
		res.send(barber);
	} else {
		res.send("No se ha podido modificar al barbero");
	}
};

// Ruta para eliminar a los barberos
const deleteBarbers = async (req, res) => {
	const idBarber = req.params.id;
	let barber = await Barber.findByPk(idBarber);
	if (barber) {
		barber = barber.destroy();
		res.send("Eliminación exitosa");
	} else {
		res.status(400).exportssend("No se ha podido eliminar al barbero");
	}
};

// Crea una relación entre  barbero y un servicio
const relationServiceBarber = async (req, res) => {
	const { barberId, serviceId } = req.body;
	const resul = await ServiceBarber.create({ barberId, serviceId });
	if (resul) {
		res.send("se ha agregado el servicio al barbero");
	} else {
		res.send("No se ha agregado el servicio al barbero");
	}
};

// Agregar un tipo de cara a un barbero
const relationFaiceType = async (req, res)=>{
	const {barberId, faceTypeId} = req.body;
	console.log(faceTypeId)
	for(let i = 0; i < faceTypeId.length; i++) {
	const resul = await faceTypeBarber.create({barberId, faceTypeId: faceTypeId[i]});
	if (resul) {
		res.send("se ha agregado el tipo al barbero");
	} else {
		res.send("No se ha agregado el servicio al barbero");
	}}
};

// Agregar un tipo de pelo a un barbero
const relationHairType = async (req, res)=>{
	const {barberId, hairTypeId} = req.body;
	console.log(hairTypeId)
	for(let i = 0; i < hairTypeId.length; i++) {
		const resul = await hairTypeBarber.create({barberId, hairTypeId : hairTypeId[i]});
		if (resul) {
			res.send("se ha agregado el tipo al barbero");
		} else {
			res.send("No se ha agregado el servicio al barbero");
		}
	}
};

// Agregar un estilo a un barbero
const relationStyle = async (req, res)=>{
	const {barberId, styleId} = req.body;
	const resul = await styleBarber.create({barberId, styleId});
	if (resul) {
		res.send("se ha agregado el tipo al barbero");
	} else {
		res.send("No se ha agregado el servicio al barbero");
	}
};

 const loginBarbers = async (req, res) => {

	const { username, password } = req.body;
	const secret = "secret"
    try {
        const oldUser = await Barber.findOne({where: { email: username }});
        if (!oldUser) return res.status(404).json({ message: { message: "User doesn`t exist", style: "red" } });

        //const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        if (!password) return res.status(400).json({ message: { message: 'Invalid Password', style: "red" } });

        const token = jwt.sign({ email: oldUser.email, id: oldUser.id }, secret, { expiresIn: '1hr' });
        res.status(201).json({ result: oldUser, token, message: { message: "Log in Successful", style: "green" } });
    } catch (error) {
        res.status(500).json({ message: { message: 'Something went wrong', style: "red" } });
        console.log(error);
        res.status(500).json({message:{message:'Something went wrong', style:"red"}});
    }
}





module.exports = {
	getAllBarbers,
	postBarbers,
	getByIdBarbers,
	getByNameBarbers,
	putBarbers,
	deleteBarbers,
	getTypeBarbers,
	relationServiceBarber,
	relationFaiceType,
	relationHairType,
	relationStyle,
	getHFStypes,
	loginBarbers,
};