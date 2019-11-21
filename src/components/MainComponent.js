import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import DishDetail from './DishdetailComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom'



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId })
    }

    render() {
        const HomePage = () => {
            {/* A second way to define function components - explicit declaration of function component*/ }
            return (
                <Home />
            )
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} /> {/* Inline function component declaration in order to pass props to menu component.*/}
                    <Redirect to="/home"></Redirect>    
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default Main;
