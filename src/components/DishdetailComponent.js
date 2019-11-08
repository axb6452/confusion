import React, { Component } from 'react'
import { Media } from 'reactstrap'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
import moment from 'moment'

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    // Task 2 
    renderDish(dish) {
        return (
            <Card>
                <Media left middle>
                    <CardImg top src={dish.image}></CardImg>
                </Media>
                <CardBody>
                    <CardTitle heading>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    // Task 3
    renderComments(comments) {
        if (comments == null) {
            return (
                <div></div>
            )
        } else {
            const commentsList = comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <ul className="list-unstyled">
                            <li>
                                {comment.comment}
                            </li>
                            <li>
                                {"-- " + comment.author + " , "}
                                {moment(comment.date).format('MMM, DD YYYY')}
                            </li>
                        </ul>
                    </div >

                )
            })

            return (
                <div>
                    <h4>Comments</h4>
                    {commentsList}
                </div>
            )
        }
    }

    render() {
        const selectedDish = this.props.selectedDish;
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(selectedDish.comments)}
                </div>
            </div>
        )
    }
}

export default DishDetail;