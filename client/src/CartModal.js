import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';


class CartModal extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>Cart Items</Modal.Header>
                <Modal.Body>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li">
                            <div className="d-flex w-100 justify-content-between">
                                <h5>Item 1</h5>
                                <Button variant="danger">Remove</Button>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div className="d-flex w-100 justify-content-between">
                                <h5>Item 2</h5>
                                <Button variant="danger">Remove</Button>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div className="d-flex w-100 justify-content-between">
                                <h5>Item 3</h5>
                                <Button variant="danger">Remove</Button>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CartModal;