import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectMarketModal extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <p className="text-center"><strong>I would like to...</strong></p>
                    <div>
                        <Button variant="primary" onClick={() => this.props.onHide('buy')} className="btn-block">Buy An Item</Button>
                    </div>
                    <div className="mt-3">
                        <Button variant="secondary" onClick={() => this.props.onHide('sell')} className="btn-block">Sell An Item</Button>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

export default SelectMarketModal;