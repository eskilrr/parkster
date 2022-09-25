import classes from "./ParkingItem.module.css"
import "bootstrap/dist/css/bootstrap.min.css"

function ParkingItem(props){
    return(
        <div className={classes.card}>
            <img className={classes.img}
                alt="garasje 1"
                src="https://elfa.com/-/media/images/consumer/elfa-story---garage---elise-steffensen/elfa-storage-solution-garage-overview.ashx"
            />

            <div className={classes.text}>
                <h3>Garasjen til {props.parkingspot.name}</h3>
                <p>Lengde = {props.parkingspot.length} m, bredde = {props.parkingspot.width} m</p>
                <p>Adresse: {props.parkingspot.address}</p>
                <p>Contact: {props.parkingspot.tlf}</p>
            </div>
        </div>
    )
}

export default ParkingItem;