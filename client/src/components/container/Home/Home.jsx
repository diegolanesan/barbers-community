// importar Footer
import cutHair from '../../../resources/cut-hair.jpg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getServices } from '../../../redux/action/services'
import { getBarbersByType } from '../../../redux/action/barbers'

function Home() {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getServices()) },
        [dispatch])
    const services = useSelector(state => state.services.array)

    function findByType(type) {
        dispatch(getBarbersByType(type))
    }

    return (
        <div>
            <div className="bg-hero h-screen bg-center bg-no-repeat bg-cover flex flex-col justify-center h-vh">
                <h1 className="pl-24 pb-4 text-3xl text-white"> Barber's Community </h1>
                <button className="w-1/5 ml-20 bg-blue-400 text-white font-bold hover:bg-blue-600 py-2 px-4 rounded">
                    <Link to="/catalog"> Find your next barber </Link>
                </button>
            </div>

            <div className="text-center mt-8 mb-16">
                <h2 className="text-3xl pb-4"> Explore Barber's Community </h2>
                <p className="w-2/5 mx-auto"> Our expert barbers are classified into three large groups: legendary barbers,
                    masters and urban barbers. Find out which one is the best fit for you.
                </p>
                <div className="grid-cols-3 gap-8 flex justify-center h-48 my-8">
                    <div onClick={() => findByType("tecnicocapilar")} className="flex justify-center items-center bg-tecnico-capilar bg-center bg-no-repeat bg-cover w-1/5 rounded-md
                        opacity-100 transition duration-500 ease-in-out hover:shadow-xl transform hover:-translate-y-1 hover:scale-110">
                        <Link to='/catalog'> <h3 className="text-white font-bold text-3xl cursor-pointer"> Hair Technician </h3> </Link>
                    </div>
                    <div onClick={() => findByType("academico")} className="flex justify-center items-center bg-academico bg-center bg-no-repeat bg-cover w-1/5 rounded-md
                        opacity-100 transition duration-500 ease-in-out hover:shadow-xl transform hover:-translate-y-1 hover:scale-110">
                        <Link to='/catalog'> <h3 className="text-white font-bold text-3xl cursor-pointer"> Academic Barbers</h3> </Link>
                    </div>
                    <div onClick={() => findByType("urbano")} className="flex justify-center items-center bg-urbano bg-center bg-no-repeat bg-cover w-1/5 rounded-md
                        opacity-100 transition duration-500 ease-in-out hover:shadow-xl transform hover:-translate-y-1 hover:scale-110">
                        <Link to='/catalog'> <h3 className="text-white font-bold text-3xl cursor-pointer"> Urban Barbers </h3>  </Link>
                    </div>
                </div>
            </div>

            <div className="text-center mt-8">
                <h2 className="text-3xl pb-4"> Choose your service </h2>
                <p className="w-2/5 mx-auto"> Our expert barbers are classified into three large groups: legendary barbers,
                    masters and urban barbers. Find out which one is the best fit for you.
                </p>

                <div className="grid-cols-4 flex justify-center h-48 pt-12 gap-12">
                    {
                        services && services.map(service => {
                            return <div className="">
                                <img className="max-h-48 rounded" src={cutHair} alt="cut-hair" />
                                <h3 className="text-lg pt-2"> {service.name} </h3>
                                <p className="text-sm"> {service.description} </p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home