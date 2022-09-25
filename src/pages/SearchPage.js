import SearchBox from "../components/ui/SearchBox";
import {Container, Form, Row, Col, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

function SearchPage(){
    return (
        <div style={{padding:"150px", backgroundImage: "url(https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1992&q=80)"}}>
            <h1>Parkster</h1>
            <h2>Norges enkleste sted å finne parkeringsplass!</h2>
            <SearchBox/>
        </div>

    )
}

/*function SearchPage() {
    return(
        <div style={{padding:"150px", backgroundImage: "url(https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1992&q=80)"}}>
            <h1>heisann</h1>
            <div style="border-radius:25px">
            <Card className="mx-auto p-4 m-5 w-75">
                <Form>
                    <Form.Group>
                        <Form.Label>email address</Form.Label>
                        <Form.Control type="email" placeholder="example@email.com"/>
                        <Form.Text className="text-muted">
                            we will not steal your email:))
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Card>
            </div>
        </div>
    );
}
 */


export default SearchPage;