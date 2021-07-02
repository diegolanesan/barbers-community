-- COMO USAR PARA INJECTAR DATOS CON VALORES DEL SISTEMA.

-- 1. Detener la ejecucion de la API
-- 2. Eliminar database 
-- DROP DATABASE barberscommunity;
-- 3. Crear la base de datos
-- CREATE DATABASE barberscommunity;
-- 4.Ejecutar ...api/ npm start (Para crear la estructura)
--5. Ejecutar sentencias SQL

-- REEMPLAZA TU RUTA O ejecuta desde la ubicacion del archivo. [1.injectData.sql]
-- desde la consola, no es necesario que ingreses al psql.
-- Note:
-- Of course, you will get a fatal error for authenticating, because you do not include a user name...
-- Try this one, it is OK for me :)
-- psql -U username -d myDataBase -a -f [REEMPLAZA TU RUTA]/myInsertFile.sql

-- Local:
-- psql -U alex -d barberscommunity -a -f /PROYECTO-FINAL-G8/api/src/utils/sql/injectData.sql
-- Remote:
-- psql -h host -U username -d myDataBase -a -f myInsertFile
-- psql -h batyr.db.elephantsql.com -U fcuxnish -d myDataBase -a -f 1.injectData.sql
-- psql -h batyr.db.elephantsql.com -U fcuxnish -d fcuxnish -a -f injectData.sql

INSERT INTO "faceTypes" (id, description) VALUES (1, 'Square');
INSERT INTO "faceTypes" (id, description) VALUES (2, 'Triangular');
INSERT INTO "faceTypes" (id, description) VALUES (3, 'Oval');
INSERT INTO "faceTypes" (id, description) VALUES (4, 'Round');
INSERT INTO "faceTypes" (id, description) VALUES (5, 'Long');
INSERT INTO "faceTypes" (id, description) VALUES (6, 'Rectangular');

-- select * from "faceTypes";

INSERT INTO "hairTypes" (id, description) VALUES (1, 'Afro');
INSERT INTO "hairTypes" (id, description) VALUES (2, 'Curly');
INSERT INTO "hairTypes" (id, description) VALUES (3, 'Straight');
INSERT INTO "hairTypes" (id, description) VALUES (4, 'Wavy');

-- select * from "hairTypes";

INSERT INTO "styles" (id, description) VALUES (1, 'American');
INSERT INTO "styles" (id, description) VALUES (2, 'Classic');
INSERT INTO "styles" (id, description) VALUES (3, 'Fresh');
INSERT INTO "styles" (id, description) VALUES (4, 'Youth');
INSERT INTO "styles" (id, description) VALUES (5, 'Modern');
INSERT INTO "styles" (id, description) VALUES (6, 'Versatile');
INSERT INTO "styles" (id, description) VALUES (7, 'European');
INSERT INTO "styles" (id, description) VALUES (8, 'Regular');

-- select * from styles;​

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile,  address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Jorge' ,
        'Murillo', 
        'alo@leano.at', 
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562796/Barbers/jorge_o3tsir.jpg}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Alta Gracia',
        'Cordoba',
        'Argentina',
        'clave123', 
        'true',
        'Argentino Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.8, 
        'Academy',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');


INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Pablo' ,
        'Lescano', 
        'pablo@lescano.ar',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562800/Barbers/32_cjcpzm.jpg}', 
        '02645410738', 
        'Mitre',
        '1795',
        'Bariloche',
        'Rio Negro',
        'Argentina',
        'demo123', 
        't',
        'Argentino Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Urban',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Ricardo' ,
        'Morales', 
        'ricardo@morales.ar',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562796/Barbers/31_gvd74w.jpg}', 
        '02645410738', 
        'San Lorenzo',
        '1795',
        'Mar del Plata',
        'Buenos Aires',
        'Argentina',
        'clave123', 
        't',
        'Argentino Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Seminary'
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}'););

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Lorenzo' ,
        'Rivas', 
        'lorenzo@rivas.ar',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562801/Barbers/30_nc3uzy.jpg}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Resistencia',
        'Chaco',
        'Argentina',
        'clave123', 
        't',
        'Argentino Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Hair technician',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}'););

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Mike' ,
        'Ebanos', 
        'miguel@lescano.ar',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623563408/Barbers/29_zjimim.jpg}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Vidal',
        'Buenos Aires',
        'Argentina',
        'clave123', 
        't',
        'Argentino Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Academy',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Freddy' ,
        'Perez', 
        'freddy@perez.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562802/Barbers/28_j8p1go.jpg}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Corrientes',
        'Corrientes',
        'Argentina',
        'clave123', 
        't',
        'Argentino Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Urban',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Gerardo' ,
        'Alzate', 
        'gerardo@alzate.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623563789/Barbers/27_vxrkw6.jpg}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Corrientes',
        'Corrientes',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Academy',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Milena' ,
        'Salamanca', 
        'milena@salamanca.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623563416/Barbers/26_zzrh1w.jpg}', 
        '02645410738', 
        'Las Heras',
        '1795',
        'Mar del Plata',
        'Buenos Aires',
        'Argentina',
        'clave123', 
        't',
        'Argentino Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Hair technician',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Maria Camila' ,
        'Kuba', 
        'camila@kuba.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562799/Barbers/25_cllcsp.jpg}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'La Plata',
        'Buenos Aires',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Hair technician',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Zarco' ,
        'Solarte', 
        'maria@solarte.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562801/Barbers/24_uflsju.jpg}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Carlos Paz',
        'Cordoba',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Seminary',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Jose Miguel' ,
        'Buenaora', 
        'josemiguel@buenahora.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562799/Barbers/23_prjgkc.jpg}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Jujuy',
        'Jujuy',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Urban',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Delia' ,
        'Tellez', 
        'sandra@tellez.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562801/Barbers/22_hevpdb.jpg}', 
        '02645410738'
        'Las Jarillas',
        '1795',
        'Mendoza',
        'Mendoza',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Urban',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');


INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Lorenzo' ,
        'Figueroa', 
        'lorenzo@figueroa.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562796/Barbers/21_fraryq.jpg}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Rio Gallegos',
        'Santa Cruz',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Hair technician',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Nicolas' ,
        'Mora', 
        'nicolas@mora.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562795/Barbers/20_xwde4k.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Balcarce',
        'Buenos Aires',
        'Argentina',
        'clave123', 
        't',
        'Argentino Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Seminary',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Arturo' ,
        'Arrechea', 
        'arturo@arrechea.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562799/Barbers/19_aw457q.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Mar Del Cabo',
        'Buenos Aires',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Urban',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Tirso' ,
        'Lopez', 
        'tirso@lopez.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562799/Barbers/18_igfc9e.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Alta Gracia',
        'Cordoba',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Seminary',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Samuel' ,
        'Benavidez', 
        'sam@benavidez.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562796/Barbers/17_olfxnz.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Villa Maria',
        'Cordoba',
        'Argentina',
        'clave123', 
        't',
        'Argentino Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Hair technician',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Marcos' ,
        'Hernandez', 
        'marcos@hernandez.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562796/Barbers/16_ni6xus.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Mar Chiquita',
        'Buenos Aires',
        'Argentina',
        'clave123', 
        't',
        'Argentino Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Urban',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Danilo' ,
        'Correa', 
        'danilo@correa.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562798/Barbers/15_gaunpw.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Rosario',
        'Santa Fe',
        'Argentina',
        'clave123', 
        't',
        'Argentino Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Academy',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Nariño' ,
        'Santofimio', 
        'narino@santofimio.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562805/Barbers/14_lbzzer.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Catamarca',
        'Catamarca',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Academy',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Carlos' ,
        'Gonzalez', 
        'carlos@gonzalez.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562794/Barbers/13_cd9khp.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Lujan',
        'Cordoba',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Academy',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Camilo' ,
        'Debia', 
        'camilo@debia.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562797/Barbers/12_iw4tn8.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Villa Gesell',
        'Buenos Aires',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Academy',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Joseph' ,
        'Keiroz', 
        'josep@debia.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562803/Barbers/11_ta3pfh.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Entre Rios',
        'Entre Rios',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Academy',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Huberto' ,
        'Escobar', 
        'humberto@escobar.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562805/Barbers/10_ntddef.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Posadas',
        'Misiones',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Academy',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Marino' ,
        'Marin', 
        'marino@marin.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562806/Barbers/09_eqzv6a.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Miramar',
        'Buenos Aires',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Academy',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Nicolas' ,
        'Santa', 
        'nicolas@santa.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562798/Barbers/08_uafvyv.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Encarnacion',
        'Misiones',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Seminary',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Alberto' ,
        'Bolaños', 
        'alberto@bolaños.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562805/Barbers/07_htdb3o.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Viedma',
        'Rio Negro',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Seminary',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Pedro' ,
        'Orozco', 
        'pedro@orozco.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562804/Barbers/06_ltjlyv.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Alta Gracia',
        'Cordoba',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Academy',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'mauricio' ,
        'torrente', 
        'mauricio@torrente.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562795/Barbers/05_c0e55p.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Alta Gracia',
        'Cordoba',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Academy',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Pedro' ,
        'Dimaria', 
        'peedro@escobar.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562806/Barbers/04_iv7j5e.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Alta Gracia',
        'Cordoba',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Academy',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Luis' ,
        'Armani', 
        'franco@armani.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562805/Barbers/03_azcsxr.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Alta Gracia',
        'Cordoba',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Academy',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Ernesto' ,
        'Mejia', 
        'ernesto@mejia.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562795/Barbers/02_n1deq5.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Alta Gracia',
        'Cordoba',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Academy',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, address, number, city, state, country, password , status ,  alias  , resume , bio ,rating, type, slots)
        VALUES ( 
        'Teofilo' ,
        'Usurriaga', 
        'teofilo@usuariaga.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562798/Barbers/01_n67awf.png}', 
        '02645410738', 
        'Las Jarillas',
        '1795',
        'Alta Gracia',
        'Cordoba',
        'Argentina',
        'clave123', 
        't',
        'American Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Academy',
        '{"09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"}');

-- select * from barbers;

--Table Categories
--ID 1      
INSERT INTO "categories" (name , description , image  )
      VALUES ('HAIRCUT','HAIR CUT', 
       '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623966717/Catalog/services/cover/haircut01_ibwu50.png}');       

--ID 2
INSERT INTO "categories" (name , description , image  ) 
      VALUES ('BEARDCUT','BEARD CUT', 
      '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623966715/Catalog/services/cover/barbercutCat02_ui5pqb.jpg,
        https://res.cloudinary.com/doovf5g5c/image/upload/v1623966715/Catalog/services/cover/barberCat_yflg3e.jpg,
        https://res.cloudinary.com/doovf5g5c/image/upload/v1623966715/Catalog/services/cover/barbercutCat03_qld4ko.jpg
       }');
--ID 3
INSERT INTO "categories" (name , description , image  ) 
    VALUES ('KIDHAIRCUT','KIDS HAIR CUT', 
      '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623966716/Catalog/services/cover/kidscutCat03_yhyziw.jpg,
        https://res.cloudinary.com/doovf5g5c/image/upload/v1623966716/Catalog/services/cover/kidscutCat_gwty2m.jpg
      }');
--ID 4      
INSERT INTO "categories" (name , description , image  ) 
     VALUES ('HAIRCOLOR','HAIR COLOR ', 
      '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623966715/Catalog/services/cover/Color03_uuolhl.jpg,
        https://res.cloudinary.com/doovf5g5c/image/upload/v1623966715/Catalog/services/cover/Color02_xcuymu.jpg,
        https://res.cloudinary.com/doovf5g5c/image/upload/v1623966714/Catalog/services/cover/Colors01_aozuxu.jpg
      }');
--ID 5
INSERT INTO "categories" (name , description , image  ) 
    VALUES ('DESIGN','STYLISH CUT', 
      '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623967504/Catalog/services/cover/design02_adhpcy.jpg,
      https://res.cloudinary.com/doovf5g5c/image/upload/v1623966715/Catalog/services/cover/designCategory_gk2itd.png
      }');
--ID 6
INSERT INTO "categories" (name , description , image  ) 
    VALUES ('OZON','Male Grooming', '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623966716/Catalog/services/cover/Ozone_ctbswc.jpg}');

--ID 7      
INSERT INTO "categories" (name , description , image  ) 
  VALUES ('MASK','MASK', '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623966715/Catalog/services/cover/mask_category_grbkis.jpg}');


--Tables Services
INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'BUZZ',
      7500,
      'Es un corte muy solicitado por aquellos hombres que empiezan a notar pérdida de pelo. Consiste en un cabello muy corto, normalmente cortado al 1 y que se pasa por toda la cabeza por igual.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898851/Catalog/services/1.HAIRCUT/buzzCut/buzzcut01-180x225_rojvnh.png,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898850/Catalog/services/1.HAIRCUT/buzzCut/buzzcut02_hbiyzq.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898850/Catalog/services/1.HAIRCUT/buzzCut/buzzcut05_vbw0dz.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898850/Catalog/services/1.HAIRCUT/buzzCut/buzzcut03_d3lkow.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898850/Catalog/services/1.HAIRCUT/buzzCut/buzzcut06_ktbx0v.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898850/Catalog/services/1.HAIRCUT/buzzCut/buzzcut04_e2mlwt.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'FADE',
      55000,
      'Significa <span>degradado</span> y consiste en un corte con nuca, patillas y laterales muy cortos o incluso afeitados, volviéndose más largo en la parte superior de la cabeza. Es el corte más solicitado en la actualidad.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898843/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut01_hinlkt.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898843/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut07_prpijf.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898843/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut03_vvtdel.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898843/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut03_vvtdel.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898843/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut05_acyy1f.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898843/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut05_acyy1f.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898843/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut06_bfmmas.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898842/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut08_njvybl.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898842/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut02_byq186.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898842/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut04_ftxcfe.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'FRENCH CROP CUT',
      5000,
      'Se trata del más clásico de los cortes masculinos, pero muy chic. Lleva normalmente la raya lateral y lo que se busca es que apenas haya diferencia entre los laterales y la parte de arriba, que sea todo muy sutil y elegante, con un acabado pulido.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898842/Catalog/services/1.HAIRCUT/frenchCropCut/frenchcropCut04_sobj1t.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898841/Catalog/services/1.HAIRCUT/frenchCropCut/frenchcropCut01_kbg8sb.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898841/Catalog/services/1.HAIRCUT/frenchCropCut/frenchcropCut03_btffg4.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898841/Catalog/services/1.HAIRCUT/frenchCropCut/frenchcropCut02_lvtqx3.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'FRENCH DARK CUT',
      5000,
      'El término clara u oscura hace referencia a la sensación visual que da el corte en los laterales. Cuando la apariencia es de mayor densidad por llevarlo más largo, es francesa oscura. Si el cabello es corto y se ve la piel, será una francesa clara',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898841/Catalog/services/1.HAIRCUT/frenchCropDarkCut/frenchcropdarkCut03_qjpcf3.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898841/Catalog/services/1.HAIRCUT/frenchCropDarkCut/frenchcropdarkCut01_snn1o8.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898840/Catalog/services/1.HAIRCUT/frenchCropDarkCut/frenchcropdarkCut02_ijd1d3.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'HONGO',
      5000,
      'Es un corte solo para cabellos lisos y aunque nació en los años 90, se ha actualizado dando lugar a varias opciones. Se trata de un corte circular y totalmente recto, que empezó siendo a la altura de la parte superior de las orejas y que después',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898850/Catalog/services/1.HAIRCUT/hongoCut/hongoCut03_rzt8f2.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898850/Catalog/services/1.HAIRCUT/hongoCut/hongoCut02_jyjfdy.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898849/Catalog/services/1.HAIRCUT/hongoCut/hongoCut07_hrq1ko.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898849/Catalog/services/1.HAIRCUT/hongoCut/hongoCut05_yctfb2.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898849/Catalog/services/1.HAIRCUT/hongoCut/hongoCut01_oqhdxd.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898848/Catalog/services/1.HAIRCUT/hongoCut/hongoCut04_xahn6k.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898848/Catalog/services/1.HAIRCUT/hongoCut/hongoCut06_hk8zbp.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'MILITARY CUT',
      48000,
      'Limpio, clásico, corporal. Si estas son las palabras que te vienen a la mente cuando piensas en tu peinado ideal, entonces un corte de pelo militar es el indicado.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898849/Catalog/services/1.HAIRCUT/militaryCut/militaryCut03_ewk3hp.png,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898848/Catalog/services/1.HAIRCUT/militaryCut/militaryCut02_bdw1zb.png,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898848/Catalog/services/1.HAIRCUT/militaryCut/militaryCut05_f0jp38.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898848/Catalog/services/1.HAIRCUT/militaryCut/militaryCut01_ghfg7c.png,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898848/Catalog/services/1.HAIRCUT/militaryCut/militaryCut04_rsshkj.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898848/Catalog/services/1.HAIRCUT/militaryCut/militaryCut09_s9i4q8.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898847/Catalog/services/1.HAIRCUT/militaryCut/militaryCut08_ptpeh2.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898847/Catalog/services/1.HAIRCUT/militaryCut/militaryCut07_awaybc.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898847/Catalog/services/1.HAIRCUT/militaryCut/militaryCut06_fkprxm.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898847/Catalog/services/1.HAIRCUT/militaryCut/militaryCut10_u4ktff.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'MOHICANO',
      5000,
      'La principal característica del corte de pelo mohicano es que se lleva el pelo rapado por los lados y la parte central más larga y peinada hacia arriba. El largo de la parte superior puede variar.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898846/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut07_ml01kq.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898846/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut03_ovyhyj.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898846/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut05_swi520.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898846/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut08_tbj0xp.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898845/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut10_tibncc.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898845/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut06_d8ow7s.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898845/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut09_nujgvr.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898845/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut01_vqfzio.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898845/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut02_omalhr.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898845/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut04_m6pooy.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'MULLET CUT',
      5000,
      'El mullet fue el corte por excelencia de los años 70 y principios de los 80, Las modas siempre vuelven, pero esta sí que no la esperábamos y se ha convertido en el peinado estrella del 2021.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898852/Catalog/services/1.HAIRCUT/mulletCut/mulletCut07_olyo6l.png,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898852/Catalog/services/1.HAIRCUT/mulletCut/mulletCut06_q2cobr.png,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898852/Catalog/services/1.HAIRCUT/mulletCut/mulletCut03_vl33hl.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898852/Catalog/services/1.HAIRCUT/mulletCut/mulletCut01_dplg09.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898851/Catalog/services/1.HAIRCUT/mulletCut/mulletCut02_cusjni.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898851/Catalog/services/1.HAIRCUT/mulletCut/mulletCut05_vkwovg.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898851/Catalog/services/1.HAIRCUT/mulletCut/mulletCut04_hp9mzo.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'POMPADOUR',
      70000,
      'Este corte se familiarizó entre los hombres durante la década de los 50, aunque su origen hacía referencia al peinado que popularizó Madame Pompadour hacia el 1700 y que consistía en elevar el flequillo.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623983929/Catalog/services/1.HAIRCUT/pompadourCut/pompadour_gvndxg.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623984056/Catalog/services/1.HAIRCUT/pompadourCut/pompadour01_q05tms.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623984057/Catalog/services/1.HAIRCUT/pompadourCut/pompadour02_yov52x.png
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'SPIKY',
      5000,
      'Es el clásico “pelo pincho” de toda la vida. Le sienta bien a hombres de todas las edades, por su versatilidad y que se ajusta a la forma de cada rostro.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898847/Catalog/services/1.HAIRCUT/spikyCut/spikyCut01_kyltub.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898847/Catalog/services/1.HAIRCUT/spikyCut/spikyCut06_ixkb8t.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898847/Catalog/services/1.HAIRCUT/spikyCut/spikyCut02_yfqvba.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898847/Catalog/services/1.HAIRCUT/spikyCut/spikyCut04_bp5p7m.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898846/Catalog/services/1.HAIRCUT/spikyCut/spikyCut05_se8mi8.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898846/Catalog/services/1.HAIRCUT/spikyCut/spikyCut03_hpmwku.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'UNDERCUT',
      25000,
      'La mayor ventaja es su gran versatilidad, ya que es posible adaptarlo a cualquier tipo de cabello. No importa si este liso, rizado u ondulado, hay un undercut ideal para ti. Otras de las ventajas que encontramos en este corte es su capacidad para',
  '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898845/Catalog/services/1.HAIRCUT/underCut/underCut12_nzivzs.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898845/Catalog/services/1.HAIRCUT/underCut/underCut08_zll27d.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898845/Catalog/services/1.HAIRCUT/underCut/underCut02_jozxua.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898844/Catalog/services/1.HAIRCUT/underCut/underCut09_lwrdov.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898844/Catalog/services/1.HAIRCUT/underCut/underCut01_mkuhu0.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898844/Catalog/services/1.HAIRCUT/underCut/underCut04_xqoz3n.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898844/Catalog/services/1.HAIRCUT/underCut/underCut06_t2qo6x.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898844/Catalog/services/1.HAIRCUT/underCut/underCut10_vjl2rs.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898844/Catalog/services/1.HAIRCUT/underCut/underCut11_ewxhtu.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898844/Catalog/services/1.HAIRCUT/underCut/underCut07_mjixjp.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898844/Catalog/services/1.HAIRCUT/underCut/underCut03_fht8ef.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898843/Catalog/services/1.HAIRCUT/underCut/underCut05_rmgod9.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'Beard Collar',
      5000,
      'La barba collar es un tipo de barba bastante singular que consiste en dejar la barba crecer por la parte de abajo, es decir entre el cuello, la barbilla y los pómulos.En otras palabras, consiste en recortar la zona del bigote.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898835/Catalog/services/2.BEARDCUT/beardCollar/beardCutCollar02_gzrwb1.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898835/Catalog/services/2.BEARDCUT/beardCollar/beardCutCollar01_oh26ly.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898834/Catalog/services/2.BEARDCUT/beardCollar/beardCutCollar05_jymhnj.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898834/Catalog/services/2.BEARDCUT/beardCollar/beardCutCollar04_rhtbqn.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898833/Catalog/services/2.BEARDCUT/beardCollar/beardCutCollar03_p8zz8u.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'Beard Full ',
      5000,
      'La barba completa larga es un tipo de barba que da un toque rústico al look masculino. Aunque muchos piensen lo contrario, este tipo de barba requiere de un buen cuidado Este estilo de barba favorece a la gente delgada, pues a la gente con algo ..',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898832/Catalog/services/2.BEARDCUT/beardcutCompleteMedia/beardCutComplete03_ykql6o.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898831/Catalog/services/2.BEARDCUT/beardcutCompleteMedia/beardCutComplete02_xmce55.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898831/Catalog/services/2.BEARDCUT/beardcutCompleteMedia/beardCutComplete01_zcxqnw.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898831/Catalog/services/2.BEARDCUT/beardcutCompleteMedia/beardCutComplete05_mlccua.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898831/Catalog/services/2.BEARDCUT/beardcutCompleteMedia/beardCutComplete04_huatv4.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'BEARD FADE',
      5000,
      'Es la conocida como barba 3 días de estilo desalineado, es una excelente forma de mantener un estilo masculino rudo sin dejarse crecer la barba completa.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898831/Catalog/services/2.BEARDCUT/beardfade/beardCutfade06_tzzfug.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898831/Catalog/services/2.BEARDCUT/beardfade/beardCutfade02_eaezps.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898830/Catalog/services/2.BEARDCUT/beardfade/beardCutfade01_sxyqlk.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898830/Catalog/services/2.BEARDCUT/beardfade/beardCutfade03_fghqkw.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898830/Catalog/services/2.BEARDCUT/beardfade/beardCutfade04_klcfm2.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898830/Catalog/services/2.BEARDCUT/beardfade/beardCutfade05_vushfw.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'Beard Real',
      5000,
      'Es un tipo barba con una perilla de líneas delgadas a los lados del mentón, además también lleva bigote. Indudablemente, que su ornamental no va conectado con el bigote, ni la barbilla.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898835/Catalog/services/2.BEARDCUT/beardReal/beardCutReal02_vsl4i7.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898833/Catalog/services/2.BEARDCUT/beardReal/beardCutReal01_sdyysk.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898833/Catalog/services/2.BEARDCUT/beardReal/beardCutReal03_xufrgd.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'BARBA VIKINGA',
      5000,
      'La barba imperial es ideal para aquellos hombres que quieren causar impresión. Se deja el largo pero con un toque estiloso. Además, este tipo de barba consiste en dejar una perilla fina, alargada y en forma de punta.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898837/Catalog/services/2.BEARDCUT/beardVikinga/beardCutViking03_vrguvp.png,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898836/Catalog/services/2.BEARDCUT/beardVikinga/beardCutViking01_s5depr.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898835/Catalog/services/2.BEARDCUT/beardVikinga/beardCutViking04_lwfvgs.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898835/Catalog/services/2.BEARDCUT/beardVikinga/beardCutViking02_oooret.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898835/Catalog/services/2.BEARDCUT/beardVikinga/beardCutViking05_nc0atj.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES ( 
      'Beardcut Circle',
      5000,
      'La barba circular, también conocida como barba de candado, es simplemente un collar y un bigote que se unen para formar un círculo. Es un tipo de barba óptimo para aquellas personas que deseen un aspecto más bien cuidado.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898837/Catalog/services/2.BEARDCUT/circle/beardCutCircle02_sjdddc.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898837/Catalog/services/2.BEARDCUT/circle/beardCutCircle06_y8wbc4.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898836/Catalog/services/2.BEARDCUT/circle/beardCutCircle04_wojgu0.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898836/Catalog/services/2.BEARDCUT/circle/beardCutCircle03_i4ufua.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898836/Catalog/services/2.BEARDCUT/circle/beardCutCircle01_r4xqb3.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898836/Catalog/services/2.BEARDCUT/circle/beardCutCircle05_qoxk74.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'Beard Imperial',
      80000,
      'La barba imperial es ideal para aquellos hombres que quieren causar impresión. Se deja el largo pero con un toque estiloso. Además, este tipo de barba consiste en dejar una perilla fina, alargada y en forma de punta.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898832/Catalog/services/2.BEARDCUT/IMPERIAL/beardCutImperial01_oc0i2w.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898832/Catalog/services/2.BEARDCUT/IMPERIAL/beardCutImperial02_apfwad.png,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898832/Catalog/services/2.BEARDCUT/IMPERIAL/beardCutImperial03_c3jwku.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898832/Catalog/services/2.BEARDCUT/IMPERIAL/beardCutImperial04_piauqx.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898832/Catalog/services/2.BEARDCUT/IMPERIAL/beardCutImperial05_p6omtw.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'Kids Haircuts',
      25000,
      'Un buen corte de cabello hace que los niños se sientan llenos de confianza y con seguridad en ellos mismos. Ayúdale a definir su estilo tomando en cuenta sus gustos; es importante que el corte de pelo de su hijo refleje su personalidad y su edad.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898828/Catalog/services/3.KIDHAIRCUT/kidhaircut/kidhaircut01_ceiuyt.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898830/Catalog/services/3.KIDHAIRCUT/kidhaircut/kidhaircut02_uvq8cz.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898830/Catalog/services/3.KIDHAIRCUT/kidhaircut/kidhaircut03_sgr1px.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898830/Catalog/services/3.KIDHAIRCUT/kidhaircut/kidhaircut04_vwoqb8.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898829/Catalog/services/3.KIDHAIRCUT/kidhaircut/kidhaircut05_jbor3e.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898829/Catalog/services/3.KIDHAIRCUT/kidhaircut/kidhaircut06_qr9rzc.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898827/Catalog/services/3.KIDHAIRCUT/kidhaircut/kidhaircut08_tifdlh.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898830/Catalog/services/3.KIDHAIRCUT/kidhaircut/kidhaircut09.jpg.crdownload_rmt9g3.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898829/Catalog/services/3.KIDHAIRCUT/kidhaircut/kidhaircut10_zkfxyb.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898829/Catalog/services/3.KIDHAIRCUT/kidhaircut/kidhaircut11_l7ssse.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898827/Catalog/services/3.KIDHAIRCUT/kidhaircut/kidhaircut12_g5s7oe.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'DISCOLORATION HAIR',
      5000,
      'El furor del cabello platinado en los hombres ha resucitado como la máxima tendencia desde el 2020, cada vez son más los hombres que se han lanzado a un cambio, eligiendo rubio o rubio platino como color de pelo para cambiar su estilo y apariencia',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898827/Catalog/services/4.HAIRCOLOR/discolor/discolor02_muq0zy.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898824/Catalog/services/4.HAIRCOLOR/discolor/discolor01_n6au5r.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898825/Catalog/services/4.HAIRCOLOR/discolor/discolor03_magu1a.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898826/Catalog/services/4.HAIRCOLOR/discolor/discolor04_vt7zr6.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898826/Catalog/services/4.HAIRCOLOR/discolor/discolor05_zqlqzo.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898824/Catalog/services/4.HAIRCOLOR/discolor/discolor06_slzyba.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898826/Catalog/services/4.HAIRCOLOR/discolor/discolor07_zd2n7p.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898826/Catalog/services/4.HAIRCOLOR/discolor/discolor08_yo2smn.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898825/Catalog/services/4.HAIRCOLOR/discolor/discolor09_fw1db7.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898825/Catalog/services/4.HAIRCOLOR/discolor/discolor10_iqzmle.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898825/Catalog/services/4.HAIRCOLOR/discolor/discolor11_cmcjun.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898826/Catalog/services/4.HAIRCOLOR/discolor/discolor12_ehikms.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'FANTASY',
      5000,
      'Los tintes fantasía han llegado para romper todos los esquemas. Están basados en tonos menos usuales como el azul, gris, violeta y rosa que darán un toque único y muy actual a tu estilo. Cada vez son más los que se están arriesgando a un cambio de',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898823/Catalog/services/4.HAIRCOLOR/fantasy/fantasy01_yvpvh7.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898823/Catalog/services/4.HAIRCOLOR/fantasy/fantasy02_rwwpsv.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898823/Catalog/services/4.HAIRCOLOR/fantasy/fantasy03_cilyq2.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898823/Catalog/services/4.HAIRCOLOR/fantasy/fantasy04_hx94jp.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898823/Catalog/services/4.HAIRCOLOR/fantasy/fantasy05_nkuecs.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898824/Catalog/services/4.HAIRCOLOR/fantasy/fantasy06_z6rtqu.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898823/Catalog/services/4.HAIRCOLOR/fantasy/fantasy07_v97gsr.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898824/Catalog/services/4.HAIRCOLOR/fantasy/fantasy08_ugtff8.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898824/Catalog/services/4.HAIRCOLOR/fantasy/fantasy09_ro5zqz.jpg

 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'NATURAL',
      5000,
      'Si lo que buscas es un sutil cambio de look o cubrir las canas, la mejor opción está en elegir tintes sin amoníaco del color que más se asemeje a su tono natural.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623987119/Catalog/services/4.HAIRCOLOR/natural/natural_shawo4.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'CLASSIC LINE',
      5000,
      'Los cortes con líneas son una tendencia de moda que eligen muchos hombres para hacerse en sus cabellos y agregar un toque sutil y moderno a su estilo.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898837/Catalog/services/5.DESIGN/classicline/line01_n6puhi.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898837/Catalog/services/5.DESIGN/classicline/line02_kbyrwp.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898838/Catalog/services/5.DESIGN/classicline/line03_znb7cb.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898837/Catalog/services/5.DESIGN/classicline/line04_n2ckyc.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898837/Catalog/services/5.DESIGN/classicline/line05_pkxjvu.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898837/Catalog/services/5.DESIGN/classicline/line06_mcon6e.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'GEOMETRIC',
      5000,
      'Los cortes con líneas son una tendencia que se ha venido imponiendo en los últimos años agregando diseño y estilo al peinado. Sin embargo, para los más arriesgados pueden convertir su cabeza en un lienzo para que el artista plasme su creación.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898838/Catalog/services/5.DESIGN/geometric/geometric01_gk1up7.jpg,
   https://res.cloudinary.com/doovf5g5c/image/upload/v1623898838/Catalog/services/5.DESIGN/geometric/geometric02_xeqarl.jpg,
   https://res.cloudinary.com/doovf5g5c/image/upload/v1623898838/Catalog/services/5.DESIGN/geometric/geometric03_tzm9ad.jpg,
   https://res.cloudinary.com/doovf5g5c/image/upload/v1623898839/Catalog/services/5.DESIGN/geometric/geometric04_mpfmrk.jpg,
   https://res.cloudinary.com/doovf5g5c/image/upload/v1623898839/Catalog/services/5.DESIGN/geometric/geometric05_n9nkcc.jpg,
   https://res.cloudinary.com/doovf5g5c/image/upload/v1623898839/Catalog/services/5.DESIGN/geometric/geometric06_u58wrc.jpg,
   https://res.cloudinary.com/doovf5g5c/image/upload/v1623898839/Catalog/services/5.DESIGN/geometric/geometric07_ew3qgn.jpg,
   https://res.cloudinary.com/doovf5g5c/image/upload/v1623898838/Catalog/services/5.DESIGN/geometric/geometric08_phcowb.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'REALISM',
      5000,
      'Es una técnica donde se debe maniobrar la cuchilla de una manera precisa y sutil, para matizar las luces y las sombras. La barbera se convierte en un pincel que traza en el cabello y hace surgir los rasgos de un personaje en particular. Una pintu',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898840/Catalog/services/5.DESIGN/realism/realism01_nw30sw.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898840/Catalog/services/5.DESIGN/realism/realism02_y0svbi.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898839/Catalog/services/5.DESIGN/realism/realism03_l7dgr0.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898840/Catalog/services/5.DESIGN/realism/realism04_dzequv.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898840/Catalog/services/5.DESIGN/realism/realism05_drjpn3.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'VAPOR OZONO',
      5000,
      'Vive la experiencia del arreglo de barba más suave que solo el vapor ozono pueden brindar. El vapor, que sale lentamente y sin goteos, genera una sensación agradable y múltiples efectos positivos sobre la piel, permitiendo que el ozono la purifiqu',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623966716/Catalog/services/cover/Ozone_ctbswc.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'BLACK MASK',
      5000,
      'Con la mascarilla negra podrás eliminar las impurezas de la piel, los puntos negros y mantener una piel tonificada e hidratada de forma inmediata y de una forma sencilla.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623966715/Catalog/services/cover/mask_category_grbkis.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'GOLD MASK',
      5000,
      'La Gold Mask es una de las mejores máscaras faciales que aportan luminosidad, firmeza, minimiza poros, nutre y mejora la circulación, dándole un aspecto fresco y rejuvenecido a la piel.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623988219/Catalog/services/7.MASK/Goldmask/goldmaskman_sy2gjk.jpg
 }');

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Matias' ,
        'Sciutto', 
        'alo@leano.at', 
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562796/Barbers/jorge_o3tsir.jpg}', 
        '64541075Las Jarillas',
        '1795',
        'Alta Gracia',
        'Cordoba',
        'Argentina',
        'clave123',
        'active',
        'admin'
       );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Pablo' ,
        'Benavidez', 
        'pablo@lescano.ar',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562800/Barbers/32_cjcpzm.jpg}', 
        '64541075', 
        'Buenos Aires, Argentina',
        'demo123',
        'active',
        'client'
       );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Ricardo' ,
        'Fort', 
        'ricardo@morales.ar',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562796/Barbers/31_gvd74w.jpg}', 
        '64541075', 
        'Buenos aires, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Lorenzo' ,
        'Miguel', 
        'lorenzo@rivas.ar',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562801/Barbers/30_nc3uzy.jpg}', 
        '64541075', 
        'Colorado, USA',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Miguel' ,
        'Lorenzini', 
        'miguel@lescano.ar',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623563408/Barbers/29_zjimim.jpg}', 
        '64541075', 
        'Colorado, USA',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Freddy' ,
        'Villareal', 
        'freddy@perez.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562802/Barbers/28_j8p1go.jpg}', 
        '64541075', 
        'Colorado, USA',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Gerardo' ,
        'Romano', 
        'gerardo@alzate.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623563789/Barbers/27_vxrkw6.jpg}', 
        '64541075', 
        'Colorado, USA',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Milena' ,
        'Salamanca', 
        'milena@salamanca.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623563416/Barbers/26_zzrh1w.jpg}', 
        '64541075', 
        'Colorado, USA',
        'clave123',
        'active',
        'client'
       );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Maria Camila' ,
        'Delani', 
        'camila@kuba.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562799/Barbers/25_cllcsp.jpg}', 
        '64541075', 
        'Cordoba, Argentina',
        'clave123',
        'active',
        'client'
       );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Lorena' ,
        'Gonzalez', 
        'maria@solarte.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562801/Barbers/24_uflsju.jpg}', 
        '64541075', 
        'Cordoba, Argentina',
        'clave123',
        'active',
        'client'
       );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Jose Miguel' ,
        'Buenaventura', 
        'josemiguel@buenahora.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562799/Barbers/23_prjgkc.jpg}', 
        '64541075', 
        'Cordoba, Argentina',
        'clave123',
        'active',
        'client'

       );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Sara' ,
        'Tricolti', 
        'sandra@tellez.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562801/Barbers/22_hevpdb.jpg}', 
        '64541075Las Jarillas',
        '1795',
        'Alta Gracia',
        'Cordoba',
        'Argentina',
        'clave123',
        'active',
        'client'

       );


INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'seba' ,
        'Bueno', 
        'eduardociare871@gmail.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562796/Barbers/21_fraryq.jpg}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Nicolas' ,
        'Moradini', 
        'nicolas@mora.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562795/Barbers/20_xwde4k.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Arturo' ,
        'Vestillo', 
        'arturo@arrechea.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562799/Barbers/19_aw457q.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Pedro' ,
        'De Molina', 
        'tirso@lopez.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562799/Barbers/18_igfc9e.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Samuel' ,
        'Kalberti', 
        'sam@benavidez.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562796/Barbers/17_olfxnz.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Veronica' ,
        'Hernandez', 
        'marcos@hernandez.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562796/Barbers/16_ni6xus.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Danilo' ,
        'Correa', 
        'danilo@correa.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562798/Barbers/15_gaunpw.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Nariño' ,
        'Santofimio', 
        'narino@santofimio.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562805/Barbers/14_lbzzer.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Carlos' ,
        'Gonzalez', 
        'carlos@gonzalez.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562794/Barbers/13_cd9khp.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Camilo' ,
        'Debia', 
        'camilo@debia.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562797/Barbers/12_iw4tn8.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Joseph' ,
        'Keiroz', 
        'josep@debia.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562803/Barbers/11_ta3pfh.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Huberto' ,
        'Escobar', 
        'humberto@escobar.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562805/Barbers/10_ntddef.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Marino' ,
        'Marin', 
        'marino@marin.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562806/Barbers/09_eqzv6a.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Nicolas' ,
        'Santa', 
        'nicolas@santa.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562798/Barbers/08_uafvyv.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Alberto' ,
        'Bolaños', 
        'alberto@bolaños.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562805/Barbers/07_htdb3o.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Pedro' ,
        'Orozco', 
        'pedro@orozco.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562804/Barbers/06_ltjlyv.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'mauricio' ,
        'torrente', 
        'mauricio@torrente.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562795/Barbers/05_c0e55p.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Pedro' ,
        'Dimaria', 
        'peedro@escobar.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562806/Barbers/04_iv7j5e.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Luis' ,
        'Armani', 
        'franco@armani.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562805/Barbers/03_azcsxr.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Ernesto' ,
        'Mejia', 
        'ernesto@mejia.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562795/Barbers/02_n1deq5.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );

INSERT INTO "clients" (name, lastname, email, image, mobile, location, password, status, rol)
        VALUES ( 
        'Teofilo' ,
        'Usurriaga', 
        'teofilo@usuariaga.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562798/Barbers/01_n67awf.png}', 
        '64541075', 
        'Mar de plata, Argentina',
        'clave123',
        'active',
        'client'
        );


SELECT COUNT(id) FROM "faceTypes";
SELECT COUNT(id) FROM "hairTypes";
SELECT COUNT(id) FROM styles;
SELECT COUNT(name) FROM barbers;
SELECT COUNT(id) FROM categories;
SELECT COUNT(id) FROM services;
SELECT COUNT(id) FROM clients;

-- Local:
-- psql -U alex -d barberscommunity -a -f injectData.sql
-- Remote:
-- psql -h host -U username -d myDataBase -a -f myInsertFile
-- psql -h batyr.db.elephantsql.com -U fcuxnish -d myDataBase -a -f injectData.sql

