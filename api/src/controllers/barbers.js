const { Barber, ServiceBarber, faceTypeBarber, styleBarber, hairTypeBarber, HairType, FaceType, Style, Appointments } = require("../db");
require("dotenv").config();
const { Op } = require("sequelize");
const jwt = require('jsonwebtoken');


// Ruta que devuelve todos los barberos

const getAllBarbers = async(req, res)=>{
    const barber = await Barber.findAll({
        include:[ {all: true, nested: true} ] 
    });
    //console.log(barber)
    if(barber){
        let aux = barber
        for (let i = 0; i < aux.length; i++) {
            category = []
            style = []
            type = []
            if(aux[i].dataValues.styles) {
                aux[i].dataValues.styles.map(b => style.push(b.dataValues.description))
            }
            if(aux[i].dataValues.services) {
                aux[i].dataValues.services.map(b => category.push(
                    b.dataValues.categories.map(c => c.name)
                ))
            }
            // if(aux[i].dataValues.styles) {
            //  aux[i].dataValues.styles.map(b => barberStyles.push(b.dataValues.description))
            // }
            aux[i].dataValues.categoryBarber = category.flat()
            aux[i].dataValues.styleBarber = style
            
        }
        console.log(aux)
        
        res.send(aux)
    }else{
        res.status(400).send("No hay barberos en la base de datos")
    }
};

const getBannedBarbers = (req, res, next) => {
    try {
        Barber.findAll({ where: {status: false }})
        .then((result) => {
            res.status(200).send(result);
        })
    } catch {
        console.log("Barber not found!");
    }
}

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
	const resul = await Barber.findOne(
		{where :{id: idBarber}, include : [{model: HairType},{model: FaceType},{model: Style}]});
	if (resul) {
		let aux = resul
		console.log(aux.dataValues.styles, "KENTAROOOOOOOOOOO")
			faces = []
			hairs = []
			barberStyles = []
			if(aux.dataValues.hairTypes) {
				aux.dataValues.hairTypes.map(b => hairs.push(b.dataValues.id))
			}
			if(aux.dataValues.faceTypes) {
				aux.dataValues.faceTypes.map(b => faces.push(b.dataValues.id))
			}
			if(aux.dataValues.styles) {
				aux.dataValues.styles.map(b => barberStyles.push(b.dataValues.id))
			}
			aux.dataValues.faces = faces
			aux.dataValues.hairs = hairs
			aux.dataValues.barberStyles = barberStyles
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
	const secret = "secret"
	const { barber } = req.body;
	const resul = await Barber.create(barber);
	const token = jwt.sign({ email: resul.email, id: resul.id }, secret, { expiresIn: '1hr' });

	if (resul) {
		await Barber.findAll();
		res.send(token);
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
	await faceTypeBarber.destroy({where:{barberId: barberId}})
	for(let i = 0; i < faceTypeId.length; i++) {
	await faceTypeBarber.create({barberId, faceTypeId: faceTypeId[i]});
	}
	if (faceTypeBarber) {
		res.send("se ha agregado el tipo al barbero");
	} else {
		res.send("No se ha agregado el servicio al barbero");
	}
};

// Agregar un tipo de pelo a un barbero
const relationHairType = async (req, res)=>{
	const {barberId, hairTypeId} = req.body;
	await hairTypeBarber.destroy({where:{barberId: barberId}})
	for(let i = 0; i < hairTypeId.length; i++) {
		await hairTypeBarber.create({barberId, hairTypeId : hairTypeId[i]});
	}
	if (hairTypeBarber) {
		res.send("se ha agregado el tipo al barbero");
	} else {
		res.send("No se ha agregado el servicio al barbero");
	}
};

// Agregar un estilo a un barbero
const relationStyle = async (req, res)=>{
	const {barberId, styleId} = req.body;
	await styleBarber.destroy({where:{barberId: barberId}})
	for(let i = 0; i < styleId.length; i++) {
		await styleBarber.create({barberId, styleId : styleId[i]});
	}
	if (styleBarber) {
		res.send("se ha agregado el tipo al barbero");
	} else {
		res.send("No se ha agregado el servicio al barbero");
	}
};

 const loginBarbers = async (req, res) => {

	const { email, password } = req.body;
	const secret = "secret"
    try {
        const oldUser = await Barber.findOne({where: { email: email }});
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

const googleLoginBarbers = async (req, res) => {
	const {
        email,
        name,
        lastname
    } = req.body;
	
	const secret = "secret"

    if (!req.body) {
        res.status(403).end();
    }
    try {
        const oldUser = await Barber.findOne({where : { email } });
        if (oldUser) {
            const token = jwt.sign({ id: oldUser.id, email: oldUser.email, name: oldUser.name }, secret, { expiresIn: '1hr' })
            return res.status(201).json({ result: oldUser, token, message: { message: "Log in Successful" } })
        } else {
            const result = await Barber.create({
                email,
                name,
                lastname,
            })
            const token = jwt.sign({ id: result.id, email: result.email, name: result.name }, secret, { expiresIn: '1hr' });
            return res.status(201).json({ result, token, message: { message: "Registered with Google" } })
        }
    } catch (error) {
        console.log("ERROR", error)
        return res.status(500).json({ message: { message: "Something went wrong" } });
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
	googleLoginBarbers,
	getBannedBarbers
};