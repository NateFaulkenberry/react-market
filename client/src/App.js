// /client/App.js
import React, { Component } from "react";
//import axios from "axios";

import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';

import 'holderjs';

import SelectMarketModal from './SelectMarketModal';
import AddEditItemModal from './AddEditItemModal';
import CartModal from './CartModal';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectMarketModalShow: true,
            addEditItemModalDisplay: false,
            cartModalDisplay: false,
            addEditItem: null,
            marketView: null
        }
    }
    // initialize our state
    /*state = {
        data: [],
        id: 0,
        message: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null
    };*/

    // when component mounts, first thing it does is fetch all existing data in our db
    // then we incorporate a polling logic so that we can easily see if our db has
    // changed and implement those changes into our UI
    /*componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({ intervalIsSet: interval });
        }
    }*/

    // never let a process live forever
    // always kill a process everytime we are done using it
    /*componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }*/

    // just a note, here, in the front end, we use the id key of our data object
    // in order to identify which we want to Update or delete.
    // for our back end, we use the object id assigned by MongoDB to modify
    // data base entries

    // our first get method that uses our backend api to
    // fetch data from our data base
    /*getDataFromDb = () => {
        fetch("http://localhost:3001/api/getData")
            .then(data => data.json())
            .then(res => this.setState({ data: res.data }));
    };*/

    // our put method that uses our backend api
    // to create new query into our data base
    /*
    putDataToDB = message => {
        let currentIds = this.state.data.map(data => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        axios.post("http://localhost:3001/api/putData", {
            id: idToBeAdded,
            message: message
        });
    };*/


    // our delete method that uses our backend api
    // to remove existing database information
    /*
    deleteFromDB = idTodelete => {
        let objIdToDelete = null;
        this.state.data.forEach(dat => {
            if (dat.id == idTodelete) {
                objIdToDelete = dat._id;
            }
        });

        axios.delete("http://localhost:3001/api/deleteData", {
            data: {
                id: objIdToDelete
            }
        });
    };*/


    // our update method that uses our backend api
    // to overwrite existing data base information
    /*
    updateDB = (idToUpdate, updateToApply) => {
        let objIdToUpdate = null;
        this.state.data.forEach(dat => {
            if (dat.id == idToUpdate) {
                objIdToUpdate = dat._id;
            }
        });

        axios.post("http://localhost:3001/api/updateData", {
            id: objIdToUpdate,
            update: { message: updateToApply }
        });
    };*/


    // here is our UI
    // it is easy to understand their functions when you
    // see them render into our screen
    render() {
        /*
        const { data } = this.state;
        return (
            <div>
                <ul>
          {data.length <= 0
              ? "NO DB ENTRIES YET!"
              : data.map(dat => (
              <li style={{ padding: "10px" }} key={data.message}>
                  <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                  <span style={{ color: "gray" }}> data: </span>
                  {dat.message}
              </li>
          ))}
                </ul>
                <div style={{ padding: "10px" }}>
                    <input
                        type="text"
                        onChange={e => this.setState({ message: e.target.value })}
                        placeholder="add something in the database"
                        style={{ width: "200px" }}
                    />
                    <button onClick={() => this.putDataToDB(this.state.message)}>
                        ADD
                    </button>
                </div>
                <div style={{ padding: "10px" }}>
                    <input
                        type="text"
                        style={{ width: "200px" }}
                        onChange={e => this.setState({ idToDelete: e.target.value })}
                        placeholder="put id of item to delete here"
                    />
                    <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
                        DELETE
                    </button>
                </div>
                <div style={{ padding: "10px" }}>
                    <input
                        type="text"
                        style={{ width: "200px" }}
                        onChange={e => this.setState({ idToUpdate: e.target.value })}
                        placeholder="id of item to update here"
                    />
                    <input
                        type="text"
                        style={{ width: "200px" }}
                        onChange={e => this.setState({ updateToApply: e.target.value })}
                        placeholder="put new value of the item here"
                    />
                    <button
                        onClick={() =>
                            this.updateDB(this.state.idToUpdate, this.state.updateToApply)
                            }
                    >
                        UPDATE
                    </button>
                </div>
            </div>

        );*/

        let selectMarketModalHide = (marketView) => this.setState({ selectMarketModalShow: false, marketView: marketView });
        let addEditItemModalDisplay = (display, addOrEdit) => this.setState({ addEditItemModalDisplay: display, addEditItem: addOrEdit });

        let marketView = this.state.marketView;

        if (!marketView) {
            return (
                <SelectMarketModal
                    backdrop="static"
                    show={this.state.selectMarketModalShow}
                    onHide={selectMarketModalHide} />
            );
        } else {
            return (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <Navbar bg="light" expand="lg" className="d-flex justify-content-between">
                                    <Navbar.Brand>React Market</Navbar.Brand>
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                        <Button variant="outline-success">Search</Button>
                                    </Form>
                                {marketView === "buy" ? (
                                    <Button onClick={() => this.setState({ cartModalDisplay: true })}>(
                                        <strong>0</strong>
                                        ) Items In Cart</Button>
                                ) : (
                                    <div></div>
                                )}
                                </Navbar>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col>
                                <ListGroup>
                                    <ListGroup.Item action>Item 1</ListGroup.Item>
                                    <ListGroup.Item action>Item 2</ListGroup.Item>
                                    <ListGroup.Item action>Item 3</ListGroup.Item>
                                    <ListGroup.Item action>Item 4</ListGroup.Item>
                                    <ListGroup.Item action>Item 5</ListGroup.Item>
                                    <ListGroup.Item action>Item 6</ListGroup.Item>
                                </ListGroup>
                        {marketView === "sell" ? (
                            <Button className="mt-3 btn-block" onClick={() => addEditItemModalDisplay(true, 'Add')}>Create New Item</Button>
                        ) : ('')}

                                <div className="mt-3">
                                    <Pagination>
                                        <Pagination.Item key="1" active="true">1</Pagination.Item>
                                        <Pagination.Item key="2">2</Pagination.Item>
                                        <Pagination.Item key="3">3</Pagination.Item>
                                        <Pagination.Item key="4">4</Pagination.Item>
                                        <Pagination.Item key="5">5</Pagination.Item>
                                    </Pagination>
                                </div>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Item Name</Card.Title>
                                        <Card.Text>
                                            Item Desc
                                            <br/>
                                            Item Price
                                        </Card.Text>
                                        <ButtonToolbar>
                                        {marketView === "buy" ? (
                                            <Button variant="primary">Add To Cart</Button>
                                        ) : (
                                            <ButtonToolbar>
                                                <Button variant="secondary" className="mr-2" onClick={() => addEditItemModalDisplay(true, 'Edit')}>Edit Item</Button>
                                                <Button variant="danger">Delete Item</Button>
                                            </ButtonToolbar>
                                        )}
                                        </ButtonToolbar>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <AddEditItemModal
                        backdrop="static"
                        addOrEdit={this.state.addEditItem}
                        show={this.state.addEditItemModalDisplay}
                        onHide={() => addEditItemModalDisplay(false, this.state.addEditItem)}
                        onExited={() => addEditItemModalDisplay(false, null)} />

                    <CartModal
                        backdrop="static"
                        show={this.state.cartModalDisplay}
                        onHide={() => this.setState({ cartModalDisplay: false })}
                        />
                </div>
            );
        }
    }
}

export default App;