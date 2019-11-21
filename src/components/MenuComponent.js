import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

function RenderMenuItem({ dish, onClick }) {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle heading>{dish.name}</CardTitle>
                <p>{dish.description}</p>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {
    console.log('menu component');
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}







export default Menu;
