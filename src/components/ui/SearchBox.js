import classes from "./SearchBox.module.css"
import {Button, Container, Row, Col, InputGroup, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import {useRef} from "react";
import button from "bootstrap/js/src/button";

function SearchBox(){
    const userInput = useRef();

    function searchHandler(){
        const userInput = userInput.current.value;

        const data = {
            enteredUserInput : userInput
        }
        console.log(userInput)
    }


    return (
        <div className={classes.card}>
            <Row className="justify-content-md-center">
                <Col>
                    <p className={classes.step}>1. Søk etter sted</p>
                </Col>
                <Col>
                    <p className={classes.step}>2. Velg passende parkering</p>
                </Col>
                <Col>
                    <p className={classes.step}>3. Ta kontakt!</p>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <InputGroup onSubmit={searchHandler} className="mb-3">
                    <Form.Control
                        ref={userInput}
                        placeholder="By eller postnummer"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2" className={classes.button}>
                        Søk!
                    </Button>
                </InputGroup>
            </Row>
        </div>
    )
}

export default SearchBox;