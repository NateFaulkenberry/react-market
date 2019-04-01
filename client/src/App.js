// /client/App.js
import React, { Component } from "react";
//import axios from "axios";

import Button from 'react-bootstrap/Button';
//import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Pagination from 'react-bootstrap/Pagination';
//import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';

import 'holderjs';

import SelectMarketModal from './SelectMarketModal';
import AddEditItemModal from './AddEditItemModal';
import CartModal from './CartModal';
import ItemCard from './ItemCard';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectMarketModalShow: true,
            addEditItemModalDisplay: false,
            cartModalDisplay: false,
            addEditItem: null,
            marketView: null,
            currentPage: 0,
            currentItem: null,
            items: [
                
            ],
            cartItems: []
        }
    }

    render() {
        const marketView = this.state.marketView;
        const { items } = this.state;
        const currentItem = this.state.currentItem;
        const cartItems = this.state.cartItems;

        const selectMarketModalHide = (marketView) => this.setState({ selectMarketModalShow: false, marketView: marketView });
        const addEditItemModalDisplay = (display, addOrEdit) => this.setState({ addEditItemModalDisplay: display, addEditItem: addOrEdit });
        const addItemToCart = () => this.setState({ cartItems: cartItems.concat([currentItem]), currentItem: null });

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
                                        <strong>{cartItems.length}</strong>
                                        ) Items In Cart</Button>
                                ) : (
                                    <div></div>
                                )}
                                </Navbar>
                            </Col>
                        </Row>
                    {!items.length ? (
                        <Row className="mt-5">
                            <Col>
                                <Alert variant="danger">
                                    No items to display!
                                </Alert>
                            </Col>
                        </Row>
                    ) : (
                        <Row className="mt-5">
                            <Col>
                                <ListGroup>
                                    {
                                        items.map((item) => {
                                            return (
                                                <ListGroup.Item key={item.itemId} action onClick={() => this.setState({ currentItem: item })}>
                                                    {item.itemName}
                                                    <Badge variant="primary" className="float-right">{item.itemPrice}</Badge>
                                                </ListGroup.Item>
                                            )
                                        })
                                    }
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
                                <ItemCard
                                    currentItem={currentItem}
                                    addEditItem={addEditItemModalDisplay}
                                    marketView={marketView}
                                    addItemToCart={addItemToCart}
                                />
                            </Col>
                        </Row>
                    )}
                    </Container>
                    <AddEditItemModal
                        backdrop="static"
                        addOrEdit={this.state.addEditItem}
                        currentItem={this.state.currentItem}
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