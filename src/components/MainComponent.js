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
// import { addComment, fetchDishes, fetchComments, fetchPromos} from '../redux/ActionCreators';
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// Need to define mapStateToProps() function, which obtains state as a parameter.
// Have to connect this component to redux store in order to receive state. 
// Console output window enables you to keep tract of form state in redux store. 

const mapStateToProps = state => { //This will map the redux store state into props that will become available to the component. Enables redux state to be available as props inside main component. 
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    };
}

const mapDispatchToProps = (dispatch) => ({
    // addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)), // addComment action creator passed 4 parameter values. This will then return the action object for adding a comment. Action object is then passed as parameter to dispatch function, which is then used within the component in connect(). 
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)), // postComment action creator passed 4 parameter values. This will then return the action object for adding a comment. Action object is then passed as parameter to dispatch function, which is then used within the component in connect().   
    fetchDishes: () => { dispatch(fetchDishes()) }, //Can dispatch fetchDishes() thunk so that it is loaded in redux store and is available for the MainComponent to make use of .  
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
    fetchComments: () => { dispatch(fetchComments()) },
    fetchPromos: () => { dispatch(fetchPromos()) }
});


class Main extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchDishes(); // When main component is getting mounted in the view, after it is mounted, fetchDishes() is called resulting in a call to fetch the dishes and load it into redux store making it available to the application. 
        this.props.fetchComments();
        this.props.fetchPromos();
    }

    render() {
        const HomePage = () => {
            {/* A second way to define function components - explicit declaration of function component*/ }
            return (
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promosErrMess={this.props.promotions.errMess}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}>
                </Home>
            )
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId == parseInt(match.params.dishId, 10))}
                    commentsErrMess={this.props.comments.errMess}
                    // addComment={this.props.addComment}>
                    postComment={this.props.postComment}>
                </DishDetail>
            )
        }


        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <div>
                            <Switch>
                                <Route path="/home" component={HomePage} />
                                <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} /> {/* Inline function component declaration in order to pass props to menu component.*/}
                                <Route path="/menu/:dishId" component={DishWithId}></Route>
                                <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} ></Contact>}></Route> {/* when not passng any props to component, can just reference component as such using {}*/}
                                <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />  {/*Assignment 2: Task 1*/}
                                <Redirect to="/home"></Redirect>
                            </Switch>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div >
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); // Syntax to connect component to redux store with react router. 
