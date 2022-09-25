import ParkingItem from "./ParkingItem";

function ParkingList(props){


    return (
        <ul>
            {props.parkingspots.map(spot => <ParkingItem
                key={spot.id}
                parkingspot={spot}
            />)}
        </ul>
    )
}

export default ParkingList