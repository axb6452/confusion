import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, FormFeedback, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Control, Form, Errors, actions } from 'react-redux-form' //Manages state, handleInputChange(), handleBlur() on our behalf

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val); //check validity of email using regEx.

class Contact extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     firstName: '',
        //     lastName: '',
        //     telNum: '',
        //     email: '',
        //     agree: false,
        //     contactType: 'Tel.',
        //     message: '',
        //     touched: {
        //         firstName: false,
        //         lastName: false,
        //         telnum: false,
        //         email: false
        //     }
        //  }
        this.handleSubmit = this.handleSubmit.bind(this);
        //     this.handleInputChange = this.handleInputChange.bind(this);
        //     this.handleBlur = this.handleBlur.bind(this);
    }
    /*invoked upon any change to any input value in our form. When it is invoked, we will retrieve the target input from the event that has just been passed in*/
    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     this.setState({
    //         [name]: value
    //     });
    // }
    /*In order to make this handleSubmit information available for use like with the form, we need to bind this in the constructor. */
    handleSubmit(values) { //input parameter values as we no longer have state - have to print out values
        // console.log("Current state is: ", JSON.stringify(this.state));
        console.log("Current state is: ", JSON.stringify(values));
        // alert("Current state is: " + JSON.stringify(this.state));
        alert("Current state is: " + JSON.stringify(values));
        // event.preventDefault(); {/*Prevent default behavior when submitting a form (going to the next page)*/ }
        this.props.resetFeedbackForm();
    }

    // Ensures that for whatever field, the touched value of the field's state will be set to true
    // handleBlur = (field) => (evt) => {
    //     this.setState({
    //         touched: { ...this.state.touched, [field]: true }
    //     });
    // }

    // validate(firstName, lastName, telNum, email) {
    //     const errors = {
    //         firstName: '',
    //         lastName: '',
    //         telNum: '',
    //         email: '',
    //     };

    //     if(this.state.touched.firstName && firstName.length < 3) {
    //     errors.firstName = 'First name should be >= 3 characters';
    // } else if (this.state.touched.firstName && firstName.length > 10) {
    //     errors.firstName = 'First name should be <= 10 characters';
    // }

    // if (this.state.touched.lastName && lastName.length < 3) {
    //     errors.lastName = 'Last name should be >= 3 characters';
    // } else if (this.state.touched.lastName && lastName.length > 10) {
    //     errors.lastName = 'Last name should be <= 10 characters';
    // }

    // const reg = /^\d+$/;
    // if (this.state.touched.telNum && !reg.test(telNum)) {
    //     errors.telNum = 'Tel. Number should only contain numbers';
    // }
    // if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) {
    //     errors.email = 'Email should contain an @';
    // }

    // return errors;
    //     }
    render() {
        // const errors = this.validate(this.state.firstName, this.state.lastName, this.state.telNum, this.state.email)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        {/* <Form onSubmit={this.handleSubmit}> */}
                        {/* <LocalForm onSubmit={(values) => this.handleSubmit(values)}> *Update form to use react-redux-form using LocalForm elements */}
                        {/* <FormGroup row> */} {/**No longer importing FormGroup from react-strap */}
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>{/*Col in reactstrap is like saying div class name is equal to col-md-10. So that's condensed into this format using the reactstrap col component here*/}
                                    {/* <Input type="text" id="firstname" name="firstName" placeholder="First Name" value={this.state.firstName} valid={errors.firstName === ''} invalid={errors.firstName !== ''} onBlur={this.handleBlur('firstName')} onChange={this.handleInputChange}></Input> */}
                                    <Control.text placeholder="First Name" name="firstName" className="form-control" model=".firstName" validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}></Control.text> {/**Specification of the model reflects state information when form is submitted. */}
                                    {/* <FormFeedback>{errors.firstName}</FormFeedback> */}
                                    <Errors className="text-danger" model=".firstName" show="touched"
                                        messages={{ required: 'Required', minLength: "Must be greater than 2 characters", maxLength: "Must be 15 characters or less" }}>
                                    </Errors>
                                </Col>
                            </Row>
                            {/* </FormGroup> */}
                            {/* <FormGroup row> */}
                            <Row className="form-group">
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>{/*Col in reactstrap is like saying div class name is equal to col-md-10. So that's condensed into this format using the reactstrap col component here*/}
                                    {/* <Input type="text" id="lastname" name="lastName" placeholder="Last Name" value={this.state.lastName} valid={errors.lastName === ''} invalid={errors.lastName !== ''} onBlur={this.handleBlur('lastName')} onChange={this.handleInputChange}></Input> */}
                                    <Control.text placeholder="Last Name" name="lastName" className="form-control" model=".lastName" validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}></Control.text>
                                    {/* <FormFeedback>{errors.lastName}</FormFeedback> */}
                                    <Errors className="text-danger" model=".lastName" show="touched"
                                        messages={{ required: 'Required', minLength: "Must be greater than 2 characters", maxLength: "Must be 15 characters or less" }}>
                                    </Errors>
                                </Col>
                                {/* </FormGroup> */}
                            </Row>
                            {/* <FormGroup row> */}
                            <Row className="form-group">
                                <Label htmlFor="telNum" md={2}>Contact Tel.</Label>
                                <Col md={10}>{/*Col in reactstrap is like saying div class name is equal to col-md-10. So that's condensed into this format using the reactstrap col component here*/}
                                    {/* <Input type="tel" id="telnum" name="telNum" placeholder="Tel. Number" value={this.state.telNum} valid={errors.telNum === ''} invalid={errors.telNum !== ''} onBlur={this.handleBlur('telNum')} onChange={this.handleInputChange}></Input> */}
                                    <Control.text placeholder="Tel. Number" name="telNum" className="form-control" model=".telNum" validators={{ required, minLength: minLength(3), maxLength: maxLength(15), isNumber }}></Control.text>
                                    <Errors className="text-danger" model=".telNum" show="touched"
                                        messages={{ required: 'Required', minLength: "Must be greater than 2 numbers", maxLength: "Must be 15 numbers or less", isNumber: "Must be a number" }}>
                                    </Errors>
                                    {/* <FormFeedback>{errors.telNum}</FormFeedback> */}
                                </Col>
                            </Row>
                            {/* </FormGroup> */}
                            {/* <FormGroup row> */}
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>{/*Col in reactstrap is like saying div class name is equal to col-md-10. So that's condensed into this format using the reactstrap col component here*/}
                                    {/* <Input type="email" id="email" name="email" placeholder="Email" value={this.state.email} valid={errors.email === ''} invalid={errors.email !== ''} onBlur={this.handleBlur('email')} onChange={this.handleInputChange}></Input> */}
                                    <Control.text placeholder="Email" name="email" className="form-control" model=".email" validators={{ required, validEmail }}></Control.text>
                                    {/* <FormFeedback>{errors.email}</FormFeedback> */}
                                    <Errors className="text-danger" model=".email" show="touched"
                                        messages={{ required: 'Required', validEmail: 'Invalid email address' }}>
                                    </Errors>
                                </Col>
                            </Row>
                            {/* </FormGroup> */}
                            {/* <FormGroup row> */}
                            <Row className="form-group">
                                <Col md={{ size: 6, offset: 2 }}>{/*Col in reactstrap is like saying div class name is equal to col-md-10. So that's condensed into this format using the reactstrap col component here*/}
                                    {/* <FormGroup check> */}
                                    <div className="form-check">
                                        <Label check>
                                            {/* <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange}></Input>{' '} */}
                                            <Control.checkbox model=".agree" name="agree" className="form-check-input"></Control.checkbox>
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                    {/* </FormGroup> */}
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>{/*Col in reactstrap is like saying div class name is equal to col-md-10. So that's condensed into this format using the reactstrap col component here*/}
                                    {/* <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}> */}
                                    <Control.select model=".contactType" name="contactType" className="form-control" >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                    {/* </Input> */}
                                </Col>
                            </Row>
                            {/* </FormGroup> */}
                            <Row className="form-group">
                                {/* <FormGroup row> */}
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>{/*Col in reactstrap is like saying div class name is equal to col-md-10. So that's condensed into this format using the reactstrap col component here*/}
                                    {/* <Input type="textarea" id="message" name="message" rows="12" value={this.state.message} onChange={this.handleInputChange}></Input> */}
                                    <Control.textarea model=".message" name="message" rows="12" className="form-control"></Control.textarea>
                                </Col>
                                {/* </FormGroup> */}
                            </Row>
                            {/* <FormGroup row> */}
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>{/*Col in reactstrap is like saying div class name is equal to col-md-10. So that's condensed into this format using the reactstrap col component here*/}
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                            {/* </FormGroup> */}
                            {/* </Form> */}
                            {/* </LocalForm> */}
                        </Form>
                    </div>
                </div >
            </div >
        );
    }
}


export default Contact;