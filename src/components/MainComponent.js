import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { parse } from 'path';
import { connect } from 'react-redux';

// Need to define mapStateToProps() function, which obtains state as a parameter.
// Have to connect this component to redux store in order to receive state. 

const mapStateToProps = state => { //This will map the redux store state into props that will become available to the component. Enables redux state to be available as props inside main component. 
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    };
}


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const HomePage = () => {
            {/* A second way to define function components - explicit declaration of function component*/ }
            return (
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}></Home>
            )
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} comments={this.props.comments.filter((comment) => comment.dishId == parseInt(match.params.dishId, 10))}></DishDetail>
            )
        }


        return (
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} /> {/* Inline function component declaration in order to pass props to menu component.*/}
                        <Route path="/menu/:dishId" component={DishWithId}></Route>
                        <Route exact path="/contactus" component={Contact}></Route> {/* when not passng any props to component, can just reference component as such using {}*/}
                        <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />  {/*Assignment 2: Task 1*/}
                        <Redirect to="/home"></Redirect>
                    </Switch>
                </div>
                <Footer />
            </div >
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main)); // Syntax to connect component to redux store with react router. 
