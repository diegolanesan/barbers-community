const confirmationMail = (cart, client) => {
    return (
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank you for your order!</title>
            <style>
                body {
                    font-family: 'Lato';
                }
                .container { 
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                }
                .header {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    background-color:#232227;
                    color: #fff;
                    font-family: 'Prata';
                }

                .detail {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
            </style>
        </head>
        <body>
            <div class="container"> 
                <div class="header" style="padding: 1rem 2rem;">
                    <h1 style="margin-right: 3rem; font-size: 1.5rem;"> Barbers Community </h1>
                    <img style="width: 5rem;" src="./moustache.png"> </img>
                </div>

                <div>
                    
                    <h2 style="margin-top: 3rem; font-size: 1.25rem;"> Hello ${client.name}, </h2>
                    <p> Thank your your order! Here's your purchase detail.</p>
                    <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; 
                                margin-top: 3rem;">
                        <p style="font-weight: bold;"> Your appointment </p> 
                    </div>
                    <hr>
                    <div class="detail">
                        <p> Your have a reservation for <span style="font-weight: bold;">${cart.date}, at ${cart.date}. </span> </p>
                    </div>
                    
                    <p style="margin-top: 3rem; font-weight: bold;"> Services </p>
                    <hr>
                    <div class="detail">
                        <p> Total amount </p>
                        <p style="font-weight: bold;"> ${cart.totalAmount} </p>
                    </div>
                
                </div>
            </div>
        </body>
        </html>
        
 `
    )
}

module.exports= {
    confirmationMail
}