import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';
import { parse } from 'path';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            comments: COMMENTS,
            leaders: LEADERS
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId })
    }

    render() {
        const HomePage = () => {
            {/* A second way to define function components - explicit declaration of function component*/ }
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}></Home>
            )
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} comments={this.state.comments.filter((comment) => comment.dishId == parseInt(match.params.dishId, 10))}></DishDetail>
            )
        }


        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} /> {/* Inline function component declaration in order to pass props to menu component.*/}
                    <Route path="/menu/:dishId" component={DishWithId}></Route>
                    <Route exact path="/contactus" component={Contact}></Route> {/* when not passng any props to component, can just reference component as such using {}*/}
                    <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />  {/*Assignment 2: Task 1*/}
                    <Redirect to="/home"></Redirect>
                </Switch>

                <Footer />
            </div >
        );
    }
}

export default Main;
