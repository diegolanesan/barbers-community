// importar Footer
import cutHair from '../../../resources/cut-hair.jpg'

function Home() {

    // Agregar function para redirigir a las rutas correspondientes en cada caso 
    
    return (
        <div>
           <div className="bg-hero h-screen bg-center bg-no-repeat bg-cover flex flex-col justify-center h-vh">
                <h1 className="pl-24 pb-4 text-3xl text-white"> Barber's Community </h1>
                <button className="w-1/5 ml-20 bg-blue-400 text-white font-bold hover:bg-blue-600 py-2 px-4 rounded"> 
                    Find your next barber
                </button>
            </div>

            <div className="text-center mt-8 mb-16">
                <h2 className="text-3xl pb-4"> Explore Barber's Community </h2>
                <p className="w-2/5 mx-auto"> Our expert barbers are classified into three large groups: legendary barbers, 
                    masters and urban barbers. Find out which one is the best fit for you. 
                </p>
                <div className="grid-cols-3 gap-8 flex justify-center h-48 my-8">
                    <div className="flex justify-center items-center bg-barber-types bg-center bg-no-repeat bg-cover w-1/5 rounded-md">
                        <h3 className="text-white text-3xl"> Legendary Barbers </h3>
                    </div>
                    <div className="flex justify-center items-center bg-barber-types bg-center bg-no-repeat bg-cover w-1/5 rounded-md">
                        <h3 className="text-white text-3xl"> Masters Barbers</h3>
                    </div>
                    <div className="flex justify-center items-center bg-barber-types bg-center bg-no-repeat bg-cover w-1/5 rounded-md">
                        <h3 className="text-white text-3xl"> Urban Barbers </h3>
                    </div>
                </div>
            </div>

            <div className="text-center mt-8">
                <h2 className="text-3xl pb-4"> Choose your service </h2>
                <p className="w-2/5 mx-auto"> Our expert barbers are classified into three large groups: legendary barbers, 
                    masters and urban barbers. Find out which one is the best fit for you. 
                </p>
                <div className="grid-cols-4 flex justify-center h-48 pt-12 gap-12">
                    <div className="">
                        <img className="max-h-48 rounded" src={cutHair} alt="cut-hair" />
                        <h3 className="text-lg pt-2"> Militar cuthair </h3>
                        <p className="text-sm"> Description of the service </p>
                    </div>
               
                    <div className="">
                        <img className="max-h-48 rounded" src={cutHair} alt="cut-hair" />
                        <h3 className="text-lg pt-2"> CR7 cuthair</h3>
                        <p className="text-sm"> Description of the service </p>
                    </div>

                    <div className="">
                        <img className="max-h-48 rounded" src={cutHair} alt="cut-hair" />
                        <h3 className="text-lg pt-2"> Barber design </h3>
                        <p className="text-sm"> Description of the service </p>
                    </div>

                    <div className="">
                        <img className="max-h-48 rounded" src={cutHair} alt="cut-hair" />
                        <h3 className="text-lg pt-2"> Pompadur </h3>
                        <p className="text-sm"> Description of the service </p>
                    </div>
                </div>
          
            </div>

        </div>
    )
}

export default Home