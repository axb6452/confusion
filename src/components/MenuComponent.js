import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Loading } from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl'

function RenderMenuItem({ dish, onClick }) {
    return (
        // <Card>
        //     <Link to={`/menu/${dish.id}`}> {/*use of back quotes ensures that the value is evaluated and interpolated into the link path*/}
        //         <CardImg width="100%" src={dish.image} alt={dish.name} />
        //         <CardImgOverlay>
        //             <CardTitle heading>{dish.name}</CardTitle>
        //             <p>{dish.description}</p>
        //         </CardImgOverlay>
        //     </Link>
        // </Card>
        <Card>
            <Link to={`/menu/${dish.id}`}> {/*use of back quotes ensures that the value is evaluated and interpolated into the link path*/}
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle heading>{dish.name}</CardTitle>
                    <p>{dish.description}</p>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    console.log('menu component');
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        )
    });

    if (props.dishes.isLoading) {
        {/**Conditional rendering */ }
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    } else if (props.dishes.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}


export default Menu;
