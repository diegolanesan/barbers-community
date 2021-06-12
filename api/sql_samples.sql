-- 1. Detener la ejecucion de la API
-- 2. Eliminar database 
DROP DATABASE barberscommunity;
-- 3. Crear la base de datos
CREATE DATABASE barberscommunity;

--4.Ejecutar ...api/ npm start
--5. Ejecutar sentencias SQL
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
INSERT INTO "styles" (id, description) VALUES (1, 'American');
INSERT INTO "styles" (id, description) VALUES (2, 'Clasic');
INSERT INTO "styles" (id, description) VALUES (3, 'Fresco');
INSERT INTO "styles" (id, description) VALUES (4, 'Juvenil');
INSERT INTO "styles" (id, description) VALUES (5, 'Modern');
INSERT INTO "styles" (id, description) VALUES (6, 'Versátil');
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


Samples: Datos para ingresar en clients:
/*​
"id": 1,
"name": "Alexander",
"lastname": "Mina",
"email": "alexMina@gmail.com",
"image": [
    "sdfgfd",
    "sdfsdfg"
],
"mobile": 1234567,
"location": "Colombia",
"password": "demo",
"status": true,
"createdAt": "2021-06-11T02:15:53.926Z",
"updatedAt": "2021-06-11T02:15:53.926Z",
"faceTypeId": 2,
"hairTypeId": 3,
"styleId": 1
*/



 
Table "public.appointments"
     Column      |           Type           | Collation | Nullable | Default 
-----------------+--------------------------+-----------+----------+---------
 date            | timestamp with time zone |           | not null | 
 status          | enum_appointments_status |           | not null | 
 total           | double precision         |           | not null | 
 createdAt       | timestamp with time zone |           | not null | 
 updatedAt       | timestamp with time zone |           | not null | 
 serviceBarberId | integer                  |           | not null | 
 clientId        | integer                  |           | not null | 
Indexes:
    "appointments_pkey" PRIMARY KEY, btree ("serviceBarberId", "clientId")
Foreign-key constraints:
    "appointments_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES clients(id) ON UPDATE CASCADE ON DELETE CASCADE
    "appointments_serviceBarberId_fkey" FOREIGN KEY ("serviceBarberId") REFERENCES "serviceBarbers"(id) ON UPDATE CASCADE ON DELETE CASCADE
/*********************************************************************/
Table "public.barbers"
/*********************************************************************/

  Column   |           Type           | Collation | Nullable |                      Default                       
-----------+--------------------------+-----------+----------+----------------------------------------------------
 id        | integer                  |           | not null | nextval('barbers_id_seq'::regclass)
 name      | character varying(255)   |           | not null | 
 lastname  | character varying(255)   |           | not null | 
 email     | character varying(255)   |           | not null | 
 image     | character varying(255)[] |           | not null | ARRAY['https://imagenurl'::character varying(255)]
 mobile    | integer                  |           | not null | 
 location  | character varying(255)   |           | not null | 
 password  | character varying(255)   |           | not null | 
 status    | boolean                  |           | not null | 
 alias     | character varying(255)   |           | not null | 
 resume    | character varying(255)   |           | not null | 
 bio       | character varying(255)   |           | not null | 
 rating    | integer                  |           | not null | 
 createdAt | timestamp with time zone |           | not null | 
 updatedAt | timestamp with time zone |           | not null | 
Indexes:
    "barbers_pkey" PRIMARY KEY, btree (id)
    "barbers_email_key" UNIQUE CONSTRAINT, btree (email)
Referenced by:
    TABLE ""faceTypeBarber"" CONSTRAINT "faceTypeBarber_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES barbers(id) ON UPDATE CASCADE ON DELETE CASCADE
    TABLE ""hairTypeBarber"" CONSTRAINT "hairTypeBarber_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES barbers(id) ON UPDATE CASCADE ON DELETE CASCADE
    TABLE ""serviceBarbers"" CONSTRAINT "serviceBarbers_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES barbers(id) ON UPDATE CASCADE ON DELETE SET NULL
    TABLE ""styleBarber"" CONSTRAINT "styleBarber_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES barbers(id) ON UPDATE CASCADE ON DELETE CASCADE

/*********************************************************************/
Table "public.categories"
/*********************************************************************/
   Column    |           Type           | Collation | Nullable |                      Default                       
-------------+--------------------------+-----------+----------+----------------------------------------------------
 id          | integer                  |           | not null | nextval('categories_id_seq'::regclass)
 name        | character varying(255)   |           | not null | 
 description | character varying(255)   |           | not null | 
 image       | character varying(255)[] |           | not null | ARRAY['https://imagenurl'::character varying(255)]
 createdAt   | timestamp with time zone |           | not null | 
 updatedAt   | timestamp with time zone |           | not null | 
Indexes:
    "categories_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE ""categoryBarber"" CONSTRAINT "categoryBarber_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES categories(id) ON UPDATE CASCADE ON DELETE CASCADE
/*********************************************************************/
Table "public.categoryBarber"
/*********************************************************************/
     Column      |           Type           | Collation | Nullable | Default 
-----------------+--------------------------+-----------+----------+---------
 createdAt       | timestamp with time zone |           | not null | 
 updatedAt       | timestamp with time zone |           | not null | 
 serviceBarberId | integer                  |           | not null | 
 categoryId      | integer                  |           | not null | 
Indexes:
    "categoryBarber_pkey" PRIMARY KEY, btree ("serviceBarberId", "categoryId")
Foreign-key constraints:
    "categoryBarber_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES categories(id) ON UPDATE CASCADE ON DELETE CASCADE
    "categoryBarber_serviceBarberId_fkey" FOREIGN KEY ("serviceBarberId") REFERENCES "serviceBarbers"(id) ON UPDATE CASCADE ON DELETE CASCADE

/*********************************************************************/
 Table "public.clients"
 /*********************************************************************/
   Column   |           Type           | Collation | Nullable |                      Default                       
------------+--------------------------+-----------+----------+----------------------------------------------------
 id         | integer                  |           | not null | nextval('clients_id_seq'::regclass)
 name       | character varying(255)   |           | not null | 
 lastname   | character varying(255)   |           | not null | 
 email      | character varying(255)   |           | not null | 
 image      | character varying(255)[] |           | not null | ARRAY['https://imagenurl'::character varying(255)]
 mobile     | integer                  |           | not null | 
 location   | character varying(255)   |           | not null | 
 password   | character varying(255)   |           | not null | 
 status     | boolean                  |           | not null | 
 createdAt  | timestamp with time zone |           | not null | 
 updatedAt  | timestamp with time zone |           | not null | 
 faceTypeId | integer                  |           |          | 
 hairTypeId | integer                  |           |          | 
 styleId    | integer                  |           |          | 
Indexes:
    "clients_pkey" PRIMARY KEY, btree (id)
    "clients_email_key" UNIQUE CONSTRAINT, btree (email)
Foreign-key constraints:
    "clients_faceTypeId_fkey" FOREIGN KEY ("faceTypeId") REFERENCES "faceTypes"(id) ON UPDATE CASCADE ON DELETE SET NULL
    "clients_hairTypeId_fkey" FOREIGN KEY ("hairTypeId") REFERENCES "hairTypes"(id) ON UPDATE CASCADE ON DELETE SET NULL
    "clients_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES styles(id) ON UPDATE CASCADE ON DELETE SET NULL
Referenced by:
    TABLE "appointments" CONSTRAINT "appointments_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES clients(id) ON UPDATE CASCADE ON DELETE CASCADE

/*********************************************************************/
Table "public.detailAppointments"
/*********************************************************************/
    Column     |           Type           | Collation | Nullable |                     Default                      
---------------+--------------------------+-----------+----------+--------------------------------------------------
 id            | integer                  |           | not null | nextval('"detailAppointments_id_seq"'::regclass)
 idAppointment | integer                  |           | not null | 
 idService     | integer                  |           | not null | 
 price         | double precision         |           | not null | 
 createdAt     | timestamp with time zone |           | not null | 
 updatedAt     | timestamp with time zone |           | not null | 
Indexes:
    "detailAppointments_pkey" PRIMARY KEY, btree (id)

/*********************************************************************/
Table "public.faceTypeBarber"
/*********************************************************************/
   Column   |           Type           | Collation | Nullable | Default 
------------+--------------------------+-----------+----------+---------
 createdAt  | timestamp with time zone |           | not null | 
 updatedAt  | timestamp with time zone |           | not null | 
 barberId   | integer                  |           | not null | 
 faceTypeId | integer                  |           | not null | 
Indexes:
    "faceTypeBarber_pkey" PRIMARY KEY, btree ("barberId", "faceTypeId")
Foreign-key constraints:
    "faceTypeBarber_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES barbers(id) ON UPDATE CASCADE ON DELETE CASCADE
    "faceTypeBarber_faceTypeId_fkey" FOREIGN KEY ("faceTypeId") REFERENCES "faceTypes"(id) ON UPDATE CASCADE ON DELETE CASCADE


/*********************************************************************/
Table "public.faceTypes"
/*********************************************************************/
   Column    |          Type          | Collation | Nullable |                 Default                 
-------------+------------------------+-----------+----------+-----------------------------------------
 id          | integer                |           | not null | nextval('"faceTypes_id_seq"'::regclass)
 description | character varying(255) |           | not null | 
Indexes:
    "faceTypes_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "clients" CONSTRAINT "clients_faceTypeId_fkey" FOREIGN KEY ("faceTypeId") REFERENCES "faceTypes"(id) ON UPDATE CASCADE ON DELETE SET NULL
    TABLE ""faceTypeBarber"" CONSTRAINT "faceTypeBarber_faceTypeId_fkey" FOREIGN KEY ("faceTypeId") REFERENCES "faceTypes"(id) ON UPDATE CASCADE ON DELETE CASCADE

/*********************************************************************/
Table "public.hairTypeBarber"
/*********************************************************************/
   Column   |           Type           | Collation | Nullable | Default 
------------+--------------------------+-----------+----------+---------
 createdAt  | timestamp with time zone |           | not null | 
 updatedAt  | timestamp with time zone |           | not null | 
 barberId   | integer                  |           | not null | 
 hairTypeId | integer                  |           | not null | 
Indexes:
    "hairTypeBarber_pkey" PRIMARY KEY, btree ("barberId", "hairTypeId")
Foreign-key constraints:
    "hairTypeBarber_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES barbers(id) ON UPDATE CASCADE ON DELETE CASCADE
    "hairTypeBarber_hairTypeId_fkey" FOREIGN KEY ("hairTypeId") REFERENCES "hairTypes"(id) ON UPDATE CASCADE ON DELETE CASCADE
/*********************************************************************/
Table "public.hairTypes"
/*********************************************************************/
   Column    |          Type          | Collation | Nullable |                 Default                 
-------------+------------------------+-----------+----------+-----------------------------------------
 id          | integer                |           | not null | nextval('"hairTypes_id_seq"'::regclass)
 description | character varying(255) |           | not null | 
Indexes:
    "hairTypes_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "clients" CONSTRAINT "clients_hairTypeId_fkey" FOREIGN KEY ("hairTypeId") REFERENCES "hairTypes"(id) ON UPDATE CASCADE ON DELETE SET NULL
    TABLE ""hairTypeBarber"" CONSTRAINT "hairTypeBarber_hairTypeId_fkey" FOREIGN KEY ("hairTypeId") REFERENCES "hairTypes"(id) ON UPDATE CASCADE ON DELETE CASCADE

/*********************************************************************/
Table "public.serviceBarbers"
/*********************************************************************/
   Column    |           Type           | Collation | Nullable |                      Default                       
-------------+--------------------------+-----------+----------+----------------------------------------------------
 id          | integer                  |           | not null | nextval('"serviceBarbers_id_seq"'::regclass)
 name        | character varying(255)   |           | not null | 
 price       | character varying(255)   |           | not null | 
 description | character varying(255)   |           | not null | 
 image       | character varying(255)[] |           | not null | ARRAY['https://imagenurl'::character varying(255)]
 createdAt   | timestamp with time zone |           | not null | 
 updatedAt   | timestamp with time zone |           | not null | 
 barberId    | integer                  |           |          | 
Indexes:
    "serviceBarbers_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "serviceBarbers_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES barbers(id) ON UPDATE CASCADE ON DELETE SET NULL
Referenced by:
    TABLE "appointments" CONSTRAINT "appointments_serviceBarberId_fkey" FOREIGN KEY ("serviceBarberId") REFERENCES "serviceBarbers"(id) ON UPDATE CASCADE ON DELETE CASCADE
    TABLE ""categoryBarber"" CONSTRAINT "categoryBarber_serviceBarberId_fkey" FOREIGN KEY ("serviceBarberId") REFERENCES "serviceBarbers"(id) ON UPDATE CASCADE ON DELETE CASCADE

/*********************************************************************/
Table "public.styleBarber"
/*********************************************************************/
  Column   |           Type           | Collation | Nullable | Default 
-----------+--------------------------+-----------+----------+---------
 createdAt | timestamp with time zone |           | not null | 
 updatedAt | timestamp with time zone |           | not null | 
 barberId  | integer                  |           | not null | 
 styleId   | integer                  |           | not null | 
Indexes:
    "styleBarber_pkey" PRIMARY KEY, btree ("barberId", "styleId")
Foreign-key constraints:
    "styleBarber_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES barbers(id) ON UPDATE CASCADE ON DELETE CASCADE
    "styleBarber_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES styles(id) ON UPDATE CASCADE ON DELETE CASCADE


/*********************************************************************/
Table "public.subscriptions"
/*********************************************************************/
  Column   |           Type           | Collation | Nullable | Default 
-----------+--------------------------+-----------+----------+---------
 id        | integer                  |           | not null | 
 name      | character varying(255)   |           | not null | 
 price     | integer                  |           | not null | 
 category  | character varying(255)   |           | not null | 
 createdAt | timestamp with time zone |           | not null | 
 updatedAt | timestamp with time zone |           | not null | 
Indexes:
    "subscriptions_pkey" PRIMARY KEY, btree (id)
    "subscriptions_name_key" UNIQUE CONSTRAINT, btree (name)

/*********************************************************************/
Table "public.users"
/*********************************************************************/
   Column   |           Type           | Collation | Nullable |              Default              
------------+--------------------------+-----------+----------+-----------------------------------
 id         | integer                  |           | not null | nextval('users_id_seq'::regclass)
 nombre     | character varying(255)   |           | not null | 
 contraseña | character varying(255)   |           | not null | 
 email      | character varying(255)   |           | not null | 
 tipo       | enum_users_tipo          |           | not null | 
 createdAt  | timestamp with time zone |           | not null | 
 updatedAt  | timestamp with time zone |           | not null | 
Indexes:
    "users_pkey" PRIMARY KEY, btree (id)



