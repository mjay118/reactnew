import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const cardStyle = {
    backgroundColor: ' hsl(240deg 14% 93%)',
    width: '18rem'
}

const addContainer = {
    backgroundColor: 'hsl(240deg 14% 93%)',
    width: '18rem'
}

const formStyle = {
    width: '16rem'
}

const addListStyle = {
    width: "15rem",
    backgroundColor: "rhsl(202deg 60% 52%)"
}
const List = () => {
    return (
        <div className="container">
            <div className="d-flex" id="pdiv">
                <div >
                    <div className="mt-3 ml-3">
                        <Card style={cardStyle}>
                            <Card.Title className="mt-3  ml-4">Demo Card 1</Card.Title>
                            <Card.Body >
                                <Form>
                                    <Form.Control type="text" />
                                </Form>
                                <div className="mt-3">+Add Another Card</div>

                            </Card.Body>
                        </Card>
                        <br></br>
                        <div style={addContainer}><br></br>
                            <Form >
                                <Form.Control className="ml-3" type="text" style={formStyle} />
                            </Form>
                            <Button className="mt-2 mb-2 ml-3" variant="success">Add</Button>
                        </div>
                        <br></br>

                        <div>
                            <Button size="sm" className="p-2" style={addListStyle}>
                                Add List
                    </Button>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="mt-3 ml-3">
                        <Card style={cardStyle}>
                            <Card.Title className="mt-3 ml-4">Demo Card 2</Card.Title>
                            <Card.Body >
                                <Form>
                                    <Form.Control type="text" />
                                </Form>
                                <div className="mt-3"> + Add Another Card</div>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default List;