import React from 'react'
import { Media } from 'reactstrap'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
import moment from 'moment'



// Task 2 
function RenderDish({ dish }) {
    if (dish == null) {
        return (
            <div></div>
        )
    } else {
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
}

// Task 3
function RenderComments({ selectedDish }) {
    if (!selectedDish || selectedDish.comments == null) {
        return (
            <div></div>
        )
    } else {
        const commentsList = selectedDish.comments.map((comment) => {
            return (
                <div className="container">
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
                    </div>
                </div>

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

const DishDetail = (props) => {
    const selectedDish = props.dish;
    console.log(selectedDish);
    return (
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
                {/* {this.renderDish(selectedDish)} */}
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments selectedDish={props.dish} />
                {/* {this.renderComments(selectedDish)} */}
            </div>
        </div>
    )
}



export default DishDetail;