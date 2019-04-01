import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
//import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class AddEditItemModal extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>{this.props.addOrEdit} Item</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId="itemImage">
                            <Form.Label column sm={2}>
                                Item Image
                            </Form.Label>
                            <Col sm={10}>
                            {this.props.currentItem ? (
                                <div>
                                    <img src={this.props.currentItem.itemImage} width="100" alt="Item"/>
                                    <Form.Control type="file" required />
                                </div>
                            ) : (
                                <Form.Control type="file" required />
                            )}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="itemName">
                            <Form.Label column sm={2}>
                                Item Name
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" required value={this.props.currentItem ? this.props.currentItem.itemName : ''} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="itemDesc">
                            <Form.Label column sm={2}>
                                Item Description
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control as="textarea" rows="3" value={this.props.currentItem ? this.props.currentItem.itemDesc : ''}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="itemPrice">
                            <Form.Label column sm={2}>
                                Item Price
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" required value={this.props.currentItem ? this.props.currentItem.itemDesc : ''} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button variant="primary" type="submit" className="mr-2">{this.props.addOrEdit} Item</Button>
                                <Button variant="secondary" onClick={this.props.onHide}>Cancel</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

export default AddEditItemModal;