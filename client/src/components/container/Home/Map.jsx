import React, { useEffect } from 'react';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
// import './Home.css';


const Home = (props) => {


    // const buildings = useSelector(state => state.buildingReducer.allBuildings);
    // const alerts = useSelector(state => state.alertsReducer.allAlerts);
    // const spends = useSelector(state => state.reducerSpending.totalSpending); //prueba marian
    // const dispatch = useDispatch();
    // const today = new Date();


    // useEffect(() => {
    //     dispatch(getBuildings());
    //     dispatch(getAlerts());
    // }, [dispatch])


    return (

        <MapContainer style={{ height: "450px", width: "100%" }} center={[-31.426780, -64.190910]} zoom={12}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* {
                buildings && buildings?.map((building, i) => <Marker key={i} position={[(building.latitude || -31.426780), (building.longitude || -64.190910)]}>
                    <Popup>
                        <h3>{building.name}</h3>
                    </Popup>
                </Marker>
                )
            } */}
        </MapContainer>

    );
};
export default Home;