import NewParkingForm from "../components/ui/NewParkingForm";
import {useNavigate} from "react-router-dom"

function NewParkingSpotPage() {
    const navigate = useNavigate();

    function addNewParkingSpotHandler(parkingSpots){
        fetch("https://parkster-ff46d-default-rtdb.firebaseio.com/parkingspots.json",
            {
                method: "POST",
                body: JSON.stringify(parkingSpots),
                headers: {
                    "content-type" : "application/JSON"
                }
            }
            ).then(() => {
                console.log("ojsdhfjlshfljasf")
                navigate("/")
        });
    }

    return (
        <NewParkingForm onAddNewParkingSpot={addNewParkingSpotHandler}/>
    )
}

export default NewParkingSpotPage;