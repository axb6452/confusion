import React, { Component } from 'react'
import { Media } from 'reactstrap'
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors } from 'react-redux-form'
import { Loading } from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl'
import { FadeTransform, Fade, Stagger } from 'react-animation-components'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        // console.log('Current state is: ', JSON.stringify(values));
        // alert('Current state is: ' + JSON.stringify(values), this.toggleModal());
        console.log(this.props.dishId);
        console.log(values.rating);
        console.log(values.author);
        console.log(values.comment);
        // this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);

    }

    render() {
        return (
            <>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Label htmlFor="rating">Rating</Label>
                            <Row className="form-group">
                                <Col md={10}>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option></option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Label htmlFor="author">Your Name</Label>
                            <Row className="form-group">
                                <Col md={10}>
                                    <Control.text placeholder="Your Name" name="author" className="form-control" model=".author" validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}></Control.text>
                                </Col>
                                <Errors className="text-danger" model=".author" show="touched" messages={{ required: 'Required', minLength: "Must be greater than 2 characters", maxLength: "Must be 15 characters or less" }}></Errors>
                            </Row>
                            <Label htmlFor="comment">Comment</Label>
                            <Row className="form-group">
                                <Col md={10}>
                                    <Control.textarea model=".comment" name="comment" rows="6" className="form-control"></Control.textarea>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={10}>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal >
            </>
        )
    };
}

function RenderDish({ dish }) {
    if (dish == null) {
        return (
            <div></div>
        )
    } else {
        return (
            // <Card>
            //     <Media left middle>
            //         <CardImg top src={dish.image}></CardImg>
            //     </Media>
            //     <CardBody>
            //         <CardTitle heading>{dish.name}</CardTitle>
            //         <CardText>{dish.description}</CardText>
            //     </CardBody>
            // </Card>
            <FadeTransform in transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
                <Card>
                    <Media left middle>
                        <CardImg top src={baseUrl + dish.image}></CardImg>
                    </Media>
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        )
    }
}

function RenderComments({ comments, postComment, dishId }) {
    if (comments == null) {
        return (
            <div></div>
        )
    } else {
        const commentsList = comments.map((comment) => {
            return (
                <div className="container">
                    <div key={comment.id}>
                        <Stagger in>
                            <ul className="list-unstyled">
                                <Fade in>
                                    <li>
                                        {comment.comment}
                                    </li>
                                    <li >
                                        {"-- " + comment.author + " , "}
                                        {moment(comment.date).format('MMM, DD YYYY')}
                                    </li>
                                </Fade>
                            </ul>
                        </Stagger>
                    </div>
                </div>
            )
        })

        // TODO: Append new addComment to list here if comment exists.
        return (
            <div>
                <h4>Comments</h4>
                {commentsList}
                {/* <CommentForm dishId={dishId} addComment={addComment} /> */}

                <CommentForm dishId={dishId} postComment={postComment} />
            </div>
        )
    }
}

const DishDetail = (props) => {
    if (props.isLoading) {
        /**Conditional rendering */ 
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    } else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                        {/* {this.renderDish(selectedDish)} */}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments}  /* {this.renderComments(selectedDish)} */
                            // addComment={props.addComment}
                            postComment={props.postComment}
                            dishId={props.dish.id} />
                    </div>
                </div>
            </div>
        )
    }
}



export default DishDetail;