// importar Footer
import cutHair from '../../../resources/cut-hair.jpg'

function Home() {

    // Agregar function para redirigir a las rutas correspondientes en cada caso 
    
    return (
        <div>
            {/* className={styles.hero} */}
           <div class="bg-hero h-screen bg-center bg-no-repeat bg-cover flex flex-col justify-center h-vh">
                <h1 class="pl-24 pb-4 text-3xl text-white"> Barber's Community </h1>
                <button class="w-1/5 ml-20 bg-blue-400 text-white font-bold hover:bg-blue-600 py-2 px-4 rounded"> 
                    Find your next barber
                </button>
            </div>

            <div class="text-center mt-8 mb-16">
                <h2 class="text-3xl pb-4"> Explore Barber's Community </h2>
                <p class="w-2/5 mx-auto"> Our expert barbers are classified into three large groups: legendary barbers, 
                    masters and urban barbers. Find out which one is the best fit for you. 
                </p>
                <div class="grid-cols-3 gap-8 flex justify-center h-48 my-8">
                    <div class="flex justify-center items-center bg-barber-types bg-center bg-no-repeat bg-cover w-1/5 rounded-md">
                        <h3 class="text-white text-3xl"> Legendary Barbers </h3>
                    </div>
                    <div class="flex justify-center items-center bg-barber-types bg-center bg-no-repeat bg-cover w-1/5 rounded-md">
                        <h3 class="text-white text-3xl"> Masters Barbers</h3>
                    </div>
                    <div class="flex justify-center items-center bg-barber-types bg-center bg-no-repeat bg-cover w-1/5 rounded-md">
                        <h3 class="text-white text-3xl"> Urban Barbers </h3>
                    </div>
                </div>
            </div>

            <div class="text-center mt-8">
                <h2 class="text-3xl pb-4"> Choose your service </h2>
                <p class="w-2/5 mx-auto"> Our expert barbers are classified into three large groups: legendary barbers, 
                    masters and urban barbers. Find out which one is the best fit for you. 
                </p>
                <div class="grid-cols-4 flex justify-center h-48 pt-12 gap-12">
                    <div class="">
                        <img class="max-h-48 rounded" src={cutHair} alt="cut-hair" />
                        <h3 class="text-lg pt-2"> Militar cuthair </h3>
                        <p class="text-sm"> Description of the service </p>
                    </div>
               
                    <div class="">
                        <img class="max-h-48 rounded" src={cutHair} alt="cut-hair" />
                        <h3 class="text-lg pt-2"> CR7 cuthair</h3>
                        <p class="text-sm"> Description of the service </p>
                    </div>

                    <div class="">
                        <img class="max-h-48 rounded" src={cutHair} alt="cut-hair" />
                        <h3 class="text-lg pt-2"> Barber design </h3>
                        <p class="text-sm"> Description of the service </p>
                    </div>

                    <div class="">
                        <img class="max-h-48 rounded" src={cutHair} alt="cut-hair" />
                        <h3 class="text-lg pt-2"> Pompadur </h3>
                        <p class="text-sm"> Description of the service </p>
                    </div>
                </div>
          
            </div>

        </div>
    )
}

export default Home