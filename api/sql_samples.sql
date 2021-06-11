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

INSERT INTO "categories" (id , name , description , image , "createdAt" ,"updatedAt" ) VALUES (1, 'HAIRCUT','CORTE DE CABELLO', '{IMAGE1,image2}', '2021-06-10', '2021-06-10');

INSERT INTO "categories" (id , name , description , image , "createdAt" ,"updatedAt" ) VALUES (2, 'BEARDCUT','ARREGLO DE BARBA', '{IMAGE1,image2}', '2021-06-10  00:00:00-05', '2021-06-10 00:00:00-05');

INSERT INTO "categories" (id , name , description , image , "createdAt" ,"updatedAt" ) VALUES (3, 'KIDHAIRCUT','ARREGLO DE BARBA', '{IMAGE1,image2}', '2021-06-10  00:00:00-05', '2021-06-10 00:00:00-05');

INSERT INTO "categories" (id , name , description , image , "createdAt" ,"updatedAt" ) VALUES (1, 'DESIGN','ARREGLO DE BARBA', '{IMAGE1,image2}', '2021-06-10  00:00:00-05', '2021-06-10 00:00:00-05');

INSERT INTO "categories" (id , name , description , image , "createdAt" ,"updatedAt" ) VALUES (1, 'OZON','ARREGLO DE BARBA', '{IMAGE1,image2}', '2021-06-10  00:00:00-05', '2021-06-10 00:00:00-05');

INSERT INTO "categories" (id , name , description , image , "createdAt" ,"updatedAt" ) VALUES (1, 'MASK','ARREGLO DE BARBA', '{IMAGE1,image2}', '2021-06-10  00:00:00-05', '2021-06-10  00:00:00-05');

SELECT * FROM CATEGORIES;






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