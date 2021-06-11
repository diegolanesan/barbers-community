DROP DATABASE barberscommunity;
CREATE DATABASE barberscommunity;

INSERT INTO "faceTypes" (id, description) VALUES (1, 'Cuadrado');
INSERT INTO "faceTypes" (id, description) VALUES (2, 'Diamante');
INSERT INTO "faceTypes" (id, description) VALUES (3, 'Ovalado');
INSERT INTO "faceTypes" (id, description) VALUES (4, 'Redondo');
​
INSERT INTO "hairTypes" (id, description) VALUES (1, 'Afro');
INSERT INTO "hairTypes" (id, description) VALUES (2, 'Crespo');
INSERT INTO "hairTypes" (id, description) VALUES (3, 'Liso');
INSERT INTO "hairTypes" (id, description) VALUES (4, 'Ondulado');
​
​
INSERT INTO "styles" (id, description) VALUES (1, 'American');
INSERT INTO "styles" (id, description) VALUES (2, 'Clasic');
INSERT INTO "styles" (id, description) VALUES (3, 'Fresco');
INSERT INTO "styles" (id, description) VALUES (4, 'Juvenil');
INSERT INTO "styles" (id, description) VALUES (5, 'Modern');
INSERT INTO "styles" (id, description) VALUES (6, 'Versátil');
​
​
select * from "hairTypes";
select * from "faceTypes";
select * from "style";

/*​

"id": 1,
"name": "Alexander",
"lastname": "Mina",
"email": "alexMina@gmail.com",
"image": [
    "sdfgfd",
    "sdfsdfg"
],
"mobile": 154434565,
"location": "Cali",
"password": "sdf454",
"status": true,
"createdAt": "2021-06-11T02:15:53.926Z",
"updatedAt": "2021-06-11T02:15:53.926Z",
"faceTypeId": 2,
"hairTypeId": 3,
"styleId": 1

*/