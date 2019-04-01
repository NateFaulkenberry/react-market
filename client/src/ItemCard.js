import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';


class ItemCard extends Component {
    render() {
        if (!this.props.currentItem) {
            return null;
        }
        return (
            <Card>
                <Card.Img variant="top" src={this.props.currentItem.itemImage} />
                <Card.Body>
                    <Card.Title>{this.props.currentItem.itemName}</Card.Title>
                    <Card.Text>
                    {this.props.currentItem.itemDesc}
                        <br/>
                    {this.props.currentItem.itemPrice}
                    </Card.Text>
                    <ButtonToolbar>
                {this.props.marketView === "buy" ? (
                    <Button variant="primary" onClick={() => this.props.addItemToCart()}>Add To Cart</Button>
                ) : (
                    <ButtonToolbar>
                        <Button variant="primary" className="mr-2" onClick={() => this.props.addEditItem(true, 'Edit')}>Edit Item</Button>
                        <Button variant="danger">Delete Item</Button>
                    </ButtonToolbar>
                )}
                    </ButtonToolbar>
                </Card.Body>
            </Card>
        );
    }
}

export default ItemCard;