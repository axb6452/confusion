import React, { Component } from 'react'
import { Media } from 'reactstrap'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
import DishDetail from './DishdetailComponent'


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    componentDidMount() {
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }

    // Task 1
    renderDish(dish) {
        if (dish && dish != null) {
            return (
                <DishDetail selectedDish = {dish} /> 
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
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
                <div>
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;