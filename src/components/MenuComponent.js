import React, { Component } from 'react'
import { Media } from 'reactstrap'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'



class Menu extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <Media left middle>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                        </Media>
                        <CardImgOverlay>
                            <CardTitle heading>{dish.name}</CardTitle>
                            <p>{dish.description}</p>
                        </CardImgOverlay>
                    </Card>
                </div >
            )
        });

        return (
            <div className="container" >
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;