import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';


class CartModal extends Component {
    render() {
        return (
            <Modal
                backdrop="static"
                show={this.props.show}
                onHide={this.props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>Cart Items</Modal.Header>
                <Modal.Body>
                {!this.props.cartItems.length ? (
                    <Alert variant="danger">
                        Cart Is Empty!
                    </Alert>
                ) : (
                    <ListGroup as="ul">
                        {
                            this.props.cartItems.map((item, index) => {
                                return (
                                    <ListGroup.Item key={index} as="li">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5>{item.itemName}</h5>
                                            <Button variant="danger" onClick={() => this.props.removeCartItem(index)}>Remove</Button>
                                        </div>
                                    </ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                )}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CartModal;