import ParkingList from "../components/ui/ParkingList"
import {useEffect, useState} from "react";



function AllParkingPage(){
    const [isLoading, setIsLoading] = useState(true)
    const [loadedParkingSpots, setLoadedParkingSpots] = useState([])
    useEffect(() => {
        fetch("https://parkster-ff46d-default-rtdb.firebaseio.com/parkingspots.json")
            .then(response => {
                return response.json()
            })
            .then(data => {
                const parkingSpots = []
                for (const key in data ){
                    const parkingSpot = {
                        id:key,
                        ...data[key]
                    };
                    parkingSpots.push(parkingSpot)
                }

                setLoadedParkingSpots(parkingSpots)
                setIsLoading(false)
            })

    }, [])

    if (isLoading){
        return (
            <p>loading..</p>
        )
    }

    return (
        <ParkingList parkingspots={loadedParkingSpots}/>

    )
}

export default AllParkingPage;