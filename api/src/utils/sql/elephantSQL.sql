DB_USER = 'fcuxnish'
DB_PASSWORD = 'u2_xR_k6KnHBpHP4Ge1T5RdXbwoaa9ui'
DB_HOST = batyr.db.elephantsql.com



INSERT INTO "barbers" ( name, lastname ,  email, image, mobile, location, password , status ,  alias  , resume , bio ,rating, type)
        VALUES ( 
        'Seba' ,
        'Ciare', 
        'eduardociare871@gmail.com',         
        '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562800/Barbers/32_cjcpzm.jpg}', 
        '02645410738', 
        'Buenos Aires, Argentina',
        'demo123', 
        't',
        'Argentino Barber', 
        'Especialista en servicios de barberia', 
        'Educador y profesional', 
        4.5, 
        'Academy');
