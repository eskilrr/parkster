import classes from "./NewParkingForm.module.css"
import {useRef} from "react";

function NewParkingForm(props) {
    const nameInputRef = useRef();
    const cityInputRef = useRef();
    const postalCodeInputRef = useRef();
    const lengthInputRef = useRef();
    const widthInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    const pictureInputRef = useRef();
    const tlfInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredLength = lengthInputRef.current.value;
        const enteredWidth = widthInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredPicture = pictureInputRef.current.value;
        const enteredTlf = tlfInputRef.current.value;

        const parkingSpotData = {
            length: enteredLength,
            width: enteredWidth,
            address: enteredAddress,
            description: enteredDescription,
            picture: enteredPicture,
            postalCode: enteredPostalCode,
            city: enteredCity,
            name: enteredName,
            tlf: enteredTlf
        }
        console.log("øjlwhdfljsk")
        props.onAddNewParkingSpot(parkingSpotData)
    }

    return (

        <div className={classes.card}>
            <form onSubmit={submitHandler}>
                <ul className={classes.formStyle}>
                    <h3 className={classes.title}>Create parking spot</h3>

                    <li>
                        <label htmlFor="name">Name</label>
                        <input type="text" required id="name"/>
                    </li>
                    <li>
                        <label htmlFor="length">Length</label>
                        <input type="text" required id="length" ref={lengthInputRef}/>
                    </li>

                    <li>
                        <label htmlFor="width">Width</label>
                        <input type="text" required id="width" ref={widthInputRef}/>
                    </li>

                    <li>
                        <label htmlFor="city">City</label>
                        <input required id="postalCode" ref={postalCodeInputRef} className={classes.postalCode} placeholder="Postal code"/>
                        <input required id="city" ref={cityInputRef} className={classes.city} placeholder="City"/>
                    </li>

                    <li>
                        <label htmlFor="address">Address</label>
                        <input required id="address" ref={addressInputRef}/>
                    </li>

                    <li>
                        <label htmlFor="tlf">Contact</label>
                        <input type = "text" required id="tlf" ref = {tlfInputRef} placeholder="Tlf"/>
                    </li>

                    <li>
                        <label htmlFor="description">Description</label>
                        <textarea required id="desctiption" ref={descriptionInputRef}/>
                    </li>

                    <li>
                        <label htmlFor="picture">picture</label>
                        <input type = "text" required id="picture" ref = {pictureInputRef}/>
                    </li>

                    <div className={classes.actions}>
                        <button>Create</button>
                    </div>
                </ul>
            </form>
        </div>
    )
}

export default NewParkingForm;